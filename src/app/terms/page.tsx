import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service — Ichinyo Corporation",
  description:
    "Terms of Service governing your use of ichinyo.ai and PAX:Luma services, provided by Ichinyo Corporation, a Delaware public benefit corporation.",
};

export default function TermsPage() {
  return <TermsContent />;
}
