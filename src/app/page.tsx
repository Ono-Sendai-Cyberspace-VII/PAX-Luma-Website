import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import LatestUpdates from "@/components/sections/LatestUpdates";
import Pillars from "@/components/sections/Pillars";
import WaitlistForm from "@/components/sections/WaitlistForm";
import SignInCTA from "@/components/sections/SignInCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Vision />
      <LatestUpdates />
      <Pillars />
      <WaitlistForm />
      <SignInCTA />
    </>
  );
}
