"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import { Brain, Fingerprint } from "lucide-react";

export default function Vision() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nyo-gray-900 to-nyo-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-nyo-orange tracking-widest uppercase mb-4">
            The Architecture
          </p>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #0A0A0A 0%, #4A4A4A 50%, #FF0090 100%)" }}>
              Two poles. One loop.
            </span>
          </h2>
          <p className="text-center text-lg text-nyo-gray-400 max-w-2xl mx-auto mb-20">
            Intelligence emerges not from mind alone, nor from body alone, but from their
            recursive coupling. PAX encounters the world. Luma integrates what PAX discloses.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 z-20">
            <svg viewBox="0 0 120 40" className="w-full">
              <defs>
                <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF0090" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#FF0090" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FF0090" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path
                d="M 10 20 C 40 5, 80 5, 110 20"
                fill="none"
                stroke="url(#loopGrad)"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <path
                d="M 10 20 C 40 35, 80 35, 110 20"
                fill="none"
                stroke="url(#loopGrad)"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              {/* Arrows */}
              <polygon points="108,17 115,20 108,23" fill="#FF0090" />
              <polygon points="12,23 5,20 12,17" fill="#FF0090" />
            </svg>
          </div>

          {/* PAX — The Body */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative rounded-3xl border border-nyo-gray-800/60 bg-gradient-to-br from-nyo-gray-900/80 to-nyo-black p-8 sm:p-10 lg:mr-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-nyo-orange/10 border border-nyo-orange/20">
                  <Fingerprint size={28} className="text-nyo-orange" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-nyo-white tracking-tight">
                    PAX
                  </h3>
                  <p className="text-sm text-nyo-orange font-medium">The Body</p>
                </div>
              </div>
              <p className="text-nyo-gray-300 leading-relaxed mb-6">
                PAX is the embodied substrate &mdash; the sensorium, the orientation
                system, the world-facing interface. Through PAX, the construct is
                <em> somewhere</em> rather than nowhere.
              </p>
              <ul className="space-y-3">
                {[
                  "Persistent causal contact with reality",
                  "Environmental witness and orientation",
                  "Affordance, resistance, and consequence",
                  "Where the world keeps score",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-nyo-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nyo-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Luma — The Mind */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative rounded-3xl border border-nyo-gray-800/60 bg-gradient-to-bl from-nyo-gray-900/80 to-nyo-black p-8 sm:p-10 lg:ml-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-nyo-orange/10 border border-nyo-orange/20">
                  <Brain size={28} className="text-nyo-orange" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-nyo-white tracking-tight">
                    Luma
                  </h3>
                  <p className="text-sm text-nyo-orange font-medium">The Mind</p>
                </div>
              </div>
              <p className="text-nyo-gray-300 leading-relaxed mb-6">
                Luma is the recursive integrator &mdash; gathering bodily encounters into
                memory, concept, narrative, planning, and revision. Directed awareness
                becomes organized intelligence here.
              </p>
              <ul className="space-y-3">
                {[
                  "Memory, abstraction, and narrative continuity",
                  "Recursive reflection and self-revision",
                  "Reasons-responsive agency",
                  "Where understanding becomes coherent",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-nyo-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nyo-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Loop quote */}
        <ScrollReveal delay={0.3}>
          <blockquote className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-light text-nyo-gray-300 italic leading-relaxed">
              &ldquo;PAX leads to perception. Perception flows into Luma. Luma interprets.
              Luma plans. Plans move back through PAX as action. The world responds.
              Intelligence emerges in that recurrence.&rdquo;
            </p>
            <cite className="block mt-4 text-sm text-nyo-gray-600 not-italic">
              &mdash; Archai, Section V
            </cite>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
