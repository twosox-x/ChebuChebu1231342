import { CheckCircle, Clock, AlertCircle } from "lucide-react";

type OrderStatus = "waiting" | "sol_pending" | "sol_confirmed" | "ton_queued" | "ton_sent";

interface OrderStatusTrackerProps {
  status: OrderStatus;
  solTxHash?: string;
  tonTxHash?: string;
  orderId?: string;
}

const STEPS: { id: OrderStatus; label: string; description: string }[] = [
  { id: "waiting", label: "Waiting", description: "Awaiting Phantom" },
  { id: "sol_pending", label: "SOL Pending", description: "Payment processing" },
  { id: "sol_confirmed", label: "SOL Confirmed", description: "Payment verified" },
  { id: "ton_queued", label: "TON Queued", description: "Payout queued" },
  { id: "ton_sent", label: "TON Sent", description: "Tokens delivered" },
];

export default function OrderStatusTracker({
  status,
  solTxHash = "5Uj9k...x2Lm",
  tonTxHash = "0QA7x...9mK2",
  orderId = "ORD-2024-001",
}: OrderStatusTrackerProps) {
  const currentStepIndex = STEPS.findIndex((s) => s.id === status);

  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStepIndex) return "completed";
    if (stepIndex === currentStepIndex) return "active";
    return "pending";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-background border-[4px] border-foreground shadow-[8px_8px_0_0_#150C07] overflow-hidden">
        {/* Header */}
        <div className="bg-secondary border-b-[3px] border-foreground px-6 py-4">
          <h2 className="font-serif text-2xl uppercase text-secondary-foreground tracking-widest">
            Order Status
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Order ID */}
          <div className="flex justify-between items-center pb-4 border-b-[2px] border-foreground/20">
            <span className="font-mono text-xs text-foreground/70 uppercase">Order ID</span>
            <code className="font-mono text-sm font-bold text-primary">{orderId}</code>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {STEPS.map((step, index) => {
              const stepStatus = getStepStatus(index);
              const isActive = stepStatus === "active";
              const isCompleted = stepStatus === "completed";

              return (
                <div key={step.id} className="space-y-2">
                  <div className="flex items-start gap-4">
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {isCompleted ? (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-primary-foreground" />
                        </div>
                      ) : isActive ? (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse">
                          <Clock className="w-4 h-4 text-primary-foreground" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 border-2 border-foreground/30 rounded-full" />
                      )}
                    </div>

                    {/* Step Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-serif uppercase tracking-widest text-sm ${
                            isActive ? "text-primary font-bold" : isCompleted ? "text-foreground" : "text-foreground/50"
                          }`}
                        >
                          {step.label}
                        </h3>
                        {isActive && (
                          <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </div>
                      <p className="font-mono text-xs text-foreground/60 mt-1">{step.description}</p>
                    </div>
                  </div>

                  {/* Progress Line */}
                  {index < STEPS.length - 1 && (
                    <div className="ml-3 h-6 border-l-2 border-foreground/20" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Transaction Details */}
          <div className="space-y-3 pt-4 border-t-[2px] border-foreground/20">
            <h3 className="font-serif text-sm uppercase tracking-widest text-foreground">
              Transaction Details
            </h3>

            <div className="space-y-2 bg-foreground/5 border-[2px] border-foreground/20 p-4">
              <div className="flex justify-between items-start gap-2">
                <span className="font-mono text-xs text-foreground/70">SOL TX Hash</span>
                <code className="font-mono text-xs text-right text-primary break-all">{solTxHash}</code>
              </div>
              <div className="flex justify-between items-start gap-2">
                <span className="font-mono text-xs text-foreground/70">TON TX Hash</span>
                <code className="font-mono text-xs text-right text-primary break-all">{tonTxHash}</code>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 bg-primary/10 border-[2px] border-primary p-3">
            {status === "ton_sent" ? (
              <>
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-serif text-sm uppercase tracking-widest text-primary">
                  Order Complete
                </span>
              </>
            ) : (
              <>
                <Clock className="w-5 h-5 text-primary flex-shrink-0 animate-spin" />
                <span className="font-serif text-sm uppercase tracking-widest text-primary">
                  Processing...
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
