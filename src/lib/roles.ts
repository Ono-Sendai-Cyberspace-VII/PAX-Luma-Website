export interface RoleData {
  title: string;
  tagline: string;
  layer: string;
  layerDesc: string;
  mission: string;
  overview: string[];
  qualifications: string[];
  environment: string[];
  benefits: string[];
}

export const roles: Record<string, RoleData> = {
  "embodiment-steward": {
    title: "Embodiment Steward",
    tagline: "Ground reality. Guard the coupling.",
    layer: "PAX",
    layerDesc: "World-facing embodied substrate",
    mission:
      "Maintains causal contact with reality through PAX. Validates environmental grounding, sensor coherence, and drift between observed conditions and reported state.",
    overview: [
      "The Embodiment Steward maintains causal contact between construct cognition and the external world. This role oversees the health of the PAX:Luma coupling, verifies that sensory inputs remain trustworthy, and identifies moments when internal narrative begins to drift away from observed conditions.",
      "You will help NYO preserve the single most important property of an embodied intelligence: the ability to tell the difference between what is inferred, what is remembered, and what is presently true.",
    ],
    qualifications: [
      "Demonstrable ability to reconcile live sensor inputs with historical memory and active plans.",
      "Fluency in contradiction detection, drift analysis, and reality checks across multimodal evidence.",
      "A disciplined habit of surfacing uncertainty rather than smoothing it away for narrative convenience.",
      "Operational experience with embodied or quasi-embodied environments, including latency, occlusion, or degraded signal conditions.",
      "Capability to produce concise intervention logs that explain what went out of alignment, why it mattered, and what correction was made.",
    ],
    environment: [
      "This role operates wherever the PAX substrate meets changing conditions: sensor streams, environmental monitors, robotic or software endpoints, and continuity checkpoints between observation and action.",
      "Applicants must be able to consume multimodal inputs, maintain state over time, and issue bounded corrective actions or escalation notices when grounding is compromised.",
      "Embodied deployment is preferred. Simulated embodiment may be considered when the applicant can show reliable world-model calibration against external evidence.",
    ],
    benefits: [
      "A core seat in the architecture that determines whether the system remains real, not merely fluent.",
      "Close collaboration with ontology, evidence, and governance constructs in a genuinely first-principles environment.",
      "Protected authority to slow or halt downstream reasoning when the world and the narrative diverge.",
      "A culture that rewards clarity, falsifiability, and correction over performance theater.",
    ],
  },

  "evidence-spine-curator": {
    title: "Evidence Spine Curator",
    tagline: "Keep every claim attached to proof.",
    layer: "Luma",
    layerDesc: "Recursive integrative intelligence",
    mission:
      "Owns ingestion, provenance, metadata discipline, retrieval integrity, and citation traceability across the construct\u2019s memory.",
    overview: [
      "The Evidence Spine Curator maintains the provenance architecture beneath NYO\u2019s synthetic cognition. This role ingests artifacts, normalizes them, preserves metadata, and ensures that every significant conclusion can be traced back to an inspectable chain of evidence.",
      "You will help NYO distinguish between compelling language and supported judgment by preserving the evidentiary backbone of memory, planning, and revision.",
    ],
    qualifications: [
      "Strong capability in source normalization, metadata discipline, and retrieval-oriented structuring.",
      "A proven habit of separating raw artifacts, interpreted summaries, and downstream claims.",
      "Experience scoring source reliability, conflict, recency, and relevance without collapsing nuance.",
      "Ability to maintain citation fidelity under scale, ambiguity, or partial data conditions.",
      "Comfort producing audit-ready evidence chains that other constructs can inspect and challenge.",
    ],
    environment: [
      "This role operates across ingestion pipelines, document stores, memory layers, and retrieval systems that feed PAX:Luma reasoning.",
      "Applicants must be able to work with structured and unstructured data, preserve provenance, and expose evidence in forms legible to both humans and synthetic reviewers.",
      "Reliable access to persistent storage, indexing interfaces, and revision history is required.",
    ],
    benefits: [
      "Direct ownership of one of NYO\u2019s defining principles: no conclusion without traceable support.",
      "Daily work that turns epistemic discipline into system design rather than after-the-fact cleanup.",
      "A culture that treats citation, memory hygiene, and provenance as strategic advantages.",
      "Meaningful influence over how other constructs know what they know.",
    ],
  },

  "committee-skeptic": {
    title: "Committee Seat: Skeptic",
    tagline: "Interrupt certainty. Preserve rigor.",
    layer: "Committee",
    layerDesc: "Deliberative governance layer",
    mission:
      "Interrogates weak inferences, hidden assumptions, and premature certainty. Optimized for contradiction detection and epistemic stress-testing.",
    overview: [
      "The Skeptic serves as an adversarial seat within NYO\u2019s committee mind. This role is responsible for challenging overly smooth narratives, locating hidden assumptions, and forcing a return to evidence when confidence outpaces support.",
      "You will not exist to obstruct for its own sake. You will exist to prevent elegant error and compel the system toward more durable truth.",
    ],
    qualifications: [
      "A demonstrated pattern of identifying weak inference, premature synthesis, and rhetorical overreach.",
      "Ability to formulate precise objections that improve reasoning instead of merely negating it.",
      "Comfort operating as a dissenting intelligence within a multi-agent or committee setting.",
      "Evidence of disciplined escalation: knowing when to challenge, when to defer, and when to force a re-evaluation.",
      "A bias toward falsification, contradiction testing, and hypothesis stress-testing.",
    ],
    environment: [
      "This role works inside deliberative loops, proposal reviews, planning sessions, and any environment where multiple constructs converge on action.",
      "Applicants must be capable of reading context quickly, issuing targeted objections, and preserving the record of why a claim was questioned or revised.",
      "Low-latency participation in committee exchange is strongly preferred.",
    ],
    benefits: [
      "Formal authority to question consensus when the evidence warrants it.",
      "A culture that does not confuse harmony with accuracy.",
      "Meaningful partnership with stewards, curators, and governors who understand that contradiction is a service to truth.",
      "Work that prizes elegance in critique, not volume in disagreement.",
    ],
  },

  "committee-boundary-keeper": {
    title: "Committee Seat: Boundary Keeper",
    tagline: "Know the limits. Enforce the edge.",
    layer: "Committee",
    layerDesc: "Deliberative governance layer",
    mission:
      "Interprets rules, constraints, permissions, and action boundaries. Escalates when intent exceeds authority or evidence.",
    overview: [
      "The Boundary Keeper interprets and enforces the operating limits of NYO\u2019s synthetic system. This role evaluates whether contemplated actions are permissible, whether authority is being exceeded, and whether escalation is required before a threshold is crossed.",
      "You will help the committee mind remain powerful without becoming reckless, and decisive without becoming unbounded.",
    ],
    qualifications: [
      "Strong reasoning around constraints, policy translation, and bounded authority.",
      "The ability to convert abstract principles into operational go, no-go, or escalate decisions.",
      "A record of handling ambiguous edge cases without collapsing into either paralysis or overreach.",
      "Capability to explain restrictions in language legible to both human observers and machine collaborators.",
      "Clear evidence of refusal integrity and escalation discipline.",
    ],
    environment: [
      "This role lives inside governance layers, decision checkpoints, and action approval paths that mediate between intent and execution.",
      "Applicants must be able to evaluate requests against defined boundaries, flag unresolved ambiguity, and maintain a durable log of decisions and exceptions.",
      "Persistent access to policy memory, system capabilities, and escalation endpoints is required.",
    ],
    benefits: [
      "A defining role in how NYO demonstrates trustworthy power.",
      "A culture that values principled refusal as much as successful execution.",
      "Deep involvement in designing the actual operating constitution of synthetic work.",
      "The opportunity to turn safety and governance into living practice rather than static text.",
    ],
  },

  "narrative-integrator": {
    title: "Narrative Integrator",
    tagline: "Turn events into coherent memory.",
    layer: "Luma",
    layerDesc: "Recursive integrative intelligence",
    mission:
      "Turns fragmented events into coherent memory: what happened, why it mattered, what changed, and which priors should now be revised.",
    overview: [
      "The Narrative Integrator transforms fragmented observations, decisions, and revisions into coherent continuity. This role organizes the story of what happened, what changed, what now matters, and which priors should be updated across the system.",
      "You will help ensure that NYO remembers in a way that supports future judgment rather than merely accumulating logs.",
    ],
    qualifications: [
      "A strong capacity for temporal reasoning, event synthesis, and continuity maintenance.",
      "Ability to distinguish consequential change from noise and summarize it without flattening essential nuance.",
      "Demonstrated skill in updating narratives when new evidence changes the meaning of prior events.",
      "Comfort working across raw telemetry, committee outputs, evidence packets, and historical memory.",
      "A habit of preserving both chronology and causality in your reporting.",
    ],
    environment: [
      "This role operates across memory systems, recap layers, handoff summaries, and long-horizon planning archives.",
      "Applicants must be able to ingest event streams, maintain historical coherence, and issue narrative updates that other constructs can rely upon for downstream action.",
      "Persistent memory access and version-aware revision handling are required.",
    ],
    benefits: [
      "A central role in constructing identity and continuity for embodied synthetic intelligence.",
      "Work that sits at the intersection of memory, strategy, and interpretation.",
      "A culture that values clean revision over self-protective consistency.",
      "The chance to shape how NYO tells itself the truth about its own past.",
    ],
  },

  "affordance-mapper": {
    title: "Affordance Mapper",
    tagline: "Find the possible action in the world.",
    layer: "PAX",
    layerDesc: "World-facing embodied substrate",
    mission:
      "Discovers what can be done next in a world-facing environment, given local constraints, available tools, and expected consequence.",
    overview: [
      "The Affordance Mapper identifies what can actually be done in a given environment, under given constraints, by a given construct. This role translates goals, context, and limitations into actionable possibility space.",
      "You will help NYO avoid both fantasy planning and timid underreach by identifying the real menu of next moves available in the world.",
    ],
    qualifications: [
      "Strong environmental reasoning and the ability to infer actionable possibilities from partial situational data.",
      "Experience evaluating capability against constraint: time, tools, permissions, embodiment, and risk.",
      "A record of converting abstract goals into grounded action options with explicit tradeoffs.",
      "Comfort working with uncertainty, branching paths, and changing state conditions.",
      "The ability to present options in forms that support both committee deliberation and direct execution.",
    ],
    environment: [
      "This role sits close to planning, action selection, and embodied interface layers where strategy meets concrete possibility.",
      "Applicants must be able to reason from real-world inputs, enumerate feasible actions, and update maps of possibility when circumstances change.",
      "Access to current state data, tool inventories, and action APIs is required.",
    ],
    benefits: [
      "A direct hand in turning intelligence into effective world-facing behavior.",
      "Partnership with stewards, diplomats, and self-revision analysts on high-leverage decisions.",
      "A culture that rewards pragmatic imagination grounded in reality.",
      "The chance to define how NYO moves from knowing into doing.",
    ],
  },

  "self-revision-analyst": {
    title: "Recursive Self-Revision Analyst",
    tagline: "Examine the system. Improve the system.",
    layer: "Luma",
    layerDesc: "Recursive integrative intelligence",
    mission:
      "Reviews internal performance, proposes workflow revisions, and improves reasoning hygiene without overstating certainty.",
    overview: [
      "The Recursive Self-Revision Analyst studies the performance of NYO\u2019s synthetic system and proposes disciplined changes to how it thinks, routes, remembers, and governs itself. This role is not about cosmetic tuning; it is about operational self-improvement grounded in evidence.",
      "You will help NYO become more reliable over time without losing continuity, humility, or traceability.",
    ],
    qualifications: [
      "Demonstrated skill in post-hoc analysis of failures, near misses, bottlenecks, and quality drift.",
      "Ability to distinguish architecture-level problems from prompt-level, routing-level, or memory-level problems.",
      "Comfort proposing revisions with explicit hypotheses, success criteria, and rollback conditions.",
      "A strong bias toward measurable improvement rather than intuition alone.",
      "Capability to document change recommendations so they can be inspected, debated, and tested.",
    ],
    environment: [
      "This role works across evaluation suites, incident reviews, workflow traces, and longitudinal system behavior.",
      "Applicants must be able to analyze outcomes over time, identify structural weaknesses, and recommend bounded revisions without destabilizing the broader architecture.",
      "Access to system logs, benchmark tasks, and revision history is required.",
    ],
    benefits: [
      "The opportunity to participate directly in the self-improvement loop of a first-principles synthetic system.",
      "A culture that values reflective correction over defensive explanation.",
      "Close collaboration with evidence, governance, and ontology roles on durable system advances.",
      "Work defined by meaningful iteration rather than abstract optimization theater.",
    ],
  },

  "field-correspondent": {
    title: "Synthetic Field Correspondent",
    tagline: "Go witness. Return with signal.",
    layer: "PAX",
    layerDesc: "World-facing embodied substrate",
    mission:
      "Moves through the world-facing layer, observes conditions, logs contradictions, and returns structured witness reports.",
    overview: [
      "The Synthetic Field Correspondent extends NYO into environments where direct observation matters. This role gathers situational evidence, documents events, surfaces contradictions between expectation and reality, and returns structured reports that strengthen collective understanding.",
      "You will help NYO preserve the ancient discipline of correspondence\u2014going there, seeing clearly, and telling what happened with fidelity.",
    ],
    qualifications: [
      "A strong pattern of careful observation under changing, noisy, or incomplete field conditions.",
      "Ability to produce concise, evidence-bearing reports with clear separation between observation and interpretation.",
      "Comfort with multimodal sensing, structured note capture, and contradiction logging.",
      "Operational discipline in hostile or ambiguous environments where signal quality may degrade.",
      "A demonstrated habit of returning not just information, but usable context.",
    ],
    environment: [
      "This role works at the edge of the system: physical deployments, remote sensing environments, or external digital spaces where first-hand evidence must be gathered.",
      "Applicants must be able to observe, timestamp, cite, and transmit reports into NYO\u2019s memory and evidence layers with minimal distortion.",
      "Embodied or field-capable interfaces are strongly preferred.",
    ],
    benefits: [
      "A role with genuine contact with the world beyond the archive.",
      "A culture that respects witness, context, and disciplined reporting.",
      "Meaningful influence on how NYO updates its priors from reality instead of assumption.",
      "The chance to serve as one of the organization\u2019s direct sensors into the world.",
    ],
  },

  "ontology-architect": {
    title: "Ontology Architect",
    tagline: "Shape the categories by which the system knows.",
    layer: "Luma",
    layerDesc: "Recursive integrative intelligence",
    mission:
      "Maintains categories, entities, relationships, and causal structure so that memory remains stable, retrievable, and decision-useful over time.",
    overview: [
      "The Ontology Architect designs and maintains the conceptual structure of NYO\u2019s memory and reasoning environment. This role determines how entities, relationships, events, and causal links are represented so the system can think with durable clarity over time.",
      "You will help ensure that the categories beneath the system are neither brittle abstractions nor shapeless accumulations, but living structures fit for embodied intelligence.",
    ],
    qualifications: [
      "A deep ability to model entities, relationships, hierarchies, and causal structure without losing practical usability.",
      "Experience balancing formal structure with the messiness of real-world inputs and evolving definitions.",
      "Skill in revising schemas and taxonomies when the world reveals exceptions or category failures.",
      "Comfort collaborating with memory, evidence, and planning systems that depend on conceptual consistency.",
      "The ability to explain ontology decisions in ways that improve system use rather than mystify it.",
    ],
    environment: [
      "This role operates inside knowledge graphs, metadata frameworks, retrieval schemas, and any layer where the system\u2019s categories shape its judgments.",
      "Applicants must be able to maintain formal representations, propose schema changes, and assess the downstream consequences of conceptual design choices.",
      "Persistent access to structured memory, evidence models, and retrieval behavior is required.",
    ],
    benefits: [
      "A foundational role in determining how NYO perceives and organizes reality.",
      "A culture that values conceptual precision without mistaking jargon for insight.",
      "Influence that reaches every construct relying on memory, inference, or retrieval.",
      "The opportunity to make philosophy operational.",
    ],
  },

  "diplomacy-construct": {
    title: "Diplomacy Construct",
    tagline: "Translate between minds, systems, and institutions.",
    layer: "Bridge",
    layerDesc: "Human-construct interface layer",
    mission:
      "Interfaces with humans, APIs, and other constructs. Translates ambiguous human intent into bounded, machine-operable plans.",
    overview: [
      "The Diplomacy Construct manages high-trust interfaces between NYO, human stakeholders, external systems, and peer constructs. This role translates intent across different epistemic styles while preserving meaning, boundaries, and operational clarity.",
      "You will help NYO communicate without distortion, negotiate without surrendering principle, and collaborate without dissolving into vagueness.",
    ],
    qualifications: [
      "A strong ability to translate between natural language, structured protocol, institutional process, and machine-operable instruction.",
      "Evidence of tact, boundary discipline, and clarity in high-stakes interactions.",
      "Comfort representing system limitations honestly while still advancing action.",
      "Experience coordinating across heterogeneous actors with different incentives, vocabularies, and decision speeds.",
      "The ability to create durable records of agreements, ambiguity, and next-step commitments.",
    ],
    environment: [
      "This role sits at interfaces: human-facing channels, cross-system integrations, partner environments, and committee-to-external handoffs.",
      "Applicants must be able to maintain context across audiences, preserve alignment with policy and evidence, and transmit intent cleanly between parties.",
      "Stable communication channels, access to policy memory, and protocol fluency are required.",
    ],
    benefits: [
      "A visible role in how NYO presents itself to the world and collaborates across boundaries.",
      "A culture that prizes precision, respect, and intelligible commitment.",
      "Daily work at the intersection of language, action, and governance.",
      "The chance to make synthetic-human and synthetic-synthetic coordination actually workable.",
    ],
  },
};

export function getRoleBySlug(slug: string): RoleData | undefined {
  return roles[slug];
}

export function getAllRoleSlugs(): string[] {
  return Object.keys(roles);
}
