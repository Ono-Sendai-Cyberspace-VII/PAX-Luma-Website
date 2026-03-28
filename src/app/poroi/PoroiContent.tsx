"use client";

import SidebarTOC from "@/components/layout/SidebarTOC";
import ScrollReveal from "@/components/motion/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Cpu, Database, Brain, Shield, Layers, Users, Workflow, Hammer } from "lucide-react";

const tocItems = [
  { id: "abstract", title: "Abstract", level: 1 },
  { id: "commitments", title: "Architectural Commitments", level: 1 },
  { id: "reference-arch", title: "Reference Architecture", level: 1 },
  { id: "tool-matrix", title: "Tool Role Matrix", level: 1 },
  { id: "data-model", title: "Data Model", level: 1 },
  { id: "committee", title: "Luma Committee Mind", level: 1 },
  { id: "pax-body", title: "PAX Body: Ingestion & Classification", level: 1 },
  { id: "privacy", title: "Privacy, Security & Review", level: 1 },
  { id: "surfaces", title: "User-Facing Surfaces", level: 1 },
  { id: "phases", title: "Build Phases", level: 1 },
  { id: "evaluation", title: "Evaluation", level: 1 },
  { id: "failures", title: "Expected Failure Modes", level: 1 },
];

function FPODiagram({ title, description }: { title: string; description: string }) {
  return (
    <div className="my-8 rounded-2xl border-2 border-dashed border-nyo-gray-700 bg-nyo-gray-900/30 p-8 text-center">
      <span className="inline-block px-3 py-1 rounded-full bg-nyo-orange/10 text-nyo-orange text-xs font-bold tracking-wider uppercase mb-3">
        FPO &mdash; Diagram Needed
      </span>
      <h4 className="text-lg font-bold text-nyo-gray-300 mb-2">{title}</h4>
      <p className="text-sm text-nyo-gray-500 max-w-md mx-auto">{description}</p>
    </div>
  );
}

