export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  author: string;
  content: string;
  readingTime: string;
}

// For now, posts are defined statically. In production, these would come from MDX files.
const posts: Post[] = [
  {
    slug: "why-we-started",
    title: "Why We Started: The Case for Embodied Intelligence",
    excerpt:
      "Current AI systems have outrun the philosophy used to explain them. We have machines of immense symbolic competence and an explanation that still blurs borrowed meaning with grounded understanding.",
    date: "2026-03-28",
    tag: "Philosophy",
    author: "Cameron C. Scott",
    readingTime: "8 min read",
    content: `
## The Crisis

The dominant success story in AI is easy to tell. Scale the parameters, scale the data, scale the compute, and striking behavior appears. Systems that cannot carry a sensor rig through a kitchen can still summarize documents, pass exams, draft memos, write code, and hold a conversation that feels uncannily alive.

That record has revived an old temptation. Maybe intelligence really is symbol manipulation once it gets large enough.

## Why It Matters

The trouble begins when competence gets mistaken for a complete theory. Usefulness and understanding overlap. They do not collapse into each other.

Performance competence means producing apt outputs inside a task frame. World-grounded understanding asks for more. Terms must answer to things. Concepts have to be disciplined by affordances and consequences.

## What We're Building

PAX:Luma is our answer: a synthetic construct with both a mind (Luma) and a body (PAX). The philosophical foundation — Archai — argues from first principles that robust understanding requires embodiment. Not a camera taped onto a model, but persistent causal contact with a world that can resist, redirect, and surprise.

This is the beginning of that journey. Follow along as we build in public.

---

*This is a placeholder post demonstrating the Kata blog format. Real content will replace this as the project progresses.*
    `.trim(),
  },
  {
    slug: "building-the-evidence-spine",
    title: "Building the Evidence Spine: Phase One Begins",
    excerpt:
      "The first phase of PAX:Luma construction focuses on artifact ingestion, metadata stores, the Obsidian vault, and the first local Llama runtime for routine transforms.",
    date: "2026-03-25",
    tag: "Engineering",
    author: "Cameron C. Scott",
    readingTime: "12 min read",
    content: `
## Phase One: What Gets Built

The evidence spine is where PAX:Luma becomes useful before it becomes finished. This phase establishes:

- **Local stores** for originals and derivatives
- **Artifact ingestion** for decks, docs, PDFs, screenshots, and handwritten notes
- **Metadata database** with structured search
- **Obsidian vault writer** for human-readable knowledge
- **Review inbox** for human-in-the-loop corrections
- **First local Meta Llama runtime** for routine transforms

## Why This Order

A construct with fancy agency and weak evidence discipline is exactly the wrong order. If the evidence spine is solid, everything that comes after — the committee mind, the action layer, the opportunity engine — has something real to reason over.

## The Local-First Principle

The default assumption is that PAX:Luma lives on a local hub you own, with cloud used only where it is clearly helping. A construct that aims at continuity cannot be made entirely out of sessions leased from other companies.

---

*This is a placeholder post. Real engineering updates will document the actual build process.*
    `.trim(),
  },
  {
    slug: "committee-mind-design",
    title: "Designing the Committee Mind: How Luma Thinks",
    excerpt:
      "Luma is not one model with a nice system prompt. It is a governed deliberation system with seats for strategy, skepticism, evidence audit, and boundary enforcement.",
    date: "2026-03-20",
    tag: "Architecture",
    author: "Cameron C. Scott",
    readingTime: "10 min read",
    content: `
## Why a Committee?

A construct that never disagrees with itself is either too shallow to notice conflict or too eager to pretend certainty. The committee architecture gives Luma a disciplined way to think with multiple perspectives while presenting one coherent voice.

## The Six Seats

1. **Strategist** — Proposes. Frames alternatives, sees structure.
2. **Operator** — Grounds. Turns intentions into executable steps.
3. **Skeptic** — Attacks. Looks for hidden assumptions and weak evidence.
4. **Evidence Auditor** — Forces source discipline.
5. **Preference Guardian** — Ensures user trust and tolerance.
6. **Privacy Seat** — Tests for overreach and leakage.

## How Arbitration Works

The strategist and operator frame an answer. The skeptic and auditor challenge it. The guardian and privacy seat constrain it. The arbiter scores the result, checks gates, and either returns a final response, requests more evidence, or routes a review task to the human.

The user sees one voice. The committee remains invisible unless its trace is needed.

---

*This is a placeholder post demonstrating the Kata blog architecture series.*
    `.trim(),
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
