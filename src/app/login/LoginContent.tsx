"use client";

import { useState, type FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import { Lock, Globe, CircleDot } from "lucide-react";

export default function LoginContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password.");
      } else {
        router.push("/dashboard");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-nyo-gray-800/50 border border-nyo-gray-700/30 mb-6">
            <Lock size={28} className="text-nyo-orange" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-nyo-white mb-2">
            Welcome Back
          </h1>
          <p className="text-nyo-gray-400">
            Sign in to access PAX:Luma services
          </p>
        </div>

        {/* Login form */}
        <div className="rounded-2xl border border-nyo-gray-800/60 bg-nyo-gray-900/40 backdrop-blur-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="you@company.com"
              required
              autoComplete="email"
            />
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />

            {error && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2" role="alert">
                {error}
              </p>
            )}

            <div className="flex justify-end">
              <Link
                href="#"
                className="text-sm text-nyo-gray-400 hover:text-nyo-orange transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" loading={loading} size="lg" className="w-full">
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-nyo-gray-800/60" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-nyo-gray-900/40 px-3 text-nyo-gray-600">
                Or continue with
              </span>
            </div>
          </div>

          {/* OAuth buttons (FPO) */}
          <div className="grid grid-cols-2 gap-3">
            <button
              disabled
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-nyo-gray-700/30 bg-nyo-gray-800/30 text-nyo-gray-500 text-sm font-medium opacity-60 cursor-not-allowed relative"
            >
              <CircleDot size={18} />
              Google
              <Badge variant="outline" className="absolute -top-2 -right-2 text-[8px] px-1.5 py-0.5">
                Soon
              </Badge>
            </button>
            <button
              disabled
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-nyo-gray-700/30 bg-nyo-gray-800/30 text-nyo-gray-500 text-sm font-medium opacity-60 cursor-not-allowed relative"
            >
              <Globe size={18} />
              GitHub
              <Badge variant="outline" className="absolute -top-2 -right-2 text-[8px] px-1.5 py-0.5">
                Soon
              </Badge>
            </button>
          </div>
        </div>

        {/* Demo credentials notice */}
        <div className="mt-6 p-4 rounded-xl bg-nyo-orange/5 border border-nyo-orange/15 text-center">
          <p className="text-xs text-nyo-gray-400">
            <span className="font-medium text-nyo-orange">Demo Access:</span>{" "}
            demo@nyo.ai / demo1234
          </p>
        </div>

        {/* Back link */}
        <p className="mt-6 text-center text-sm text-nyo-gray-600">
          <Link href="/" className="hover:text-nyo-gray-400 transition-colors">
            &larr; Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
