import { NextRequest, NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, invite_code, excitement } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
               request.headers.get("x-real-ip") ||
               "unknown";

    const result = addToWaitlist({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      invite_code: invite_code?.trim(),
      excitement: excitement?.trim(),
      ip_address: ip,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 409 });
    }

    // TODO: Send verification email with result.code
    // For now, the code is generated and stored — email integration needed
    console.log(`[WAITLIST] Verification code for ${email}: ${result.code}`);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
