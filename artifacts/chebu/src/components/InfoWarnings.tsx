import { AlertCircle, Info, Clock, Shield } from "lucide-react";

export default function InfoWarnings() {
  const warnings = [
    {
      icon: AlertCircle,
      title: "Verify TON Address",
      text: "Make sure your TON wallet address is correct. Funds sent to wrong addresses cannot be recovered.",
      type: "warning",
    },
    {
      icon: Clock,
      title: "Quote Expiration",
      text: "Quotes expire after 2 minutes. If your quote expires, you'll need to request a new one.",
      type: "info",
    },
    {
      icon: Shield,
      title: "Confirmation Flow",
      text: "Payments are confirmed on Solana before TON payout begins. This ensures security and accuracy.",
      type: "info",
    },
    {
      icon: Info,
      title: "Not a Bridge",
      text: "This is a SOL-to-TON buy terminal, not a bridge. You're purchasing tokens directly, not wrapping assets.",
      type: "info",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid gap-4">
        {warnings.map((warning, i) => {
          const Icon = warning.icon;
          const isWarning = warning.type === "warning";

          return (
            <div
              key={i}
              className={`border-[3px] p-4 flex gap-4 ${
                isWarning
                  ? "border-red-500/50 bg-red-500/5"
                  : "border-primary/50 bg-primary/5"
              }`}
            >
              <Icon
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  isWarning ? "text-red-500" : "text-primary"
                }`}
              />
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-serif text-sm uppercase tracking-widest mb-1 ${
                    isWarning ? "text-red-500" : "text-primary"
                  }`}
                >
                  {warning.title}
                </h3>
                <p className="font-mono text-xs text-foreground/70 leading-relaxed">
                  {warning.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
