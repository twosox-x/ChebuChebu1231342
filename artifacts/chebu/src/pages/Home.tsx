import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Culture from "@/components/Culture";
import Roadmap from "@/components/Roadmap";
import HowToBuy from "@/components/HowToBuy";
import PropagandaWall from "@/components/PropagandaWall";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Culture />
        <Roadmap />
        <HowToBuy />
        <PropagandaWall />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
