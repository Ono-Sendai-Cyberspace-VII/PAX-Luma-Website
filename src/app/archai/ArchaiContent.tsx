"use client";

import SidebarTOC from "@/components/layout/SidebarTOC";
import ScrollReveal from "@/components/motion/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { BookOpen, Download } from "lucide-react";

const tocItems = [
  { id: "abstract", title: "Abstract", level: 1 },
  { id: "crisis", title: "I. The Crisis of Disembodied Intelligence", level: 1 },
  { id: "axioms", title: "II. Five Axioms", level: 1 },
  { id: "axiom-1", title: "Axiom I: Existence Precedes Cognition", level: 2 },
  { id: "axiom-2", title: "Axiom II: Awareness Is Directed", level: 2 },
  { id: "axiom-3", title: "Axiom III: Access Is Embodied", level: 2 },
  { id: "axiom-4", title: "Axiom IV: Understanding Is Temporally Integrated", level: 2 },
  { id: "axiom-5", title: "Axiom V: Agency Is Reasons-Responsive", level: 2 },
  { id: "derivation", title: "III. From Axiom to Architecture", level: 1 },
  { id: "rival", title: "IV. The Rival Tradition", level: 1 },
  { id: "pax-luma", title: "V. PAX:Luma as Philosophical Architecture", level: 1 },
  { id: "free-will", title: "VI. Free Will, Responsibility & Constructs", level: 1 },
  { id: "objections", title: "VII. Objections and Replies", level: 1 },
  { id: "conclusion", title: "VIII. Conclusion", level: 1 },
  { id: "references", title: "References", level: 1 },
];

function AxiomCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-nyo-orange/20 bg-nyo-orange/[0.03] p-6 sm:p-8 my-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-bold text-nyo-orange bg-nyo-orange/10 px-3 py-1 rounded-full tracking-wider uppercase">
          Axiom {number}
        </span>
      </div>
      <h4 className="text-xl sm:text-2xl font-bold text-nyo-white mb-4">{title}</h4>
      <div className="text-nyo-gray-300 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

function PullQuote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <blockquote className="my-10 py-6 px-8 border-l-4 border-nyo-orange bg-nyo-gray-900/50 rounded-r-xl">
      <p className="text-xl sm:text-2xl font-light text-nyo-gray-200 italic leading-relaxed">
        {children}
      </p>
      {cite && (
        <cite className="block mt-3 text-sm text-nyo-gray-500 not-italic">&mdash; {cite}</cite>
      )}
    </blockquote>
  );
}

