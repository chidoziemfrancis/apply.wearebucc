import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Committees from "@/components/Committees";
import ApplicationProcess from "@/components/ApplicationProcess";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Benefits />
      <Committees />
      <ApplicationProcess />
      <CTA />
    </main>
  );
}
