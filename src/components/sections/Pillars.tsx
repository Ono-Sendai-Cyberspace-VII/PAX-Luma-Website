"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, PenTool } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const pillars = [
  {
    icon: BookOpen,
    label: "The Why",
    title: "Archai",
    subtitle: "First Principles for Embodied Synthetic Constructs",
    description:
      "An argument from first principles that intelligence in the strong sense requires both mind and body. Five axioms derive the architectural claim that robust understanding needs grounding, not just language.",
    href: "/archai",
    gradient: "from-nyo-orange/10 to-transparent",
  },
  {
    icon: Cpu,
    label: "The What",
    title: "Poroi",
    subtitle: "From Archai to Architecture, Workflows, and Means",
    description:
      "The build blueprint. Architecture, toolchain, data model, committee mind, local-first substrate, security model, and phased implementation path \u2014 turning philosophy into engineering.",
    href: "/poroi",
    gradient: "from-nyo-orange/5 to-transparent",
  },
  {
    icon: PenTool,
    label: "The How",
    title: "Kata",
    subtitle: "Development Blog \u2014 Building in Public",
    description:
      "Every step documented. Architecture decisions, implementation details, course corrections, and the practical reality of building a synthetic construct from the ground up.",
    href: "/kata",
    gradient: "from-nyo-orange/5 to-transparent",
  },
];

export default function Pillars() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-nyo-black via-nyo-gray-900/30 to-nyo-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-nyo-orange tracking-widest uppercase mb-4">
            Explore
          </p>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #2563EB 0%, #7C5CFC 30%, #FF0090 65%, #E87C1A 100%)" }}>
              Three pillars of PAX:Luma
            </span>
          </h2>
          <p className="text-center text-lg text-nyo-gray-400 max-w-2xl mx-auto mb-20">
            Philosophy. Architecture. Practice. Each pillar builds on the last.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <Link href={pillar.href} className="block group">
                <div
                  className={`
                    relative rounded-3xl border border-nyo-gray-800/60 bg-gradient-to-r ${pillar.gradient}
                    p-8 sm:p-10 md:p-12
                    transition-all duration-300
                    hover:border-nyo-orange/30 hover:shadow-2xl hover:shadow-nyo-orange/5
                  `}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                    <div className="shrink-0">
                      <div className="p-4 rounded-2xl bg-nyo-gray-800/50 border border-nyo-gray-700/30 group-hover:bg-nyo-orange/10 group-hover:border-nyo-orange/20 transition-all duration-300">
                        <pillar.icon
                          size={32}
                          className="text-nyo-gray-400 group-hover:text-nyo-orange transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-nyo-orange tracking-widest uppercase mb-2">
                        {pillar.label}
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-black text-nyo-white tracking-tight mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-nyo-gray-400 font-medium mb-4">
                        {pillar.subtitle}
                      </p>
                      <p className="text-nyo-gray-300 leading-relaxed max-w-2xl">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="shrink-0 self-center">
                      <div className="p-3 rounded-full border border-nyo-gray-700/30 group-hover:border-nyo-orange/40 group-hover:bg-nyo-orange/10 transition-all duration-300">
                        <ArrowRight
                          size={20}
                          className="text-nyo-gray-600 group-hover:text-nyo-orange group-hover:translate-x-0.5 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
