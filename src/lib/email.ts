import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = "NYO <noreply@ichinyo.ai>";

export async function sendVerificationEmail(to: string, code: string, name: string) {
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject: `${code} — Your NYO Waitlist Verification Code`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="font-size: 24px; font-weight: 700; color: #0A0A0A; margin: 0;">
            NYO / PAX:Luma
          </h1>
          <p style="font-size: 14px; color: #6B6B6B; margin-top: 4px;">
            Waitlist Email Verification
          </p>
        </div>

        <p style="font-size: 16px; color: #2D2D2D; line-height: 1.6;">
          Hi ${name},
        </p>

        <p style="font-size: 16px; color: #2D2D2D; line-height: 1.6;">
          Confirm your email to secure your position on the PAX:Luma waitlist.
          Enter this verification code:
        </p>

        <div style="text-align: center; margin: 32px 0;">
          <div style="display: inline-block; background: #f4f6f5; border: 2px solid #E0E0E0; border-radius: 12px; padding: 16px 32px;">
            <span style="font-family: 'SF Mono', 'Fira Code', monospace; font-size: 36px; font-weight: 700; letter-spacing: 8px; color: #0A0A0A;">
              ${code}
            </span>
          </div>
        </div>

        <p style="font-size: 14px; color: #6B6B6B; line-height: 1.6;">
          This code expires in 15 minutes. If you didn&rsquo;t sign up for the NYO waitlist, you can safely ignore this email.
        </p>

        <hr style="border: none; border-top: 1px solid #E0E0E0; margin: 32px 0;" />

        <p style="font-size: 12px; color: #999999; text-align: center; line-height: 1.5;">
          NYO &mdash; An Ichinyo Corporation Brand<br />
          Embodied synthetic intelligence grounded in first principles.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[EMAIL] Failed to send verification email:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
