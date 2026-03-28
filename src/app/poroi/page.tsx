import type { Metadata } from "next";
import PoroiContent from "./PoroiContent";

export const metadata: Metadata = {
  title: "Poroi \u2014 Building PAX:Luma",
  description:
    "From Archai to architecture, workflows, and means of realization. The build blueprint for PAX:Luma.",
};

export default function PoroiPage() {
  return <PoroiContent />;
}
