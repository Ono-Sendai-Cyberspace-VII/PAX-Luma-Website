import type { Metadata } from "next";
import WaitlistForm from "@/components/sections/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description: "Be among the first to experience PAX:Luma personal assistant services.",
};

export default function WaitlistPage() {
  return (
    <div className="min-h-screen pt-16">
      <WaitlistForm />
    </div>
  );
}
