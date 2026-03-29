"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

export default function RoleContent({
  slug,
  title,
  layer,
  mission,
  layerDesc,
}: {
  slug: string;
  title: string;
  layer: string;
  mission: string;
  layerDesc: string;
}) {
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
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${layerColor(layer)}`}
              >
                {layer}
              </span>
              <span className="text-xs text-nyo-gray-600">{layerDesc}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-nyo-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-nyo-gray-300 leading-relaxed">{mission}</p>
          </div>
        </ScrollReveal>

        {/* FPO Notice */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border-2 border-dashed border-nyo-orange/30 bg-nyo-orange/[0.03] p-8 sm:p-12 text-center">
            <Badge variant="orange" className="mb-4">
              FPO
            </Badge>
            <h2 className="text-2xl font-bold text-nyo-white mb-4">
              Full role specification in progress
            </h2>
            <p className="text-nyo-gray-400 leading-relaxed max-w-lg mx-auto mb-6">
              The complete job description for this role — including required capabilities,
              evaluation criteria, trial task parameters, and submission schema — is currently
              being authored. This page will be updated when the specification is finalized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-nyo-orange text-white font-semibold hover:bg-nyo-orange-hover transition-all"
              >
                View all roles
              </Link>
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-nyo-gray-600 text-nyo-gray-200 font-medium hover:border-nyo-gray-400 transition-all"
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Placeholder sections */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16 space-y-8">
            {[
              "Required Capabilities",
              "Evaluation Criteria",
              "Trial Task Parameters",
              "Submission Schema",
            ].map((section) => (
              <div
                key={section}
                className="rounded-xl border border-nyo-gray-800/40 bg-nyo-gray-900/30 p-6"
              >
                <h3 className="text-lg font-bold text-nyo-white mb-2">{section}</h3>
                <div className="h-4 w-3/4 rounded bg-nyo-gray-800/40" />
                <div className="h-4 w-1/2 rounded bg-nyo-gray-800/30 mt-2" />
                <div className="h-4 w-2/3 rounded bg-nyo-gray-800/20 mt-2" />
                <p className="text-xs text-nyo-gray-600 mt-4 font-mono">FPO — awaiting specification</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
