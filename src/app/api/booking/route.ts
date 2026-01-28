import { NextRequest, NextResponse } from "next/server";

interface BookingRequest {
    name: string;
    phone: string;
    suburb: string;
    description: string;
    slot: {
        date: string;
        time: string;
        label: string;
    };
}

// Simple validation
function validateBooking(data: BookingRequest): string | null {
    if (!data.name || data.name.trim().length < 2) {
        return "Name is required";
    }
    if (!data.phone || !/^[0-9+\s-]{8,}$/.test(data.phone)) {
        return "Valid phone number is required";
    }
    if (!data.suburb || data.suburb.trim().length < 2) {
        return "Suburb is required";
    }
    if (!data.description || data.description.trim().length < 10) {
        return "Please provide a description of the problem (at least 10 characters)";
    }
    if (!data.slot?.date || !data.slot?.time) {
        return "Time slot is required";
    }
    return null;
}

export async function POST(request: NextRequest) {
    try {
        const data: BookingRequest = await request.json();

        // Validate
        const validationError = validateBooking(data);
        if (validationError) {
            return NextResponse.json({ error: validationError }, { status: 400 });
        }

        // Format the booking details
        const bookingDetails = {
            name: data.name.trim(),
            phone: data.phone.trim(),
            suburb: data.suburb.trim(),
            description: data.description.trim(),
            requestedDate: data.slot.date,
            requestedTime: data.slot.label,
            submittedAt: new Date().toISOString(),
        };

        // Log booking (in production, this would go to a database)
        console.log("📅 New Booking Request:", JSON.stringify(bookingDetails, null, 2));

        // Send notifications in parallel
        const notifications = [];

        // Email notification (if configured)
        if (process.env.NOTIFICATION_EMAIL && process.env.RESEND_API_KEY) {
            notifications.push(sendEmailNotification(bookingDetails));
        }

        // Telegram notification (if configured)
        if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
            notifications.push(sendTelegramNotification(bookingDetails));
        }

        await Promise.allSettled(notifications);

        return NextResponse.json({
            success: true,
            message: "Booking request received. We will call you shortly.",
        });
    } catch (error) {
        console.error("Booking submission error:", error);
        return NextResponse.json(
            { error: "Failed to process booking request" },
            { status: 500 }
        );
    }
}

// Telegram notification (free, supports groups!)
async function sendTelegramNotification(booking: {
    name: string;
    phone: string;
    suburb: string;
    description: string;
    requestedDate: string;
    requestedTime: string;
    submittedAt: string;
}) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID; // Can be a group chat ID (negative number)

    if (!botToken || !chatId) {
        console.warn("Telegram notification skipped: missing credentials");
        return;
    }

    // Format message with Markdown
    const message = `🔔 *NEW BOOKING*

👤 *${escapeMarkdown(booking.name)}*
📞 \`${booking.phone}\`
📍 ${escapeMarkdown(booking.suburb)}

📅 ${booking.requestedDate}
⏰ ${booking.requestedTime}

💬 _${escapeMarkdown(booking.description)}_

Submitted: ${new Date(booking.submittedAt).toLocaleString("en-AU")}`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: "Markdown",
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Telegram notification failed:", errorData);
        } else {
            console.log("✅ Telegram notification sent successfully");
        }
    } catch (error) {
        console.error("Telegram send error:", error);
    }
}

// Escape special characters for Telegram Markdown
function escapeMarkdown(text: string): string {
    return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}

// Email notification function (placeholder - integrate with Resend, SendGrid, etc.)
async function sendEmailNotification(booking: {
    name: string;
    phone: string;
    suburb: string;
    description: string;
    requestedDate: string;
    requestedTime: string;
    submittedAt: string;
}) {
    // If using Resend.io
    if (process.env.RESEND_API_KEY) {
        try {
            const response = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: "Kraken Bookings <bookings@krakenairelectrical.com.au>",
                    to: process.env.NOTIFICATION_EMAIL,
                    subject: `New Booking Request - ${booking.name} (${booking.suburb})`,
                    html: `
            <h2>New Booking Request</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${booking.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${booking.phone}">${booking.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Suburb</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${booking.suburb}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Requested Date</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${booking.requestedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Requested Time</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${booking.requestedTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Problem</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${booking.description}</td>
              </tr>
            </table>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              Submitted at: ${new Date(booking.submittedAt).toLocaleString("en-AU")}
            </p>
          `,
                }),
            });

            if (!response.ok) {
                console.error("Failed to send email:", await response.text());
            }
        } catch (error) {
            console.error("Email send error:", error);
        }
    }
}