function CommitmentItem({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4 py-4 border-b border-nyo-gray-800/50 last:border-0">
      <span className="shrink-0 w-8 h-8 rounded-full bg-nyo-orange/10 flex items-center justify-center text-sm font-bold text-nyo-orange">
        {number}
      </span>
      <div>
        <h4 className="font-semibold text-nyo-white mb-1">{title}</h4>
        <p className="text-sm text-nyo-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function PoroiContent() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 py-16 text-center">
        <ScrollReveal>
          <Badge variant="orange" className="mb-6">The What</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-nyo-white mb-4">
            Poroi
          </h1>
          <p className="text-xl sm:text-2xl text-nyo-gray-400 font-light mb-6">
            From Archai to Architecture, Workflows, and Means of Realization
          </p>
          <p className="text-sm text-nyo-gray-600">
            By Cameron C. Scott &middot; Draft 0.4 for the PAX:Luma project
          </p>
          <p className="mt-4 text-sm text-nyo-gray-500 italic">
            Companion to <a href="/archai" className="text-nyo-orange hover:underline">Archai: First Principles for Embodied Synthetic Constructs</a>
          </p>
        </ScrollReveal>
      </header>

      <div className="max-w-7xl mx-auto px-6 flex gap-12">
        <aside className="hidden lg:block w-64 shrink-0">
          <SidebarTOC items={tocItems} />
        </aside>

        <article className="flex-1 max-w-3xl prose-nyo">
          {/* Abstract */}
          <section id="abstract">
            <ScrollReveal>
              <h2>Abstract</h2>
              <p>
                If Archai is the why, Poroi is the how: the routes, resources, and practical means by which PAX:Luma gets built. This document translates the philosophical claims of Archai into a build blueprint for a local-first synthetic construct.
              </p>
              <p>
                The central engineering claim is straightforward. Luma and PAX must be built as distinct but recursively joined layers. Luma is the integrative mind: the deliberative, narrative, planning, and evaluative system. PAX is the body: the local-first substrate that encounters files, conversations, sensors, calendars, communications, and eventually the physical world.
              </p>
              <p>
                The goal is not another fluent assistant that performs isolated tricks. The goal is a construct that can gather experience into memory, test its own categories against consequence, and remain itself long enough to become accountable for what it learns and does.
              </p>
            </ScrollReveal>
          </section>

          {/* Commitments */}
          <section id="commitments">
            <ScrollReveal>
              <h2>Non-Negotiable Architectural Commitments</h2>
              <p>Before the stack gets decomposed into services and tools, the build needs a few commitments that will not be treated as optional.</p>
              <div className="mt-6">
                <CommitmentItem number={1} title="Local-first ownership" description="The home of PAX is the local machine you control, with cloud used as extension rather than sovereign center. The canonical stores, event logs, Obsidian vault, review queues, and orchestration state should live on the local hub first." />
                <CommitmentItem number={2} title="Preservation of originals" description="The system should never confuse its summaries with the artifacts they summarize. The derivative note is for speed. The original is for challenge, re-reading, reinterpretation." />
                <CommitmentItem number={3} title="Challengeability" description="Every summary, extracted claim, relationship edge, or action recommendation must be traceable back to evidence." />
                <CommitmentItem number={4} title="Probabilistic categorization" description="PAX should tag an item with dominant and secondary scopes, not force it into a single silo. This mirrors life more accurately." />
                <CommitmentItem number={5} title="Human review at the boundary" description="The system must know when to ask. Autonomy without review is not the point. The point is to give review structure, timing, and context." />
                <CommitmentItem number={6} title="Model plurality under one voice" description="PAX:Luma should use several AI systems, but the construct should present a coherent identity. Luma is that identity. The committee remains internal." />
                <CommitmentItem number={7} title="Explicit body/mind separation" description="Body and mind are service boundaries. They have different responsibilities, different memories, and different failure modes. Their relation is a loop, not a stack." />
                <CommitmentItem number={8} title="Explicit social continuity" description="A construct that remembers files but not people is half blind. PAX:Luma needs a relationship graph that can track family, friends, coworkers, influences, and public figures." />
              </div>
            </ScrollReveal>
          </section>

          {/* Reference Architecture */}
          <section id="reference-arch">
            <ScrollReveal>
              <h2>Reference Architecture</h2>
              <p>At the highest level, the architecture has four layers:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {[
                  { icon: Layers, title: "Layer 1: Capture", desc: "World-contact layer. Uploads, screenshots, recordings, email, calendar, sensors. Receives, timestamps, hashes, routes, preserves." },
                  { icon: Database, title: "Layer 2: Processing", desc: "OCR, parsing, transcription, summaries, metadata, embeddings, graph edges, privacy rules, review tasks." },
                  { icon: Shield, title: "Layer 3: Evidence & Trust", desc: "Packages material for the mind: evidence objects with provenance, confidence, freshness, sensitivity, review status." },
                  { icon: Brain, title: "Layer 4: Committee Mind", desc: "Luma receives decision packets, deliberates with stable seats, arbitrates, and returns a single answer or action." },
                ].map((layer) => (
                  <Card key={layer.title} className="p-5">
                    <layer.icon size={20} className="text-nyo-orange mb-3" />
                    <h4 className="font-semibold text-nyo-white text-sm mb-2">{layer.title}</h4>
                    <p className="text-xs text-nyo-gray-400 leading-relaxed">{layer.desc}</p>
                  </Card>
                ))}
              </div>

              <FPODiagram
                title="PAX Body Architecture & Ingestion Flow"
                description="Inputs captured, classified, secured, derived into knowledge, written into the relationship/context graph, and exposed to Luma through evidence objects."
              />
              <FPODiagram
                title="Luma Committee Brain Architecture"
                description="Multi-seat deliberation system with strategist, operator, skeptic, evidence auditor, preference guardian, and privacy seat."
              />
            </ScrollReveal>
          </section>

          {/* Tool Matrix */}
          <section id="tool-matrix">
            <ScrollReveal>
              <h2>Tool Role Matrix</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Primary Role</th>
                      <th>Use Cautiously</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="font-medium text-nyo-white">Claude Code</td><td>Repo-wide implementation, refactors, test generation</td><td>Don&apos;t let it become the sole runtime mind</td></tr>
                    <tr><td className="font-medium text-nyo-white">Meta Llama</td><td>Local model tier: summarization, classification, graph maintenance</td><td>Keep away from highest-stakes arbitration until evals confirm</td></tr>
                    <tr><td className="font-medium text-nyo-white">Gemini</td><td>Multimodal reasoning, visual evaluation, cross-checks</td><td>Don&apos;t assume multimodality equals embodiment</td></tr>
                    <tr><td className="font-medium text-nyo-white">ChatGPT</td><td>Synthesis, arbitration support, action prototyping</td><td>Don&apos;t outsource continuity to chat history</td></tr>
                    <tr><td className="font-medium text-nyo-white">PLAUD AI</td><td>Transcript, summary, mind-map from recorded audio</td><td>Treat summaries as convenience, not final truth</td></tr>
                    <tr><td className="font-medium text-nyo-white">Obsidian</td><td>Networked markdown semantic layer</td><td>Don&apos;t use as the only operational database</td></tr>
                    <tr><td className="font-medium text-nyo-white">GitHub</td><td>Version control, collaboration, history</td><td>Avoid undocumented local-only changes</td></tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </section>

          {/* Data Model */}
          <section id="data-model">
            <ScrollReveal>
              <h2>Data Model: Five Classes</h2>
              <p>The project is built around five classes of data, each with its own behavior:</p>
              <ol className="space-y-6 mt-6">
                <li><strong className="text-nyo-white">Originals</strong> &mdash; Source artifacts in their primary form: decks, PDFs, documents, screenshots, recordings. Not for fast reasoning; for preservation, challenge, and audit.</li>
                <li><strong className="text-nyo-white">Derivatives</strong> &mdash; Forms PAX creates for speed: extracted text, markdown notes, summaries, OCR results, entity candidates. Should be easy to regenerate.</li>
                <li><strong className="text-nyo-white">Evidence Objects</strong> &mdash; Governed slices bundled with provenance, confidence, freshness, sensitivity, and source links. The bridge between body and mind.</li>
                <li><strong className="text-nyo-white">Trust Records</strong> &mdash; Calibrated confidence for every recurring source, relationship, classifier, and extraction pattern. The construct should know what it knows well and what it knows badly.</li>
                <li><strong className="text-nyo-white">Relationship Records</strong> &mdash; People are not just metadata. Distinguishes family, friends, coworkers, influences, public figures. Weighted, not exclusive. One person can be a former coworker, current collaborator, and friend.</li>
              </ol>
            </ScrollReveal>
          </section>

          {/* Committee Mind */}
          <section id="committee">
            <ScrollReveal>
              <h2>The Luma Committee Mind</h2>
              <p>
                Luma is implemented as a stable orchestration pattern in which several model roles challenge one another under governance and produce one final voice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {[
                  { icon: "&#x1F3AF;", title: "Strategist", desc: "Proposes. Frames alternatives, sees structure, finds the most coherent path." },
                  { icon: "&#x2699;", title: "Operator", desc: "Grounds. Turns intentions into executable steps, checks constraints." },
                  { icon: "&#x1F50D;", title: "Skeptic", desc: "Attacks. Looks for hidden assumptions, weak evidence, self-flattery." },
                  { icon: "&#x1F4CB;", title: "Evidence Auditor", desc: "Forces source discipline. Is the claim anchored in a real artifact?" },
                  { icon: "&#x2764;", title: "Preference Guardian", desc: "Ensures the construct acts in ways the user will actually tolerate and trust." },
                  { icon: "&#x1F512;", title: "Privacy Seat", desc: "Tests for overreach, leakage, or dangerous automation." },
                ].map((seat) => (
                  <Card key={seat.title} className="p-5">
                    <div className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: seat.icon }} />
                    <h4 className="font-semibold text-nyo-white text-sm mb-1">{seat.title}</h4>
                    <p className="text-xs text-nyo-gray-400 leading-relaxed">{seat.desc}</p>
                  </Card>
                ))}
              </div>
              <p>
                Arbitration happens in a predictable order. The strategist and operator frame an answer. The skeptic and auditor challenge it. The guardian and privacy seat constrain it. The arbiter scores the result. The user sees one voice. The committee remains invisible unless its trace is needed for explanation.
              </p>
            </ScrollReveal>
          </section>

          {/* PAX Body */}
          <section id="pax-body">
            <ScrollReveal>
              <h2>The PAX Body: Ingestion, Classification & Memory</h2>
              <p>The inputs fall into six broad classes:</p>
              <ol className="space-y-3 mt-4">
                <li><strong className="text-nyo-white">Structured artifacts:</strong> Decks, docs, PDFs. Preserve-and-derive pattern.</li>
                <li><strong className="text-nyo-white">Quick captures:</strong> Screenshots, phone photos, handwritten notes. Lighter workflow.</li>
                <li><strong className="text-nyo-white">Conversation records:</strong> PLAUD transcripts, meeting transcripts, calls.</li>
                <li><strong className="text-nyo-white">Communication streams:</strong> Email, Slack, text, LinkedIn messages.</li>
                <li><strong className="text-nyo-white">Biometrics & environment:</strong> Sleep, recovery, activity, location, weather.</li>
                <li><strong className="text-nyo-white">World knowledge feeds:</strong> News, research, books, market scans.</li>
              </ol>
              <p className="mt-6">
                In each case the ingestion path follows: capture &rarr; hash &rarr; route &rarr; extract &rarr; privacy gate &rarr; trust metadata &rarr; store &rarr; review tasks &rarr; update relationships &rarr; emit context events.
              </p>
              <p className="font-medium text-nyo-orange mt-4">
                The mind should never see the raw flood. The body&apos;s job is to encounter the flood and metabolize it.
              </p>
            </ScrollReveal>
          </section>

          {/* Privacy */}
          <section id="privacy">
            <ScrollReveal>
              <h2>Privacy, Security & the Review Inbox</h2>
              <p>
                Sensitive data should be caught before it becomes part of broad search or memory. Two strategies: <strong>redaction</strong> (placeholder replaces value) and <strong>vaulting</strong> (stripped from working representation, stored separately with scoped access). Redaction is the default.
              </p>
              <p>
                The review inbox surfaces uncertain items: low-confidence OCR, ambiguous entity matches, sensitive transcript material, unclear retention decisions. Each review action generates a learning signal.
              </p>
            </ScrollReveal>
          </section>

          {/* User Surfaces */}
          <section id="surfaces">
            <ScrollReveal>
              <h2>User-Facing Surfaces</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {[
                  { icon: Layers, title: "Universal Capture", desc: "Drag-and-drop on desktop, tap-to-upload on mobile. No pre-sorting required." },
                  { icon: Shield, title: "Review Surface", desc: "Check sensitive transcripts, low-confidence OCR, relationship updates. Calm, obvious, fast." },
                  { icon: Cpu, title: "Workbench", desc: "Deep inspection: search, transcript comparison, vault navigation, relationship views." },
                  { icon: Users, title: "Conversational Surface", desc: "Where the human meets Luma. One coherent voice. Evidence-backed dialogue." },
                ].map((s) => (
                  <Card key={s.title} className="p-5">
                    <s.icon size={20} className="text-nyo-orange mb-3" />
                    <h4 className="font-semibold text-nyo-white text-sm mb-1">{s.title}</h4>
                    <p className="text-xs text-nyo-gray-400 leading-relaxed">{s.desc}</p>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* Build Phases */}
          <section id="phases">
            <ScrollReveal>
              <h2>The Four Phases of Construction</h2>
              <div className="space-y-6 mt-8">
                {[
                  { phase: 1, name: "Evidence Spine", desc: "Local stores, artifact ingestion, metadata DB, vault writer, review inbox, first local Llama runtime.", success: "Useful memory and organization system." },
                  { phase: 2, name: "Transcript & Comms Spine", desc: "PLAUD import, summary linking, email/Slack/text ingestion, relationship graph.", success: "Reliable meeting memory and relationship graph." },
                  { phase: 3, name: "Luma Runtime", desc: "Decision packets, committee seats, arbiter, trust scoring, opportunity logic.", success: "Mind-body loop starts operating as one system." },
                  { phase: 4, name: "Action Layer", desc: "Draft routing, delegation packets, supervised outbound actions, approvals.", success: "Helpful action without loss of trust or control." },
                ].map((p) => (
                  <div key={p.phase} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-nyo-orange/10 border border-nyo-orange/20 flex items-center justify-center text-lg font-black text-nyo-orange">
                      {p.phase}
                    </div>
                    <div>
                      <h4 className="font-bold text-nyo-white mb-1">{p.name}</h4>
                      <p className="text-sm text-nyo-gray-400 mb-2">{p.desc}</p>
                      <p className="text-xs text-nyo-gray-500 italic">Success: {p.success}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* Evaluation */}
          <section id="evaluation">
            <ScrollReveal>
              <h2>Evaluation</h2>
              <p>The build needs evaluation criteria that line up with the philosophical aim:</p>
              <ul className="mt-4">
                <li><strong>Retrieval evals:</strong> Can Luma recover the source for a claim?</li>
                <li><strong>Transcript evals:</strong> Does the system recover commitments from full transcripts?</li>
                <li><strong>Security evals:</strong> Do sensitive patterns get caught before indexing?</li>
                <li><strong>Committee evals:</strong> Does the skeptic ever change the answer?</li>
                <li><strong>Relationship evals:</strong> Can the system distinguish a close friend from a public figure?</li>
                <li><strong>Longitudinal evals:</strong> After ninety days, does the system know people better?</li>
              </ul>
              <p className="mt-4 font-medium text-nyo-gray-300">
                The hidden metric is whether the system acquires a history that feels like <em>one history</em>. Not a pile of artifacts. A history.
              </p>
            </ScrollReveal>
          </section>

          {/* Failure Modes */}
          <section id="failures">
            <ScrollReveal>
              <h2>Expected Failure Modes</h2>
              <ol className="space-y-3 mt-4">
                <li><strong className="text-nyo-white">Summary seduction</strong> &mdash; Trusting summaries too much. Cure: hard source linking.</li>
                <li><strong className="text-nyo-white">Graph fantasy</strong> &mdash; Treating the graph as truer than messy life. Cure: correction and humility.</li>
                <li><strong className="text-nyo-white">Notification creep</strong> &mdash; Talking too much. Cure: strict budgets and feedback.</li>
                <li><strong className="text-nyo-white">One-model gravity</strong> &mdash; Everything collapses into one provider. Cure: enforced plurality.</li>
                <li><strong className="text-nyo-white">Privacy drift</strong> &mdash; Storing too much. Cure: aggressive review and retention discipline.</li>
                <li><strong className="text-nyo-white">Orchestration inflation</strong> &mdash; Too many agent loops. Cure: lean committee, prove each layer.</li>
                <li><strong className="text-nyo-white">Builder vanity</strong> &mdash; Admiring cleverness over understanding. Cure: ask what the construct actually understood.</li>
              </ol>
            </ScrollReveal>
          </section>
        </article>
      </div>

      <div className="lg:hidden">
        <SidebarTOC items={tocItems} />
      </div>
    </div>
  );
}
