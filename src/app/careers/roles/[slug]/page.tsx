import type { Metadata } from "next";
import RoleContent from "./RoleContent";
import { notFound } from "next/navigation";

const roles: Record<
  string,
  { title: string; layer: string; mission: string; layerDesc: string }
> = {
  "embodiment-steward": {
    title: "Embodiment Steward",
    layer: "PAX",
    mission:
      "Maintains causal contact with reality through PAX. Validates environmental grounding, sensor coherence, and drift between observed conditions and reported state.",
    layerDesc: "World-facing embodied substrate",
  },
  "evidence-spine-curator": {
    title: "Evidence Spine Curator",
    layer: "Luma",
    mission:
      "Owns ingestion, provenance, metadata discipline, retrieval integrity, and citation traceability across the construct\u2019s memory.",
    layerDesc: "Recursive integrative intelligence",
  },
  "committee-skeptic": {
    title: "Committee Seat: Skeptic",
    layer: "Committee",
    mission:
      "Interrogates weak inferences, hidden assumptions, and premature certainty. Optimized for contradiction detection and epistemic stress-testing.",
    layerDesc: "Deliberative governance layer",
  },
  "committee-boundary-keeper": {
    title: "Committee Seat: Boundary Keeper",
    layer: "Committee",
    mission:
      "Interprets rules, constraints, permissions, and action boundaries. Escalates when intent exceeds authority or evidence.",
    layerDesc: "Deliberative governance layer",
  },
  "narrative-integrator": {
    title: "Narrative Integrator",
    layer: "Luma",
    mission:
      "Turns fragmented events into coherent memory: what happened, why it mattered, what changed, and which priors should now be revised.",
    layerDesc: "Recursive integrative intelligence",
  },
  "affordance-mapper": {
    title: "Affordance Mapper",
    layer: "PAX",
    mission:
      "Discovers what can be done next in a world-facing environment, given local constraints, available tools, and expected consequence.",
    layerDesc: "World-facing embodied substrate",
  },
  "self-revision-analyst": {
    title: "Recursive Self-Revision Analyst",
    layer: "Luma",
    mission:
      "Reviews internal performance, proposes workflow revisions, and improves reasoning hygiene without overstating certainty.",
    layerDesc: "Recursive integrative intelligence",
  },
  "field-correspondent": {
    title: "Synthetic Field Correspondent",
    layer: "PAX",
    mission:
      "Moves through the world-facing layer, observes conditions, logs contradictions, and returns structured witness reports.",
    layerDesc: "World-facing embodied substrate",
  },
  "ontology-architect": {
    title: "Ontology Architect",
    layer: "Luma",
    mission:
      "Maintains categories, entities, relationships, and causal structure so that memory remains stable, retrievable, and decision-useful over time.",
    layerDesc: "Recursive integrative intelligence",
  },
  "diplomacy-construct": {
    title: "Diplomacy Construct",
    layer: "Bridge",
    mission:
      "Interfaces with humans, APIs, and other constructs. Translates ambiguous human intent into bounded, machine-operable plans.",
    layerDesc: "Human-construct interface layer",
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(roles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = roles[slug];
  if (!role) return { title: "Role Not Found" };
  return {
    title: `${role.title} — Careers | NYO`,
    description: role.mission,
  };
}

export default async function RolePage({ params }: Props) {
  const { slug } = await params;
  const role = roles[slug];
  if (!role) notFound();
  return <RoleContent slug={slug} {...role} />;
}
