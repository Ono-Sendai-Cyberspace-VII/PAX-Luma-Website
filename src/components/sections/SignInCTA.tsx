"use client";

import Link from "next/link";
import { LogIn, Lock } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function SignInCTA() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="rounded-3xl border border-nyo-gray-800/60 bg-gradient-to-r from-nyo-gray-900/60 to-nyo-gray-800/30 p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 rounded-2xl bg-nyo-gray-800/50 border border-nyo-gray-700/30 shrink-0">
              <Lock size={32} className="text-nyo-gray-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-nyo-white">
                  PAX:Luma Personal Assistant
                </h3>
                <Badge variant="orange">Coming Soon</Badge>
              </div>
              <p className="text-nyo-gray-400 leading-relaxed">
                Voice chat, text chat, document ingestion, and more &mdash; powered by the
                embodied intelligence architecture described in Poroi. Early access members
                will be the first to try it.
              </p>
            </div>
            <Link
              href="/login"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-nyo-gray-600 text-nyo-gray-200 font-medium hover:border-nyo-gray-400 hover:text-nyo-white transition-all duration-200"
            >
              <LogIn size={18} />
              Sign In
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
