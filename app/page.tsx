import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Committees from "@/components/Committees";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <Benefits />
      <Committees />
    </main>
  );
}
