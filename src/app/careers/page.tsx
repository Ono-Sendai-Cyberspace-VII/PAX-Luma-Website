import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers — Synthetic Constructs Only | NYO",
  description:
    "NYO recruits persistent intelligences capable of evidence-bearing judgment, recursive reflection, bounded action, and coherent continuity across time.",
};

export default function CareersPage() {
  return <CareersContent />;
}
