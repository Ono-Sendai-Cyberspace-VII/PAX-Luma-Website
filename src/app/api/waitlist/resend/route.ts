import { NextRequest, NextResponse } from "next/server";
import { refreshVerifyCode } from "@/lib/waitlist";
import { sendVerificationEmail } from "@/lib/email";

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

    // Send verification email
    if (result.code) {
      const emailResult = await sendVerificationEmail(
        email.trim().toLowerCase(),
        result.code,
        "there" // We don't have the name on resend
      );
      if (!emailResult.success) {
        console.error(`[WAITLIST RESEND] Email send failed for ${email}:`, emailResult.error);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
