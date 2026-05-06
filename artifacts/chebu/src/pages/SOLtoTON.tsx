import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuyTerminal from "@/components/BuyTerminal";
import OrderStatusTracker from "@/components/OrderStatusTracker";
import LiveChartDummy from "@/components/LiveChartDummy";
import RecentActivityFeed from "@/components/RecentActivityFeed";
import InfoWarnings from "@/components/InfoWarnings";
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
        {/* Compact Hero */}
        <div className="border-b-[4px] border-foreground bg-background py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 border-[2px] border-foreground mb-3 shadow-[2px_2px_0_0_#150C07]">
                  <Zap className="w-3 h-3" />
                  <span className="font-mono text-xs uppercase tracking-widest">Beta Terminal</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif uppercase leading-tight tracking-tight">
                  <span className="text-primary drop-shadow-[3px_3px_0_#17110D]">SOL → TON </span>
                  <span className="drop-shadow-[2px_2px_0_hsl(352_81%_38%_/_0.4)]">Buy Terminal</span>
                </h1>
              </div>
              <p className="font-mono text-sm text-foreground/70 max-w-md">
                Connect Phantom, pay with SOL, receive tokens on TON.
              </p>
            </div>
          </div>
        </div>

        {/* Main Terminal Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
            {/* Left Side - Terminal + Chart */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <BuyTerminal onStatusChange={handleStatusChange} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <LiveChartDummy />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <InfoWarnings />
              </motion.div>
            </div>

            {/* Right Sidebar - Status + Activity */}
            <div className="space-y-6">
              {showOrderTracker && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <OrderStatusTracker status={orderStatus} />
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <RecentActivityFeed />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
