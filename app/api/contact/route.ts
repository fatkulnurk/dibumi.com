import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Mohon lengkapi nama, email, dan pesan kebutuhan Anda." },
        { status: 400 }
      );
    }

    // In a production environment, send notification to Telegram Bot, Discord Webhook, or Resend Email:
    // e.g., await fetch(process.env.DISCORD_WEBHOOK_URL, { ... })

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil diterima. Tim dibumi.com akan segera menghubungi Anda.",
      receivedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Gagal memproses formulir kontak." },
      { status: 500 }
    );
  }
}