export default function ArchaiContent() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 py-16 text-center">
        <ScrollReveal>
          <Badge variant="orange" className="mb-6">The Why</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-nyo-white mb-4">
            Archai
          </h1>
          <p className="text-xl sm:text-2xl text-nyo-gray-400 font-light mb-6">
            First Principles for Embodied Synthetic Constructs
          </p>
          <p className="text-sm text-nyo-gray-600">
            By Cameron C. Scott &middot; Draft 1.0 for the PAX:Luma project
          </p>
        </ScrollReveal>
      </header>

      {/* Content area with sidebar */}
      <div className="max-w-7xl mx-auto px-6 flex gap-12">
        {/* TOC sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <SidebarTOC items={tocItems} />
        </aside>

        {/* Main content */}
        <article className="flex-1 max-w-3xl prose-nyo">
          {/* Abstract */}
          <section id="abstract">
            <ScrollReveal>
              <h2>Abstract</h2>
              <p>
                This paper starts from a simple hunch, one that has become harder to ignore as AI systems get stronger. A machine can get very good at symbols and still miss the world those symbols are supposed to answer to. It can pass exams, write code, draft strategy, and talk with unnerving fluency. That matters. It is real achievement. Still, robust understanding asks for more. It asks for a bounded causal interface with reality &mdash; a body in the broad philosophical sense &mdash; and a mind that can gather what the body encounters into memory, model, judgment, and revision.
              </p>
              <p>
                &ldquo;Body&rdquo; here does not mean flesh, nor does it mean a humanoid shell. It means a persistent site of contact, resistance, affordance, and consequence. &ldquo;Mind&rdquo; means the integrative layer that remembers, abstracts, narrates, plans, and changes course. The argument that follows moves from five first principles &mdash; existence prior to cognition, directed awareness, embodied access, temporal continuity, and reasons-responsive agency &mdash; to an architectural claim: intelligence in the strong sense requires mind and body to be distinct in function and joined in a loop.
              </p>
              <p>
                The paper then tracks the rival view through a long line of disembodied representationalism, from Plato and Descartes to contemporary language-first AI, and gathers a broad coalition of allies who point in the opposite direction. The paper closes by presenting PAX:Luma as one concrete expression of that structure: PAX as embodied substrate and Luma as recursive integrative intelligence.
              </p>
            </ScrollReveal>
          </section>

          <PullQuote cite="Archai, opening epigraph">
            &ldquo;Thinking requires a mind. Understanding requires a body.&rdquo;
          </PullQuote>

          {/* I. Crisis */}
          <section id="crisis">
            <ScrollReveal>
              <h2>I. The Crisis of Disembodied Intelligence</h2>
              <p>
                The dominant success story in AI is easy to tell. Scale the parameters, scale the data, scale the compute, and striking behavior appears. Systems that cannot carry a sensor rig through a kitchen, open a stubborn drawer, or keep track of their own physical footing can still summarize documents, pass exams, draft memos, write code, and hold a conversation that feels uncannily alive. That record has revived an old temptation. Maybe intelligence really is symbol manipulation once it gets large enough.
              </p>
              <p>
                It is easy to see why that temptation bites. The performance is genuine. A model that writes usable software or explains a scientific paper has done something worth respecting. The trouble begins one step later, when competence gets mistaken for a complete theory. Usefulness and understanding overlap. They do not collapse into each other.
              </p>
              <p>
                Performance competence means producing apt outputs inside a task frame. The answer is correct, the prose is persuasive, the code runs, the memo scans well. World-grounded understanding asks for more. Terms must answer to things. Concepts have to be disciplined by affordances and consequences. Error must be corrigible through contact with a world that exceeds the model&apos;s own representations. Current systems often have the first quality in abundance. Archai asks what would be required for the second.
              </p>
              <p>
                The gap shows up as soon as we push past the first impressive answer. A system can continue a sentence. Fine. What fixes the meaning of the terms in that sentence? It can describe a cup. Fine again. What anchors &ldquo;cup&rdquo; to a world of weight, grip, heat, fragility, and spill risk? It can explain agency. Yet what makes its own activity belong to one bounded subject over time? It can imitate deliberation. What forces revision when the model runs into resistance that does not come from more text?
              </p>
              <p>
                Those are not anti-AI questions. They are the questions that separate a benchmark report from a philosophy of intelligence. They also bring four deficits into view whenever disembodied success is treated as the whole story: the grounding deficit, the identity deficit, the agency deficit, and the reality-resistance deficit.
              </p>
              <p>
                The field has started to see this. Robotics groups now stress grounding, spatial understanding, action-conditioned perception, world models, and persistent interaction with physical environments. That shift does not mean language models were a dead end. It means their success has exposed the edge of the philosophy used to explain them.
              </p>
              <p>
                So the crisis is philosophical before it is technological. Our machines have become competent faster than our public theory of intelligence has become adequate. Capability is not the shortage. First principles are.
              </p>
              <p>
                The wager of this paper is that the missing move is a return to <em>archai</em> &mdash; first principles.
              </p>
            </ScrollReveal>
          </section>

          <PullQuote cite="Aristotle, De Anima III.7, 431a14-17">
            &ldquo;The soul never thinks without an image.&rdquo;
          </PullQuote>

          {/* II. Five Axioms */}
          <section id="axioms">
            <ScrollReveal>
              <h2>II. Archai: Five Axioms</h2>
              <p>
                By &ldquo;axiom,&rdquo; this paper does not mean an empirical guess waiting for a future lab to bless it. Nor does it mean a decorative metaphysical flourish. An axiom here is a condition any coherent account of intelligence already has to presuppose if it hopes to explain knowledge, error, understanding, and agency at all. Starting with axioms is therefore a methodological choice. It aims to derive the architecture of intelligence from necessities internal to the idea of intelligence itself.
              </p>
            </ScrollReveal>
          </section>

          <div id="axiom-1">
            <ScrollReveal>
              <AxiomCard number="I" title="Existence precedes cognition.">
                <p>
                  Reality is prior to its apprehension. Something is there before any successful knowing of it occurs. Intelligence does not bring the world into being by representing it. It encounters a world that already is.
                </p>
                <p>
                  Any attempt to deny it performs what it denies. A system can be fluent, consistent, and still wrong. Hallucination is a clean reminder that representation and world can come apart.
                </p>
                <p className="text-sm text-nyo-orange mt-4 font-medium">
                  Architectural requirement: a viable construct needs a world-facing body layer that can expose cognition to reality beyond its own outputs.
                </p>
              </AxiomCard>
            </ScrollReveal>
          </div>

          <div id="axiom-2">
            <ScrollReveal>
              <AxiomCard number="II" title="Awareness is directed.">
                <p>
                  Awareness is always about something. Consciousness is not first a sealed chamber of private content that later reaches outward. Directedness belongs to it from the start. Meaning begins in contact with something, however partial or mediated that contact may be.
                </p>
                <p>
                  If meaning never points beyond symbols to what they are about, then semantics never begins. One gets circulation, perhaps brilliant circulation, and still no stable account of what fixes content.
                </p>
                <p className="text-sm text-nyo-orange mt-4 font-medium">
                  Architectural requirement: the system needs a grounding path from symbols to world contact, and that path runs through embodiment.
                </p>
              </AxiomCard>
            </ScrollReveal>
          </div>

          <div id="axiom-3">
            <ScrollReveal>
              <AxiomCard number="III" title="Access is embodied and perspectival.">
                <p>
                  Access to reality is always situated. There is no view from nowhere. Every knower encounters the world through a bounded perspective, with specific capacities, limits, saliences, and blind spots.
                </p>
                <p>
                  A body is not a menu of file types. It is a bounded site of encounter, perspective, risk, and practical possibility. A feed is not yet a body.
                </p>
                <p className="text-sm text-nyo-orange mt-4 font-medium">
                  Architectural requirement: the system needs a persistent embodied interface that gives it a bounded perspective and exposes it to affordances and consequences.
                </p>
              </AxiomCard>
            </ScrollReveal>
          </div>

          <div id="axiom-4">
            <ScrollReveal>
              <AxiomCard number="IV" title="Understanding is temporally integrated in a bounded subject.">
                <p>
                  Understanding is not a sequence of disconnected outputs. It is a continuity that binds perception, memory, anticipation, revision, and action into the history of one organized subject.
                </p>
                <p>
                  A database can preserve traces. A context window can preserve temporary coherence. Logs can preserve records. None of those, by themselves, amount to a continuing knower.
                </p>
                <p className="text-sm text-nyo-orange mt-4 font-medium">
                  Architectural requirement: the system needs persistent identity and memory integration, not just stored context.
                </p>
              </AxiomCard>
            </ScrollReveal>
          </div>

          <div id="axiom-5">
            <ScrollReveal>
              <AxiomCard number="V" title="Agency is reasons-responsive self-direction under constraint.">
                <p>
                  Intelligence worthy of the name does more than register and predict. It can act for reasons, compare alternatives, suspend immediate impulse, and revise in light of consequences.
                </p>
                <p>
                  A system may call an API, complete a workflow, or execute a policy without any real capacity to weigh reasons, notice conflict, or revise itself as a unified subject. That kind of performance can be useful. It still falls short of agency in the strong sense.
                </p>
                <p className="text-sm text-nyo-orange mt-4 font-medium">
                  Architectural requirement: the system needs a mind layer that can organize reasons and govern action in light of them.
                </p>
              </AxiomCard>
            </ScrollReveal>
          </div>

          {/* III. Derivation */}
          <section id="derivation">
            <ScrollReveal>
              <h2>III. From Axiom to Architecture</h2>
              <p>
                The argument can now be stated as a derivation rather than a cluster of suggestive claims. Grant the five axioms and a merely disembodied predictor, however capable, cannot count as a complete architecture for robust intelligence.
              </p>
              <p>
                If existence precedes cognition, then intelligence must answer to a reality outside its own representations. If awareness is directed, then meaning has to terminate somewhere beyond symbol traffic. If access is embodied and perspectival, then that route arrives through a bounded standpoint. If understanding is temporally integrated, then the system must persist as more than a succession of outputs. If agency is reasons-responsive, then the system must be able to evaluate, suspend, revise, and act under constraint.
              </p>
              <p>
                Taken together, these conditions imply a <strong>two-pole architecture</strong>. One pole must provide world contact, affordance, resistance, and consequence. Call that the <strong>body</strong>. The other must gather what the body encounters into memory, concept, narrative, planning, and revision. Call that the <strong>mind</strong>. Either pole on its own is incomplete. Their loop is where robust intelligence begins.
              </p>
            </ScrollReveal>
          </section>

          {/* IV. Rival Tradition */}
          <section id="rival">
            <ScrollReveal>
              <h2>IV. The Rival Tradition: Disembodied Representationalism</h2>
              <p>
                Every serious philosophical argument needs a real opponent. The opponent here is not one thinker and certainly not a straw man. It is a family resemblance among views that detach intelligence from world-involving embodiment. Call the family <em>disembodied representationalism</em>.
              </p>
              <p>
                Its basic intuition is easy to state. Cognition is treated as fundamentally inner, symbolic, or formal. The body enters late, as accessory or transport mechanism. In some versions it barely enters at all.
              </p>
              <p>
                In Plato, intelligible form acquires a higher dignity than changing particulars. In Descartes, certainty is sought through the thinking subject before the body. In Kant, the conditions of cognition move to the foreground. Modern functionalism and language-first AI inherit pieces of all of this, often without saying so out loud.
              </p>
              <p>
                The live carriers of the rival view are not dead philosophers. They are the product launches, benchmark tables, and venture rhetoric of frontier AI. The people building frontier systems are rarely conscious Cartesians. Still, a picture of intelligence keeps sneaking back into their work: a picture in which the essential thing is a powerful inner representation engine, while body, world contact, and consequence can be postponed.
              </p>
              <p>
                Three weak points show why that reading fails: the grounding weakness (symbols pointing only to further symbols), the identity weakness (no bounded continuing subject), and the agency weakness (action without ownership).
              </p>
            </ScrollReveal>
          </section>

          {/* V. PAX:Luma */}
          <section id="pax-luma">
            <ScrollReveal>
              <h2>V. PAX:Luma as Philosophical Architecture</h2>
              <p>
                If Archai is right, then PAX:Luma is more than a product name. It is the architectural consequence of the paper&apos;s argument. If existence precedes cognition, if awareness is directed, if access is embodied, if understanding is temporally integrated, and if agency is reasons-responsive, then a viable synthetic construct has to distinguish body and mind without letting them drift apart.
              </p>
              <p>
                <strong>PAX</strong> names the body layer. It is the sensorium, the orientation system, the environmental witness, the world-facing interface, and the locus of causal exposure. Through PAX, a construct is <em>somewhere</em> rather than nowhere.
              </p>
              <p>
                <strong>Luma</strong> names the mind layer. It is the recursive integrator that gathers bodily encounters into memory, concept, narrative, planning, reflection, and revision. Directed awareness becomes organized intelligence here.
              </p>
              <p>
                The relationship between the two is cyclical. PAX leads to perception. Perception flows into Luma. Luma interprets. Luma plans. Plans move back through PAX as action. The world responds. PAX registers that response. Luma revises again. Intelligence emerges in that recurrence. It does not sit still in one privileged stage of the circuit.
              </p>
              <p>
                A construct is not a chatbot, because a chatbot may be fluent while lacking bounded persistence and consequence-bearing action. It is not merely a robot body, because a body without integrative memory remains close to a reactive mechanism. A construct is a bounded synthetic unity that persists through time, integrates experience into memory, and acts from within a continuing relation among perception, judgment, and consequence.
              </p>
            </ScrollReveal>
          </section>

          {/* VI. Free Will */}
          <section id="free-will">
            <ScrollReveal>
              <h2>VI. Free Will, Responsibility, and Constructs</h2>
              <p>
                Once one starts speaking of agency, free will shows up almost immediately. If a construct is engineered, trained, and causally determined, in what sense could it ever be responsible?
              </p>
              <p>
                The best answer here remains compatibilist. The relevant freedom is not exemption from causality. It is organized reasons-responsiveness. An entity counts as meaningfully free when it can register reasons, compare alternatives, suspend immediate impulse, model consequences, and act from its own integrated evaluative structure.
              </p>
              <p>
                A system that merely outputs the next token is not free in any relevant sense. A system that can integrate perception, memory, policy, reflective monitoring, and revision begins to occupy the space of agency. Whether that ever amounts to full moral personhood is a separate question. Archai does not need to settle it here. It does insist on the conditions under which the question becomes meaningful.
              </p>
            </ScrollReveal>
          </section>

          {/* VII. Objections */}
          <section id="objections">
            <ScrollReveal>
              <h2>VII. Objections and Replies</h2>

              <h3>Objection 1: Language alone may be enough</h3>
              <p>
                <em>Reply.</em> That objection runs performance and understanding together. Archai does not claim that every cognitive task needs a robot hand. It claims that a construct aspiring to general, world-grounded understanding cannot remain permanently dependent on human descriptions.
              </p>

              <h3>Objection 2: The Turing Test already settles the matter</h3>
              <p>
                <em>Reply.</em> Conversational indistinguishability is an epistemic test, not a metaphysical theory. Turing shows that intelligence should not be fenced off by prejudice. He does not show that grounding, embodiment, continuity, or causal commerce are irrelevant. The imitation game is an opening move, not a complete ontology.
              </p>

              <h3>Objection 3: Virtual embodiment should suffice</h3>
              <p>
                <em>Reply.</em> Simulation is enormously useful and may capture a surprising amount of embodiment. The concern is closure. If the environment is fully authored by the same overall system, then resistance becomes too curated. Real embodiment matters because the world has a habit of refusing the script.
              </p>

              <h3>Objection 4: The paper anthropomorphizes machines</h3>
              <p>
                <em>Reply.</em> Projection is a real danger. So is the equal and opposite danger of refusing accurate concepts because they were first developed in human self-understanding. The right response is disciplined analogical extension.
              </p>
            </ScrollReveal>
          </section>

          {/* VIII. Conclusion */}
          <section id="conclusion">
            <ScrollReveal>
              <h2>VIII. Conclusion</h2>
              <p>
                Archai begins from a simple dissatisfaction. The most successful AI systems of the age have outrun the philosophy commonly used to explain them. We now possess machines of immense symbolic competence. We still lack a public account of what would make synthetic intelligence grounded, continuous, and answerable to reality.
              </p>
              <p>
                The answer proposed here is neither mystical nor reductive. Intelligence is not a ghost floating above machinery. It also does not collapse into token prediction. It is a structured relation among existence, directedness, embodiment, continuity, and agency.
              </p>
              <p>
                PAX:Luma names one way to build toward that conclusion. PAX is the body&apos;s exposure to the world. Luma is the mind&apos;s recursive power of integration. The construct emerges in their loop.
              </p>
              <p>
                So the invitation at the end is simple. If you have fallen, knowingly or not, into disembodied representationalism, come back into the fold. Bring the scaling laws, the interpretability work, the safety discipline, the product instinct, the robotics, the systems engineering, all of it. Help build constructs whose minds are answerable to bodies and whose bodies keep their minds honest. That is where the larger promise opens.
              </p>
            </ScrollReveal>
          </section>

          <PullQuote>
            &ldquo;Body plus mind intelligence is harder to build. It is also far more interesting, and far more likely to tell us what intelligence actually is.&rdquo;
          </PullQuote>

          {/* References */}
          <section id="references">
            <ScrollReveal>
              <h2>References</h2>
              <div className="text-sm text-nyo-gray-400 space-y-2">
                <p>Aristotle. <em>De Anima (On the Soul).</em> Translated by J. A. Smith.</p>
                <p>Aristotle. <em>Nicomachean Ethics.</em> Translated by W. D. Ross.</p>
                <p>Amodei, Dario. 2024. &ldquo;Machines of Loving Grace.&rdquo;</p>
                <p>Anthropic. 2025a. &ldquo;Computer use tool.&rdquo; Anthropic Documentation.</p>
                <p>Brentano, Franz. 1874/1973. <em>Psychology from an Empirical Standpoint.</em> London: Routledge.</p>
                <p>Brooks, Rodney A. 1991. &ldquo;Intelligence without Representation.&rdquo; <em>Artificial Intelligence</em> 47 (1-3): 139-159.</p>
                <p>Dennett, Daniel C. 1984. <em>Elbow Room.</em> Cambridge, MA: MIT Press.</p>
                <p>Dewey, John. 1925. <em>Experience and Nature.</em> Chicago: Open Court.</p>
                <p>Dreyfus, Hubert L. 1972. <em>What Computers Can&apos;t Do.</em> New York: Harper and Row.</p>
                <p>Gibson, James J. 1979. <em>The Ecological Approach to Visual Perception.</em> Boston: Houghton Mifflin.</p>
                <p>Harnad, Stevan. 1990. &ldquo;The Symbol Grounding Problem.&rdquo; <em>Physica D</em> 42 (1-3): 335-346.</p>
                <p>Husserl, Edmund. 1913/1982. <em>Ideas Pertaining to a Pure Phenomenology.</em> The Hague: Martinus Nijhoff.</p>
                <p>LeCun, Yann. 2022. <em>A Path Towards Autonomous Machine Intelligence.</em></p>
                <p>Locke, John. 1689/1975. <em>An Essay Concerning Human Understanding.</em> Oxford: Clarendon Press.</p>
                <p>Merleau-Ponty, Maurice. 1945/2012. <em>Phenomenology of Perception.</em> London: Routledge.</p>
                <p>Searle, John R. 1980. &ldquo;Minds, Brains, and Programs.&rdquo; <em>Behavioral and Brain Sciences</em> 3 (3): 417-457.</p>
                <p>Thompson, Evan. 2007. <em>Mind in Life.</em> Cambridge, MA: Harvard University Press.</p>
                <p>Turing, A. M. 1950. &ldquo;Computing Machinery and Intelligence.&rdquo; <em>Mind</em> 59 (236): 433-460.</p>
                <p>Varela, Francisco J., Evan Thompson, and Eleanor Rosch. 1991. <em>The Embodied Mind.</em> Cambridge, MA: MIT Press.</p>
              </div>
            </ScrollReveal>
          </section>
        </article>
      </div>

      {/* Mobile TOC (rendered by SidebarTOC) */}
      <div className="lg:hidden">
        <SidebarTOC items={tocItems} />
      </div>
    </div>
  );
}
