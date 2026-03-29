"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/motion/ScrollReveal";

const placeholderPosts = [
  {
    slug: "why-we-started",
    title: "Why We Started: The Case for Embodied Intelligence",
    excerpt:
      "Current AI systems have outrun the philosophy used to explain them. We have machines of immense symbolic competence and an explanation that still blurs borrowed meaning with grounded understanding.",
    date: "2026-03-28",
    tag: "Philosophy",
  },
  {
    slug: "building-the-evidence-spine",
    title: "Building the Evidence Spine: Phase One Begins",
    excerpt:
      "The first phase of PAX:Luma construction focuses on artifact ingestion, metadata stores, the Obsidian vault, and the first local Llama runtime for routine transforms.",
    date: "2026-03-25",
    tag: "Engineering",
  },
  {
    slug: "committee-mind-design",
    title: "Designing the Committee Mind: How Luma Thinks",
    excerpt:
      "Luma is not one model with a nice system prompt. It is a governed deliberation system with seats for strategy, skepticism, evidence audit, and boundary enforcement.",
    date: "2026-03-20",
    tag: "Architecture",
  },
];

export default function LatestUpdates() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <p className="text-sm font-medium text-nyo-orange tracking-widest uppercase mb-3">
                Kata
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #0A0A0A 0%, #3A3A3A 50%, #FF0090 100%)" }}>
                  Latest Updates
                </span>
              </h2>
            </div>
            <Link
              href="/kata"
              className="inline-flex items-center gap-2 text-sm text-nyo-gray-400 hover:text-nyo-orange transition-colors group"
            >
              View all posts
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link href={`/kata/${post.slug}`} className="block h-full">
                <Card hover glow className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="orange">{post.tag}</Badge>
                    <span className="flex items-center gap-1.5 text-xs text-nyo-gray-600">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-nyo-white mb-3 leading-snug group-hover:text-nyo-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-nyo-gray-400 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-nyo-gray-800/50">
                    <span className="text-sm text-nyo-orange font-medium inline-flex items-center gap-1.5">
                      Read more
                      <ArrowRight size={14} />
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-nyo-gray-700 bg-nyo-gray-800/50 px-2 py-0.5 rounded">
                    FPO
                  </span>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
