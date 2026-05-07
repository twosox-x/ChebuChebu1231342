import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuyTerminal from "@/components/BuyTerminal";
import OrderStatusTracker from "@/components/OrderStatusTracker";
import SwapInfo from "@/components/SwapInfo";
import { Zap } from "lucide-react";

type OrderStatus = "waiting" | "sol_pending" | "sol_confirmed" | "ton_queued" | "ton_sent";

export default function SOLtoTON() {
  const [orderStatus, setOrderStatus] = useState<OrderStatus>("waiting");
  const [showOrderTracker, setShowOrderTracker] = useState(false);

  const handleStatusChange = (status: string) => {
    if (status === "payment_pending") {
      setShowOrderTracker(true);
      setOrderStatus("sol_pending");
      setTimeout(() => setOrderStatus("sol_confirmed"), 3000);
      setTimeout(() => setOrderStatus("ton_queued"), 6000);
      setTimeout(() => setOrderStatus("ton_sent"), 9000);
    } else if (status === "wallet_connected") {
      setShowOrderTracker(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Refined Hero Section */}
        <div className="relative pt-14 border-b-[4px] border-primary bg-gradient-to-br from-background via-background to-card overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,_transparent,_transparent_10px,_hsl(352_81%_38%)_10px,_hsl(352_81%_38%)_11px)]" />
          </div>

          <div className="container mx-auto px-4 py-8 md:py-10 lg:py-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto"
            >
              {/* Top badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 border-[2px] border-foreground shadow-[3px_3px_0_0_#17110D]">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Beta Terminal</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-card text-foreground px-3 py-1.5 border-[2px] border-primary/30">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-wide">Live</span>
                </div>
              </div>

              {/* Main heading */}
              <div className="mb-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif uppercase leading-none tracking-tight mb-3">
                  <span className="inline-flex items-center gap-2 md:gap-3">
                    <span className="text-primary text-2xl sm:text-3xl md:text-4xl">★</span>
                    <span className="text-primary drop-shadow-[3px_3px_0_#17110D]">SOL</span>
                  </span>
                  <br />
                  <span className="inline-flex items-center gap-2 md:gap-3 mt-1">
                    <span className="text-foreground drop-shadow-[2px_2px_0_hsl(352_81%_38%_/_0.3)]">→ TON</span>
                    <span className="text-primary text-2xl sm:text-3xl md:text-4xl">★</span>
                  </span>
                </h1>
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1.5 border-[2px] border-foreground shadow-[3px_3px_0_0_#17110D] -rotate-1">
                  <span className="font-serif text-base md:text-lg uppercase tracking-widest">Buy Terminal</span>
                </div>
              </div>

              {/* Description */}
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4 md:gap-6 items-start">
                <div className="space-y-2.5">
                  <p className="font-mono text-sm md:text-base text-foreground leading-relaxed">
                    Revolutionary cross-chain swap terminal. Connect your Phantom wallet, pay with SOL, receive $CHEBU on TON.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-block bg-card border-[2px] border-primary/30 px-2.5 py-1 font-mono text-[10px] uppercase">
                      Instant Swap
                    </span>
                    <span className="inline-block bg-card border-[2px] border-primary/30 px-2.5 py-1 font-mono text-[10px] uppercase">
                      No KYC
                    </span>
                    <span className="inline-block bg-card border-[2px] border-primary/30 px-2.5 py-1 font-mono text-[10px] uppercase">
                      Direct to LP
                    </span>
                  </div>
                </div>

                {/* Stats box */}
                <div className="bg-card border-[3px] border-primary p-3 shadow-[4px_4px_0_0_#17110D]">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="font-mono text-[10px] text-foreground/60 uppercase mb-0.5">Total Swaps</div>
                      <div className="font-serif text-xl text-primary">1,337</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-foreground/60 uppercase mb-0.5">Volume</div>
                      <div className="font-serif text-xl text-primary">$42K</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-foreground/60 uppercase mb-0.5">Avg Time</div>
                      <div className="font-serif text-xl text-primary">~2min</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-foreground/60 uppercase mb-0.5">Success Rate</div>
                      <div className="font-serif text-xl text-green-500">99.8%</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-8 lg:py-10">
          <div className="max-w-7xl mx-auto">
            {/* Two-column layout: Terminal + Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Left Column: Buy Terminal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:sticky lg:top-20"
              >
                <BuyTerminal onStatusChange={handleStatusChange} />

                {/* Order Status Tracker (conditional) - below terminal */}
                {showOrderTracker && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6"
                  >
                    <OrderStatusTracker status={orderStatus} />
                  </motion.div>
                )}
              </motion.div>

              {/* Right Column: Swap Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <SwapInfo />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
