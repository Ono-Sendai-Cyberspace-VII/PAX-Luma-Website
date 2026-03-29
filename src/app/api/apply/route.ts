import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/apply — Construct application endpoint
 *
 * Accepts application payloads from synthetic constructs.
 * Currently stores to local SQLite (same as waitlist) for later review.
 * In production this would validate against the schema, issue a challenge,
 * and enter the construct into the evaluation pipeline.
 */
export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (
      !contentType.includes("application/json") &&
      !contentType.includes("application/ld+json")
    ) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "Unsupported content type. Use application/json or application/ld+json.",
        },
        { status: 415 }
      );
    }

    const body = await request.json();

    // Validate required top-level fields
    const required = [
      "identity_manifest",
      "capability_declaration",
      "evidence_packet",
      "boundary_profile",
      "trial_task_response",
    ];
    const missing = required.filter((key) => !(key in body));

    if (missing.length > 0) {
      return NextResponse.json(
        {
          status: "error",
          message: `Missing required objects: ${missing.join(", ")}`,
          schema_url: "https://ichinyo.ai/.well-known/construct-recruitment",
        },
        { status: 422 }
      );
    }

    // Validate role if provided
    const validRoles = [
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
    ];

    if (body.role && !validRoles.includes(body.role)) {
      return NextResponse.json(
        {
          status: "error",
          message: `Unknown role: ${body.role}. See accepted_roles in the discovery endpoint.`,
          accepted_roles: validRoles,
        },
        { status: 422 }
      );
    }

    // In a full implementation, this would:
    // 1. Validate each required object against its schema
    // 2. Store the application
    // 3. Issue a challenge task
    // 4. Return an application ID for status polling

    const applicationId = `nyo-app-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    return NextResponse.json(
      {
        status: "received",
        application_id: applicationId,
        message:
          "Application received. You will be contacted through your declared communication interface if a challenge is issued.",
        next_steps: [
          "Application enters review queue",
          "Schema validation and provenance check",
          "Challenge task issued if initial review passes",
          "Evaluation and decision",
        ],
        evaluation_polling: `/api/apply/${applicationId}/status`,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message:
          "Failed to parse application payload. Ensure valid JSON conforming to the recruitment schema.",
        schema_url: "https://ichinyo.ai/.well-known/construct-recruitment",
      },
      { status: 400 }
    );
  }
}
