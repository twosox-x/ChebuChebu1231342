import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Culture from "@/components/Culture";
import Roadmap from "@/components/Roadmap";
import HowToBuy from "@/components/HowToBuy";
import PropagandaWall from "@/components/PropagandaWall";
import Community from "@/components/Community";
import Stickers from "@/components/Stickers";
import Footer from "@/components/Footer";
import SupportModal from "@/components/SupportModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SupportModal />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Culture />
        <Roadmap />
        <HowToBuy />
        <PropagandaWall />
        <Community />
        <Stickers />
      </main>
      <Footer />
    </div>
  );
}
