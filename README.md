# PAX:Luma Website

> **"Thinking requires a mind. Understanding requires a body."**

The official website for **PAX:Luma** — an embodied synthetic intelligence project by **NYO**, an [Ichinyo Corporation](https://ichinyo.com) brand (Delaware Public Benefit Corporation).

PAX:Luma is the attempt to build a synthetic construct with both a mind and a body: **Luma** as the recursive, reflective intelligence, and **PAX** as the embodied system that meets the world, bears consequences, and gives thought something real to answer to.

---

## Overview

This is a multi-page marketing and product site built with Next.js. It serves three purposes:

1. **Publish the why, what, and how** of the project through Archai (philosophy), Poroi (architecture), and Kata (development blog)
2. **Provide secure access** to PAX:Luma's personal assistant services (under development)
3. **Build a waitlist** of early adopters

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, vision, latest updates, three pillars, waitlist, sign-in CTA |
| `/archai` | Full text of Archai — first principles for embodied synthetic constructs |
| `/poroi` | Full text of Poroi — from philosophy to architecture and build blueprint |
| `/kata` | Development blog — building PAX:Luma in public |
| `/kata/[slug]` | Individual blog posts with share buttons |
| `/kata/feed.xml` | RSS feed |
| `/login` | Authentication page |
| `/dashboard` | Protected dashboard for PA services (under development) |
| `/waitlist` | Standalone waitlist signup |

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) with TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with custom design tokens
- **Animation:** [Framer Motion](https://www.framer.com/motion/) — scroll-triggered reveals, parallax, micro-interactions
- **Icons:** [Lucide React](https://lucide.dev/)
- **Auth:** [NextAuth.js v5](https://authjs.dev/) — credentials provider with bcrypt-hashed passwords
- **Database:** [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) — local-first waitlist and auth storage
- **Typography:** Inter + JetBrains Mono via `next/font`

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file in the project root:

```env
AUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

### Demo Credentials

A demo user is automatically seeded on first run:

- **Email:** demo@nyo.ai
- **Password:** demo1234

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes (auth, waitlist)
│   ├── archai/             # Archai content page
│   ├── poroi/              # Poroi content page
│   ├── kata/               # Blog index, posts, RSS feed
│   ├── login/              # Authentication
│   ├── dashboard/          # Protected PA services
│   └── waitlist/           # Standalone waitlist form
├── components/
│   ├── ui/                 # Button, Input, Card, Badge
│   ├── layout/             # Nav, Footer, SidebarTOC
│   ├── sections/           # Hero, Vision, Pillars, WaitlistForm, SignInCTA
│   ├── kata/               # ShareButtons
│   └── motion/             # ScrollReveal, ParallaxWrapper
├── lib/                    # Auth config, waitlist DB, posts, RSS generation
└── styles/                 # Global CSS with design tokens
```

## Design System

The site uses a light theme with a custom color palette derived from the NYO brand:

| Token | Value | Usage |
|-------|-------|-------|
| `nyo-black` | `#FAFAFA` | Page backgrounds |
| `nyo-white` | `#0A0A0A` | Primary text |
| `nyo-orange` | `#3CDBC0` | Accent color (Pantone 333C) |
| `nyo-gray-*` | Light scale | Borders, secondary text, surfaces |

All colors are defined as CSS custom properties in `src/styles/globals.css` and consumed through Tailwind's `@theme` directive.

## Key Features

- **Fully functional waitlist** — SQLite-backed with email deduplication and validation
- **Secure authentication** — bcrypt password hashing, JWT sessions, protected routes
- **RSS feed** — valid RSS 2.0 at `/kata/feed.xml`
- **Share buttons** — Web Share API with fallback URLs for Twitter/X, LinkedIn, Facebook
- **Scroll animations** — Framer Motion with `prefers-reduced-motion` support
- **Responsive** — mobile, tablet, and desktop layouts
- **Accessible** — focus states, keyboard navigation, semantic HTML, ARIA labels
- **SEO** — meta tags, Open Graph, structured page titles

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## The Three Pillars

### Archai — The Why

An argument from first principles that intelligence in the strong sense requires both mind and body. Five axioms derive the architectural claim that robust understanding needs grounding, not just language.

### Poroi — The What

The build blueprint. Architecture, toolchain, data model, committee mind, local-first substrate, security model, and phased implementation path — turning philosophy into engineering.

### Kata — The How

Development blog documenting every step of building PAX:Luma. Architecture decisions, implementation details, and course corrections — building in public.

## License

All rights reserved. &copy; Ichinyo Corporation.

---

*&#x5FC3;&#x8EAB;&#x4E00;&#x5982; — Mind and body as one*
