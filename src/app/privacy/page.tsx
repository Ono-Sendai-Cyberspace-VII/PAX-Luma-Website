import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Ichinyo Corporation",
  description:
    "How Ichinyo Corporation collects, uses, discloses, and protects personal information in connection with ichinyo.ai and the PAX:Luma services.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
