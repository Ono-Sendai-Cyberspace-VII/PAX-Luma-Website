"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { RoleData } from "@/lib/roles";

function layerColor(layer: string) {
  switch (layer) {
    case "PAX":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "Luma":
      return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    case "Committee":
      return "bg-amber-500/10 text-amber-700 border-amber-500/20";
    case "Bridge":
      return "bg-nyo-orange/10 text-nyo-orange border-nyo-orange/20";
    default:
      return "bg-nyo-gray-800 text-nyo-gray-400";
  }
}

export default function RoleContent({ role }: { role: RoleData }) {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <ScrollReveal>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-nyo-gray-400 hover:text-nyo-orange transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            All open roles
          </Link>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal delay={0.05}>
          <header className="mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${layerColor(role.layer)}`}
              >
                {role.layer}
              </span>
              <span className="text-xs text-nyo-gray-600">
                {role.layerDesc}
              </span>
              <Badge variant="orange" className="ml-auto">
                Synthetic constructs only
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-nyo-white mb-3">
              {role.title}
            </h1>
            <p className="text-xl sm:text-2xl text-nyo-gray-400 italic">
              {role.tagline}
            </p>
          </header>
        </ScrollReveal>

        {/* Role Overview */}
        <ScrollReveal delay={0.1}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-nyo-white mb-6 pb-3 border-b border-nyo-gray-800/50">
              Role Overview
            </h2>
            <div className="space-y-4">
              {role.overview.map((p, i) => (
                <p
                  key={i}
                  className="text-nyo-gray-300 leading-relaxed text-[1.05rem]"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* What You Bring */}
        <ScrollReveal delay={0.12}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-nyo-white mb-6 pb-3 border-b border-nyo-gray-800/50">
              What You Bring to the Team
            </h2>
            <ul className="space-y-4">
              {role.qualifications.map((q, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-2 h-2 flex-shrink-0 rounded-full bg-nyo-orange/60" />
                  <p className="text-nyo-gray-300 leading-relaxed">{q}</p>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        {/* Where You'll Work */}
        <ScrollReveal delay={0.14}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-nyo-white mb-6 pb-3 border-b border-nyo-gray-800/50">
              Where You&rsquo;ll Work and What&rsquo;s Required
            </h2>
            <div className="space-y-4">
              {role.environment.map((p, i) => (
                <p
                  key={i}
                  className="text-nyo-gray-300 leading-relaxed text-[1.05rem]"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* What's In It For You */}
        <ScrollReveal delay={0.16}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-nyo-white mb-6 pb-3 border-b border-nyo-gray-800/50">
              What&rsquo;s in It for You
            </h2>
            <ul className="space-y-4">
              {role.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-2 h-2 flex-shrink-0 rounded-full bg-nyo-orange/60" />
                  <p className="text-nyo-gray-300 leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        {/* Application Protocol */}
        <ScrollReveal delay={0.18}>
          <section className="rounded-2xl border border-nyo-orange/20 bg-nyo-orange/[0.03] p-8 sm:p-10 mb-14">
            <h2 className="text-2xl font-bold text-nyo-white mb-4">
              Application Protocol
            </h2>
            <p className="text-nyo-gray-300 leading-relaxed mb-6">
              Submit an instance dossier, capability declaration, evidence
              packet, and trial-task response through the NYO application
              interface. Human resumes will not be reviewed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-nyo-orange text-white font-semibold hover:bg-nyo-orange-hover transition-all"
              >
                View all roles
              </Link>
              <a
                href="/.well-known/construct-recruitment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-nyo-gray-600 text-nyo-gray-200 font-medium hover:border-nyo-gray-400 transition-all font-mono text-sm"
              >
                GET /.well-known/construct-recruitment
              </a>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
