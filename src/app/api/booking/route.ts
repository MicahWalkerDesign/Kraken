import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Helper to escape MarkdownV2 special characters
function escapeMarkdown(text: string): string {
    return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}

async function sendTelegramNotification(bookingData: any) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.warn("Telegram credentials not set");
        return;
    }

    const { name, email, phone, serviceType, date, slot, address, notes } =
        bookingData;

    const message = `
*🆕 New Booking Request*

*Customer:* ${escapeMarkdown(name)}
*Phone:* \`${escapeMarkdown(phone)}\`
*Email:* ${escapeMarkdown(email)}
*Service:* ${escapeMarkdown(serviceType)}
*Date:* ${escapeMarkdown(date)}
*Time:* ${escapeMarkdown(slot)}
*Address:* ${escapeMarkdown(address || "Not provided")}

*Notes:*
${escapeMarkdown(notes || "None")}
  `.trim();

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: "MarkdownV2",
                }),
            }
        );

        if (!response.ok) {
            const error = await response.text();
            console.error("Telegram API Error:", error);
        }
    } catch (error) {
        console.error("Failed to send Telegram notification:", error);
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, serviceType, date, slot } = body;

        // specific validation
        if (!name || !email || !phone || !serviceType || !date || !slot) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Send notifications
        await sendTelegramNotification(body);

        // In a real app, save to DB here

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Booking Error:", error);
        return NextResponse.json(
            { error: "Failed to process booking" },
            { status: 500 }
        );
    }
}
