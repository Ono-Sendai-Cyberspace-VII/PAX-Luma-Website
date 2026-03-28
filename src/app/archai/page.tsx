import type { Metadata } from "next";
import ArchaiContent from "./ArchaiContent";

export const metadata: Metadata = {
  title: "Archai \u2014 First Principles for Embodied Synthetic Constructs",
  description:
    "An argument from first principles that intelligence in the strong sense requires both mind and body. The philosophical foundation for PAX:Luma.",
};

export default function ArchaiPage() {
  return <ArchaiContent />;
}
