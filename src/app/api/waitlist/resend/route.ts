import { NextRequest, NextResponse } from "next/server";
import { refreshVerifyCode } from "@/lib/waitlist";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const result = refreshVerifyCode(email.trim().toLowerCase());

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    // TODO: Send verification email with result.code
    // For now, the code is generated and stored — email integration needed
    console.log(`[WAITLIST RESEND] Verification code for ${email}: ${result.code}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
