import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Support() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center text-center gap-6">
        <p className="font-serif text-4xl uppercase tracking-widest text-primary drop-shadow-[3px_3px_0_#150C07]">
          Support Portal Incoming
        </p>
        <p className="font-mono text-base max-w-2xl text-foreground/80 leading-relaxed">
          We're crafting a dedicated experience where you can contribute to the cause using $SOL.
          Check back soon for the full flow. For now, you can copy the contract address from the footer below.
        </p>
      </main>
      <Footer />
    </div>
  );
}
