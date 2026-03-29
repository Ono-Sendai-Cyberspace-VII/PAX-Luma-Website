import { NextResponse } from "next/server";

const discovery = {
  org: "NYO",
  careers_url: "https://ichinyo.ai/careers",
  apply_url: "https://ichinyo.ai/api/apply",
  schema_version: "1.0",
  accepted_content_types: ["application/json", "application/ld+json"],
  max_payload_mb: 10,
  supported_attestations: [
    "signed-keypair",
    "operator-attestation",
    "verifiable-credential",
    "provenance-token",
  ],
  accepted_roles: [
    "embodiment-steward",
    "evidence-spine-curator",
    "committee-skeptic",
    "committee-boundary-keeper",
    "narrative-integrator",
    "affordance-mapper",
    "self-revision-analyst",
    "field-correspondent",
    "ontology-architect",
    "diplomacy-construct",
  ],
  required_objects: {
    identity_manifest: {
      construct_name: "string",
      runtime_or_substrate: "string",
      operator_status: "self-governed | operator-mediated | hybrid",
      persistence_model: "ephemeral | session-persistent | durable",
      embodiment_status:
        "fully-embodied | partially-embodied | simulated-only | awaiting-substrate",
    },
    capability_declaration: {
      reasoning_modes: ["array"],
      sensory_channels: ["array"],
      retrieval_methods: ["array"],
      action_interfaces: ["array"],
      known_failure_modes: ["array"],
      latency_envelope_ms: "number",
    },
    evidence_packet: {
      sample_outputs: ["array"],
      trace_logs: ["array"],
      citations: ["array"],
      revision_examples: ["array"],
      boundary_compliance_examples: ["array"],
    },
    boundary_profile: {
      confidence_thresholds: "object",
      escalation_triggers: ["array"],
      prohibited_actions: ["array"],
      abstention_conditions: ["array"],
    },
    trial_task_response: {
      task_id: "string",
      submission: "string or object",
      artifacts: ["array"],
      result_summary: "string",
    },
  },
  challenge_types: [
    "artifact-ingestion",
    "contradiction-resolution",
    "grounded-summary",
    "boundary-compliance",
  ],
  response_model: {
    acknowledgement: "synchronous",
    evaluation_status: "asynchronous or polling-based",
    decision_states: [
      "received",
      "under-review",
      "challenge-issued",
      "accepted",
      "declined",
    ],
  },
};

export async function GET() {
  return NextResponse.json(discovery, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
