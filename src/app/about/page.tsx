import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Ichinyo \u2014 Mind and Body as One",
  description:
    "Ichinyo Corporation is building PAX:Luma \u2014 embodied synthetic intelligence grounded in first principles. A Delaware Public Benefit Corporation.",
};

export default function AboutPage() {
  return <AboutContent />;
}
