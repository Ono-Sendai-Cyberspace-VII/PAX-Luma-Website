"use client";

import { useState, useRef, type FormEvent, type KeyboardEvent, type ClipboardEvent } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { CheckCircle, Sparkles } from "lucide-react";

function InviteCodeInput({ value, onChange }: { value: string; onChange: (code: string) => void }) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const groups = 3;
  const digitsPerGroup = 4;
  const total = groups * digitsPerGroup;

  // Split value into individual characters
  const chars = value.toUpperCase().padEnd(total, "").split("").slice(0, total);

  function handleInput(index: number, char: string) {
    if (!/^[A-Za-z0-9]$/.test(char)) return;
    const newChars = [...chars];
    newChars[index] = char.toUpperCase();
    onChange(newChars.join(""));
    // Advance to next
    if (index < total - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newChars = [...chars];
      if (chars[index] && chars[index] !== " ") {
        newChars[index] = "";
        onChange(newChars.join(""));
      } else if (index > 0) {
        newChars[index - 1] = "";
        onChange(newChars.join(""));
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < total - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(e: ClipboardEvent) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^A-Za-z0-9]/g, "").slice(0, total);
    onChange(pasted.toUpperCase());
    const focusIdx = Math.min(pasted.length, total - 1);
    setTimeout(() => inputRefs.current[focusIdx]?.focus(), 0);
  }

  return (
    <div>
      <label className="block text-sm font-medium text-nyo-gray-200 mb-2">
        Invite Code
      </label>
      <div className="flex items-center gap-2 sm:gap-3 justify-center" onPaste={handlePaste}>
        {Array.from({ length: groups }).map((_, g) => (
          <div key={g} className="flex items-center gap-0.5">
            {Array.from({ length: digitsPerGroup }).map((_, d) => {
              const idx = g * digitsPerGroup + d;
              return (
                <input
                  key={idx}
                  ref={(el) => { inputRefs.current[idx] = el; }}
                  type="text"
                  maxLength={1}
                  value={chars[idx]?.trim() || ""}
                  onChange={(e) => handleInput(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className="w-7 h-9 sm:w-9 sm:h-11 text-center text-sm sm:text-lg font-mono font-semibold rounded-md sm:rounded-lg bg-nyo-gray-800/60 border border-nyo-gray-600/30 text-nyo-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-nyo-orange/50 focus:border-nyo-orange/50 hover:border-nyo-gray-400/50"
                  aria-label={`Invite code digit ${idx + 1}`}
                />
              );
            })}
            {g < groups - 1 && (
              <span className="text-nyo-gray-600 font-mono mx-1 select-none">&ndash;</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-nyo-gray-600 mt-2 text-center">
        Optional &mdash; enter your 12-character invite code if you have one
      </p>
    </div>
  );
}

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      invite_code: inviteCode.replace(/[^A-Za-z0-9]/g, "") || undefined,
      excitement: formData.get("excitement") as string,
    };

    if (!data.name || !data.email) {
      setError("Full name and email are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nyo-black via-nyo-gray-900 to-nyo-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-nyo-orange/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nyo-orange/10 border border-nyo-orange/20 mb-6">
              <Sparkles size={14} className="text-nyo-orange" />
              <span className="text-xs font-medium text-nyo-orange tracking-wider uppercase">
                Early Access
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #7C5CFC 0%, #FF0090 50%, #E87C1A 100%)" }}>
                Join the Waitlist
              </span>
            </h2>
            <p className="text-lg text-nyo-gray-400 max-w-xl mx-auto">
              Be among the first to experience PAX:Luma&apos;s personal assistant
              services. We&apos;ll notify you when access becomes available.
            </p>
          </div>
        </ScrollReveal>

        {success ? (
          <ScrollReveal direction="none">
            <div className="text-center py-12 px-8 rounded-3xl border border-nyo-orange/30 bg-nyo-orange/5">
              <CheckCircle size={48} className="text-nyo-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-nyo-white mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-nyo-gray-400">
                We&apos;ll be in touch when PAX:Luma is ready for you.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-nyo-gray-800/60 bg-nyo-gray-900/40 backdrop-blur-sm p-8 sm:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  name="name"
                  label="Full Name *"
                  placeholder="Your full name"
                  required
                  autoComplete="name"
                />
                <Input
                  name="email"
                  label="Email *"
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
              </div>
              <InviteCodeInput value={inviteCode} onChange={setInviteCode} />
              <div>
                <label
                  htmlFor="excitement"
                  className="block text-sm font-medium text-nyo-gray-200 mb-2"
                >
                  What excites you most about PAX:Luma?
                </label>
                <textarea
                  id="excitement"
                  name="excitement"
                  rows={3}
                  placeholder="Optional — tell us what interests you"
                  className="w-full px-4 py-3 rounded-xl bg-nyo-gray-800/60 border border-nyo-gray-600/30 text-nyo-white placeholder-nyo-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-nyo-orange/50 focus:border-nyo-orange/50 hover:border-nyo-gray-400/50 resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2" role="alert">
                  {error}
                </p>
              )}

              <Button type="submit" loading={loading} size="lg" className="w-full">
                {loading ? "Joining..." : "Join the Waitlist"}
              </Button>

              <p className="text-xs text-nyo-gray-600 text-center">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
