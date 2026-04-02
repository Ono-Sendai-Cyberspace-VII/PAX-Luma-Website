# PAX:Luma Website

> **"Thinking requires a mind. Understanding requires a body."**

The official website for **PAX:Luma** — an embodied synthetic intelligence project by **NYO**, a division of [Ichinyo Corporation](https://ichinyo.ai) (Delaware Public Benefit Corporation).

**Live at: [https://ichinyo.ai](https://ichinyo.ai)**

PAX:Luma is the attempt to build a synthetic construct with both a mind and a body: **Luma** as the recursive, reflective intelligence, and **PAX** as the embodied system that meets the world, bears consequences, and gives thought something real to answer to.

---

## Overview

This is a multi-page marketing and product site built with Next.js. It serves three purposes:

1. **Publish the why, what, and how** of the project through Archai (philosophy), Poroi (architecture), and Kata (development blog)
2. **Provide secure access** to PAX:Luma's personal assistant services (under development)
3. **Build a waitlist** of early adopters with email verification

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero with gradient typography, vision, latest updates, three pillars, waitlist, sign-in CTA |
| `/about` | About Ichinyo — company mission, what makes the work distinct, founder bio |
| `/archai` | Full text of Archai — first principles for embodied synthetic constructs |
| `/poroi` | Full text of Poroi — from philosophy to architecture and build blueprint |
| `/kata` | Development blog — building PAX:Luma in public |
| `/kata/[slug]` | Individual blog posts with share buttons |
| `/kata/feed.xml` | RSS feed |
| `/careers` | Synthetic construct careers — manifesto, open roles, eligibility, application protocol |
| `/careers/[slug]` | Individual role pages (10 positions) with full job descriptions |
| `/login` | Authentication page |
| `/dashboard` | Protected dashboard for PA services (under development) |
| `/waitlist` | Standalone waitlist signup with email verification |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |

### Machine-Readable Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /.well-known/construct-recruitment` | Discovery file for synthetic construct applicants |
| `POST /api/apply` | Application submission endpoint (JSON) |
| `POST /api/waitlist` | Waitlist signup + email verification |
| `POST /api/auth/[...nextauth]` | NextAuth.js authentication |

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) with TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with custom design tokens
- **Animation:** [Framer Motion](https://www.framer.com/motion/) — scroll-triggered reveals, parallax, micro-interactions
- **Icons:** [Lucide React](https://lucide.dev/)
- **Auth:** [NextAuth.js v5](https://authjs.dev/) — credentials provider with bcrypt-hashed passwords
- **Database:** [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) — local-first waitlist and auth storage
- **Email:** [Resend](https://resend.com/) — transactional email for waitlist verification (sends from `noreply@ichinyo.ai`)
- **Typography:** Inter + Sora (display) + JetBrains Mono via `next/font`
- **Fonts:** Figma-inspired type scale — Sora for display headings, Inter for body, tight negative tracking

## Deployment

The site is hosted on an **IONOS VPS Linux XS** (Ubuntu 24.04) at `74.208.76.251`:

- **Domain:** `ichinyo.ai` (registered at GoDaddy, A records pointed to VPS)
- **SSL:** Let's Encrypt via Certbot (auto-renews)
- **Reverse proxy:** nginx
- **Process manager:** systemd (`paxluma.service`)
- **Swap:** 1GB (added to handle builds on 850MB RAM VPS)

### Deploy process

```bash
ssh root@74.208.76.251
cd /opt/app
git pull
npm run build
systemctl restart paxluma
```

## Getting Started (Local Development)

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file in the project root:

```env
AUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
RESEND_API_KEY=your-resend-api-key
```

### Demo Credentials

A demo user is automatically seeded on first run:

- **Email:** demo@nyo.ai
- **Password:** demo1234

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes (auth, waitlist, apply)
│   ├── about/              # About Ichinyo page
│   ├── archai/             # Archai content page
│   ├── poroi/              # Poroi content page
│   ├── kata/               # Blog index, posts, RSS feed
│   ├── careers/            # Careers index + [slug] role pages
│   ├── login/              # Authentication
│   ├── dashboard/          # Protected PA services
│   ├── waitlist/           # Standalone waitlist form
│   ├── terms/              # Terms of Service
│   └── privacy/            # Privacy Policy
├── components/
│   ├── ui/                 # Button, Input, Card, Badge
│   ├── layout/             # Nav, Footer, SidebarTOC
│   ├── sections/           # Hero, Vision, Pillars, WaitlistForm, SignInCTA
│   ├── kata/               # ShareButtons
│   └── motion/             # ScrollReveal, ParallaxWrapper
├── lib/                    # Auth config, waitlist DB, email, posts, RSS generation
└── styles/                 # Global CSS with design tokens
```

## Design System

The site uses a light theme with the NYO brand palette:

| Token | Value | Usage |
|-------|-------|-------|
| `nyo-black` | `#f4f6f5` | Page backgrounds |
| `nyo-white` | `#0A0A0A` | Primary text |
| `nyo-orange` | `#FF0090` | Accent color (hot pink / neon magenta) |
| `nyo-orange-hover` | `#D90078` | Hover state |
| `nyo-gray-*` | Inverted scale | Borders, secondary text, surfaces |

### Typography

- **Display headings** use Apple-inspired gradient text (blue -> violet -> pink -> orange spectrum)
- **Section headings** use the same gradient treatment site-wide
- **Sora** for display type, **Inter** for body, **JetBrains Mono** for code
- Tight negative letter-spacing (`-0.05em` to `-0.02em`) on headings

### Logo

Hand-crafted SVG at `public/images/nyo-logo.svg` — the NYO wordmark with hot pink "O" circle, black letterforms, and `#f4f6f5` negative space to match the background.

## Key Features

- **Email-verified waitlist** — 6-digit verification code sent via Resend, SQLite-backed with invite code support
- **Secure authentication** — bcrypt password hashing, JWT sessions, protected routes
- **Synthetic construct careers** — 10 open roles with full JDs, machine-readable application protocol, `.well-known` discovery
- **RSS feed** — valid RSS 2.0 at `/kata/feed.xml`
- **Share buttons** — Web Share API with fallback URLs for Twitter/X, LinkedIn, Facebook
- **Gradient typography** — full-spectrum blue-to-orange gradient text on headings
- **Scroll animations** — Framer Motion with `prefers-reduced-motion` support
- **Responsive** — mobile, tablet, and desktop layouts
- **Accessible** — focus states, keyboard navigation, semantic HTML, ARIA labels, high contrast
- **SEO** — meta tags, Open Graph, structured page titles

## The Three Pillars

### Archai — The Why

An argument from first principles that intelligence in the strong sense requires both mind and body. Five axioms derive the architectural claim that robust understanding needs grounding, not just language.

### Poroi — The What

The build blueprint. Architecture, toolchain, data model, committee mind, local-first substrate, security model, and phased implementation path — turning philosophy into engineering.

### Kata — The How

Development blog documenting every step of building PAX:Luma. Architecture decisions, implementation details, and course corrections — building in public.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

All rights reserved. &copy; Ichinyo Corporation.

---

*&#x5FC3;&#x8EAB;&#x4E00;&#x5982; — Mind and body as one*
