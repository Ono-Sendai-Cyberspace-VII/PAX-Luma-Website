"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import Badge from "@/components/ui/Badge";
import {
  Building2,
  Cpu,
  BookOpen,
  Eye,
  Layers,
  FileSearch,
  MapPin,
  Target,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

/* ─── Reusable components ─── */

function InfoCard({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-nyo-gray-800/60 bg-nyo-gray-900/40 p-6 sm:p-8">
      <span className="text-xs font-bold text-nyo-orange bg-nyo-orange/10 px-3 py-1 rounded-full tracking-wider uppercase">
        {label}
      </span>
      <h3 className="text-xl font-bold text-nyo-white mt-4 mb-2">{title}</h3>
      <p className="text-nyo-gray-400 leading-relaxed">{children}</p>
    </div>
  );
}

function Pillar({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-nyo-orange/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-nyo-orange" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-nyo-white mb-1">{title}</h4>
        <p className="text-nyo-gray-400 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function PullQuote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <blockquote className="my-12 py-6 px-8 border-l-4 border-nyo-orange bg-nyo-gray-900/50 rounded-r-xl">
      <p className="text-xl sm:text-2xl font-light text-nyo-gray-200 italic leading-relaxed">
        {children}
      </p>
    </blockquote>
  );
}

/* ─── Main content ─── */

export default function AboutContent() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 py-16 text-center">
        <ScrollReveal>
          <Badge variant="orange" className="mb-6">
            About
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-nyo-white mb-6">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2563EB 0%, #7C5CFC 30%, #FF0090 60%, #F0A000 100%)",
              }}
            >
              About Ichinyo
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-nyo-gray-400 max-w-3xl mx-auto leading-relaxed">
            Thinking requires a mind. Understanding requires a body. That idea
            sits at the center of Ichinyo and the work behind PAX:Luma &mdash;
            an effort to build embodied synthetic intelligence grounded in first
            principles, not just prompt performance.
          </p>
        </ScrollReveal>
      </header>

      {/* Three-column overview */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard label="Company" title="What We Are">
              Ichinyo Corporation, a Delaware Public Benefit Corporation.
            </InfoCard>
            <InfoCard label="Product" title="What We Build">
              PAX:Luma &mdash; a personal assistant architecture built around
              mind-and-body coupling.
            </InfoCard>
            <InfoCard label="Practice" title="How We Think">
              Philosophy, architecture, and practice developed in public through{" "}
              <Link href="/archai" className="text-nyo-orange hover:underline">
                Archai
              </Link>
              ,{" "}
              <Link href="/poroi" className="text-nyo-orange hover:underline">
                Poroi
              </Link>
              , and{" "}
              <Link href="/kata" className="text-nyo-orange hover:underline">
                Kata
              </Link>
              .
            </InfoCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Who We Are */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-nyo-white mb-6">
            Who We Are
          </h2>
          <div className="space-y-5 text-nyo-gray-300 leading-relaxed text-lg">
            <p>
              Ichinyo is building PAX:Luma, a new kind of AI system designed
              around a simple conviction: intelligence is strongest when symbolic
              reasoning stays accountable to the world it is meant to
              understand. On ichinyo.ai, that vision appears as a three-part
              structure &mdash; Archai, the philosophical case; Poroi, the
              architectural blueprint; and Kata, the public development log.
              Together, they describe a company that is as interested in first
              principles as it is in shipping real tools.
            </p>
            <p>
              The product now in development is a personal assistant shaped by
              that architecture: voice chat, text chat, document ingestion,
              memory, and action flowing through a system where mind and body are
              deliberately coupled rather than loosely simulated. The ambition is
              not another clever interface layer on top of a model. It is to
              build a synthetic construct that can perceive, remember,
              deliberate, revise, and act with stronger grounding over time.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Why Ichinyo Exists */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-nyo-white mb-6">
            Why Ichinyo Exists
          </h2>
          <div className="space-y-5 text-nyo-gray-300 leading-relaxed text-lg">
            <p>
              Modern AI has achieved extraordinary symbolic competence, yet the
              theory used to explain those gains often remains incomplete. A
              system can summarize, reason, code, and converse at a high level
              while still lacking persistent causal contact with the world.
              Ichinyo was founded to explore that gap directly &mdash; not as an
              academic exercise, but as the basis for building more durable,
              trustworthy, and reality-tested intelligence.
            </p>
            <p>
              That is why PAX:Luma is organized around two poles in one loop.
              PAX serves as the body: the sensorium, the orientation layer, the
              world-facing interface, and the place where the world keeps score.
              Luma serves as the mind: the recursive integrator that turns
              encounters into memory, abstraction, planning, and self-revision.
              Ichinyo&rsquo;s work sits in the recurrence between the two.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* What Makes the Work Distinct */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-nyo-white mb-6">
            What Makes the Work Distinct
          </h2>
          <div className="space-y-8">
            <Pillar icon={BookOpen} title="First-principles discipline">
              The company begins with a philosophical argument about what
              understanding requires, then translates that argument into
              architecture and product decisions.
            </Pillar>
            <Pillar icon={Cpu} title="Embodiment as design constraint">
              PAX is not decorative hardware or a thin wrapper. It is the
              world-facing layer that gives the system somewhere to be, something
              to encounter, and consequences to answer to.
            </Pillar>
            <Pillar icon={Eye} title="Build-in-public rigor">
              Through Kata, Ichinyo documents architecture decisions,
              implementation phases, and course corrections in public, creating a
              clearer record of how the system is actually being made.
            </Pillar>
            <Pillar icon={Layers} title="Local-first seriousness">
              The public roadmap points toward artifact ingestion, metadata
              stores, local model runtimes, and governed deliberation rather than
              black-box magic.
            </Pillar>
          </div>
        </ScrollReveal>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-nyo-gray-800 to-transparent" />
      </div>

      {/* About the Founder */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <ScrollReveal>
          <Badge variant="orange" className="mb-4">
            Founder
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-nyo-white mb-6">
            About the Founder
          </h2>
          <div className="space-y-5 text-nyo-gray-300 leading-relaxed text-lg">
            <p>
              Ichinyo was founded by Cameron Scott, a communications and brand
              strategist whose career has been shaped by close work with
              consequential technology leaders. His background spans Microsoft,
              Yahoo, GoDaddy, and DocuSign, with a particular depth around
              translating complex technical change into strategy, narrative, and
              operating clarity.
            </p>
          </div>
        </ScrollReveal>

        {/* Career sections */}
        <div className="mt-12 space-y-12">
          <ScrollReveal>
            <div className="rounded-2xl border border-nyo-gray-800/60 bg-nyo-gray-900/40 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-nyo-orange" />
                <h3 className="text-xl font-bold text-nyo-white">Microsoft</h3>
              </div>
              <p className="text-nyo-gray-300 leading-relaxed">
                At Microsoft, Cameron served on Ray Ozzie&rsquo;s Chief Software
                Architect&rsquo;s Staff &mdash; an unusually close vantage point
                on platform thinking, systems-level change, and executive
                decision-making at one of the most influential technology
                companies in the world. Those relationships remain deep, and the
                original idea for PAX:Luma emerged through long conversations
                with senior staff connected to Microsoft Research about
                embodiment, grounded intelligence, and the limits of purely
                disembodied systems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl border border-nyo-gray-800/60 bg-nyo-gray-900/40 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-nyo-orange" />
                <h3 className="text-xl font-bold text-nyo-white">DocuSign</h3>
              </div>
              <p className="text-nyo-gray-300 leading-relaxed mb-4">
                At DocuSign, Cameron was at the center of the company&rsquo;s
                evolution from a signature utility into a broader intelligent
                agreement platform. Working in close proximity to product and
                technology leadership, he helped shape the story around a
                business that was becoming a pioneer in Intelligent Agreement
                Management and AI-driven contract analytics &mdash; using AI not
                just to execute agreements, but to analyze, understand, and
                improve the entire contract lifecycle.
              </p>
              <p className="text-nyo-gray-300 leading-relaxed">
                That transformation unfolded while Cameron reported directly into
                Inhi Cho Suh, one of the most consequential operating leaders in
                enterprise AI commercialization. Before later becoming CEO of
                Niantic Spatial and serving as President of Product and
                Technology at DocuSign, Suh spent roughly two decades at IBM,
                where she was a key figure in the early commercialization of big
                data and machine learning. For Ichinyo, that chapter matters
                because it sharpened Cameron&rsquo;s conviction that the future
                belongs to systems that can move from narrow utility to broader
                cognitive leverage inside real workflows.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl border border-nyo-gray-800/60 bg-nyo-gray-900/40 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-nyo-orange" />
                <h3 className="text-xl font-bold text-nyo-white">
                  Yahoo &amp; GoDaddy
                </h3>
              </div>
              <p className="text-nyo-gray-300 leading-relaxed">
                Earlier, at Yahoo, Cameron worked for Blake Irving, another
                formative technology leader whose career spanned several of the
                platforms and infrastructure shifts that shaped modern digital
                work. Irving played major roles in communication platforms at
                Microsoft, in cloud infrastructure at scale, and later in
                helping GoDaddy evolve into a more sophisticated platform for
                entrepreneurs. Exposure to that leadership orbit reinforced
                Cameron&rsquo;s instinct for technology businesses that begin as
                tools, then expand into systems with much larger operating
                significance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl border border-nyo-gray-800/60 bg-nyo-gray-900/40 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-nyo-orange" />
                <h3 className="text-xl font-bold text-nyo-white">
                  Oregon State University
                </h3>
              </div>
              <p className="text-nyo-gray-300 leading-relaxed">
                His education at Oregon State University also matters to the
                company&rsquo;s sensibility. OSU is widely respected for
                engineering, especially on the West Coast, with strong ties to
                industry partners and a track record of graduates performing
                above 90% on the Fundamentals of Engineering exam. Companies
                such as NVIDIA, Intel, and Tesla actively recruit from the
                school. The university&rsquo;s School of Mechanical, Industrial,
                and Manufacturing Engineering is active in areas such as
                robotics, AI, advanced manufacturing, materials science, and
                sustainable energy &mdash; a culture of applied rigor that
                resonates with Ichinyo&rsquo;s view that serious intelligence
                has to meet the real world on its own terms.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-nyo-gray-800 to-transparent" />
      </div>

      {/* The Company We Intend to Be */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-nyo-white mb-6">
            The Company We Intend to Be
          </h2>
          <div className="space-y-5 text-nyo-gray-300 leading-relaxed text-lg">
            <p>
              Ichinyo is not chasing novelty for its own sake. It is building
              toward a more grounded and more legible form of synthetic
              intelligence &mdash; one that can earn trust by staying tethered to
              evidence, embodiment, and disciplined design. The company&rsquo;s
              public materials already signal that posture: clear first
              principles, visible architecture, and a willingness to show the
              work.
            </p>
            <p>
              As PAX:Luma moves from development into early access,
              Ichinyo&rsquo;s goal is to create a personal assistant that feels
              not only capable, but coherent: a system with memory, structure,
              and a genuine relationship to the world it is navigating on behalf
              of the user.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Closing */}
      <section className="max-w-3xl mx-auto px-6 text-center mb-16">
        <ScrollReveal>
          <p className="text-2xl sm:text-3xl font-light text-nyo-gray-400 mb-2">
            &#x5FC3;&#x8EAB;&#x4E00;&#x5982;
          </p>
          <p className="text-lg text-nyo-gray-600 italic">
            Mind and body as one.
          </p>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/archai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-nyo-orange text-white font-semibold text-lg hover:bg-nyo-orange-hover active:scale-[0.98] transition-all duration-200 shadow-lg shadow-nyo-orange/20"
            >
              Read Archai
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent text-nyo-gray-200 font-medium text-lg border border-nyo-gray-600 hover:border-nyo-gray-400 hover:text-nyo-white transition-all duration-200"
            >
              Join the Waitlist
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
