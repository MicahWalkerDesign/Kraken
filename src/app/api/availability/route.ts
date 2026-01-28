import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Time slot definitions (must match frontend)
const TIME_SLOTS = [
    { id: "morning", start: 9, end: 12 },
    { id: "midday", start: 12, end: 15 },
    { id: "afternoon", start: 15, end: 18 },
] as const;

// Initialize Google Calendar client
function getCalendarClient() {
    // Check for required environment variables
    if (
        !process.env.GOOGLE_CLIENT_ID ||
        !process.env.GOOGLE_CLIENT_SECRET ||
        !process.env.GOOGLE_REFRESH_TOKEN
    ) {
        return null;
    }

    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    return google.calendar({ version: "v3", auth: oauth2Client });
}

// Check if a time range overlaps with any busy period
function isSlotBusy(
    slotStart: Date,
    slotEnd: Date,
    busyPeriods: Array<{ start: string; end: string }>
): boolean {
    for (const busy of busyPeriods) {
        const busyStart = new Date(busy.start);
        const busyEnd = new Date(busy.end);

        // Check for overlap
        if (slotStart < busyEnd && slotEnd > busyStart) {
            return true;
        }
    }
    return false;
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get("start");
    const endDate = searchParams.get("end");

    if (!startDate || !endDate) {
        return NextResponse.json(
            { error: "Missing start or end date" },
            { status: 400 }
        );
    }

    // Parse dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setDate(end.getDate() + 1); // Include end date

    // Try to get Google Calendar availability
    const calendar = getCalendarClient();
    let busyPeriods: Array<{ start: string; end: string }> = [];

    if (calendar) {
        try {
            const freeBusyResponse = await calendar.freebusy.query({
                requestBody: {
                    timeMin: start.toISOString(),
                    timeMax: end.toISOString(),
                    items: [{ id: process.env.GOOGLE_CALENDAR_ID || "primary" }],
                },
            });

            const calendars = freeBusyResponse.data.calendars;
            const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
            busyPeriods = (calendars?.[calendarId]?.busy || []).map((b) => ({
                start: b.start || "",
                end: b.end || "",
            }));
        } catch (error) {
            console.error("Google Calendar API error:", error);
            // Continue with empty busy periods (all slots available)
        }
    }

    // Generate availability for each day
    const availability = [];
    const currentDate = new Date(start);

    while (currentDate < end) {
        const dateKey = currentDate.toISOString().split("T")[0];
        const slots: Record<string, boolean> = {};

        for (const slot of TIME_SLOTS) {
            const slotStart = new Date(currentDate);
            slotStart.setHours(slot.start, 0, 0, 0);

            const slotEnd = new Date(currentDate);
            slotEnd.setHours(slot.end, 0, 0, 0);

            // Check if slot is in the past
            const now = new Date();
            if (slotEnd < now) {
                slots[slot.id] = false;
            } else {
                slots[slot.id] = !isSlotBusy(slotStart, slotEnd, busyPeriods);
            }
        }

        availability.push({ date: dateKey, slots });
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return NextResponse.json(
        { availability },
        {
            headers: {
                // Cache for 5 minutes
                "Cache-Control": "public, max-age=300",
            },
        }
    );
}
