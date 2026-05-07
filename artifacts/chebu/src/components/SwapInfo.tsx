import { motion } from "framer-motion";
import { Zap, Shield, Clock } from "lucide-react";

export default function SwapInfo() {
  const recentSwaps = [
    { from: "1.9 JOOBI", to: "3,151.9 JOOBI", time: "1s ago" },
    { from: "10 USDT", to: "3,151.9 JOOBI", time: "1s ago" },
    { from: "10 USDT", to: "3,151.9 JOOBI", time: "1s ago" },
    { from: "10 USDT", to: "3,151.9 JOOBI", time: "1s ago" },
  ];

  const steps = [
    {
      icon: Zap,
      title: "Set your swap",
      description: "Enter the amount, choose tokens, and paste your TON address. Get an instant quote.",
    },
    {
      icon: Shield,
      title: "Send funds",
      description: "Deposit your Solana tokens to the generated address. Funds touch our system for under 90s.",
    },
    {
      icon: Clock,
      title: "Receive on TON",
      description: "We bridge via ChangeNow and swap on DeDust DEX. Tokens arrive in your TON wallet in ~2 minutes.",
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-card border-[2px] border-primary/30 p-3">
          <div className="font-mono text-[10px] text-foreground/60 uppercase mb-0.5">Avg. Settlement</div>
          <div className="font-serif text-xl text-primary">~90s</div>
        </div>
        <div className="bg-card border-[2px] border-primary/30 p-3">
          <div className="font-mono text-[10px] text-foreground/60 uppercase mb-0.5">Wallet Connect</div>
          <div className="font-serif text-xl text-foreground">None</div>
        </div>
        <div className="bg-card border-[2px] border-primary/30 p-3">
          <div className="font-mono text-[10px] text-foreground/60 uppercase mb-0.5">Custody</div>
          <div className="font-serif text-xl text-foreground">Ephemeral</div>
        </div>
        <div className="bg-card border-[2px] border-primary/30 p-3">
          <div className="font-mono text-[10px] text-foreground/60 uppercase mb-0.5">Swaps Completed</div>
          <div className="font-serif text-xl text-primary">3</div>
        </div>
      </div>

      {/* Recent Swaps */}
      <div className="bg-card border-[3px] border-primary shadow-[4px_4px_0_0_#17110D] overflow-hidden">
        <div className="bg-primary border-b-[3px] border-foreground px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <h3 className="font-serif text-base uppercase text-primary-foreground tracking-widest">
              Recent swaps
            </h3>
          </div>
        </div>
        <div className="p-3">
          <div className="space-y-2">
            {recentSwaps.map((swap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 p-2 bg-background border-[2px] border-foreground/20 hover:border-primary/50 transition-colors"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                  T
                </div>
                <span className="font-mono text-xs">{swap.from}</span>
                <div className="flex-1 flex items-center justify-center min-w-0">
                  <div className="h-[1px] flex-1 bg-primary/30" />
                  <span className="px-1 text-primary text-sm">→</span>
                  <div className="h-[1px] flex-1 bg-primary/30" />
                </div>
                <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-[10px] font-bold flex-shrink-0">
                  C
                </div>
                <span className="font-mono text-xs">{swap.to}</span>
                <span className="font-mono text-[10px] text-foreground/60 ml-auto">{swap.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div>
        <h2 className="font-serif text-2xl md:text-3xl uppercase text-primary mb-4 md:mb-6 tracking-widest flex items-center gap-2 md:gap-3">
          <span className="text-xl md:text-2xl">★</span>
          How it works
          <span className="text-xl md:text-2xl">★</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-card border-[3px] border-primary p-4 shadow-[4px_4px_0_0_#17110D]"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-3 border-[2px] border-foreground">
                <step.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-lg uppercase text-foreground mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="font-mono text-xs text-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
