import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    if (!start || !end) {
        return NextResponse.json(
            { error: "Start and end dates are required" },
            { status: 400 }
        );
    }

    // Mock availability logic
    // In a real app, this would query a database or Google Calendar
    const availability = [];
    const startDate = new Date(start);
    const endDate = new Date(end);
    const current = new Date(startDate);

    while (current <= endDate) {
        // 0 = Sunday, 6 = Saturday
        const day = current.getDay();
        const isWeekend = day === 0 || day === 6;

        availability.push({
            date: current.toISOString().split("T")[0],
            slots: {
                // Weekends are closed, weekdays are open
                morning: !isWeekend,
                midday: !isWeekend,
                afternoon: !isWeekend,
            },
        });

        current.setDate(current.getDate() + 1);
    }

    return NextResponse.json({ availability });
}
