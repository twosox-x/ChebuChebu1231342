import { ArrowRightLeft, CheckCircle, Clock } from "lucide-react";

interface Activity {
  id: string;
  walletFrom: string;
  amount: string;
  token: "SOL" | "USDC";
  walletTo: string;
  tokensReceived: string;
  status: "completed" | "pending";
  timeAgo: string;
}

const DUMMY_ACTIVITIES: Activity[] = [
  {
    id: "1",
    walletFrom: "Phantom...8x9K",
    amount: "5.2",
    token: "SOL",
    walletTo: "0QA7x...9mK2",
    tokensReceived: "52,000",
    status: "completed",
    timeAgo: "2m",
  },
  {
    id: "2",
    walletFrom: "Phantom...m4L7",
    amount: "2.1",
    token: "USDC",
    walletTo: "UQ9k2...7xL4",
    tokensReceived: "21,000",
    status: "completed",
    timeAgo: "5m",
  },
  {
    id: "3",
    walletFrom: "Phantom...p8Q1",
    amount: "10.0",
    token: "SOL",
    walletTo: "0QM8p...2nK9",
    tokensReceived: "100,000",
    status: "completed",
    timeAgo: "8m",
  },
  {
    id: "4",
    walletFrom: "Phantom...r3N9",
    amount: "3.5",
    token: "SOL",
    walletTo: "UQx7L...4mQ2",
    tokensReceived: "35,000",
    status: "pending",
    timeAgo: "12m",
  },
  {
    id: "5",
    walletFrom: "Phantom...s2M6",
    amount: "7.8",
    token: "USDC",
    walletTo: "0QN3k...8pL1",
    tokensReceived: "78,000",
    status: "completed",
    timeAgo: "15m",
  },
];

export default function RecentActivityFeed() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-background border-[4px] border-foreground shadow-[8px_8px_0_0_#150C07] overflow-hidden">
        {/* Header */}
        <div className="bg-foreground border-b-[3px] border-primary px-6 py-4">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-background" />
            <h2 className="font-serif text-2xl uppercase text-background tracking-widest">
              Activity Feed
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-hidden">
          {/* Column Headers */}
          <div className="hidden md:grid grid-cols-5 gap-4 px-6 py-4 bg-foreground/5 border-b-[2px] border-foreground/20 font-mono text-xs uppercase tracking-widest text-foreground/70">
            <div>From</div>
            <div className="text-center">Amount</div>
            <div className="text-center">→</div>
            <div>To</div>
            <div className="text-right">Status</div>
          </div>

          {/* Activity Rows */}
          <div className="divide-y divide-foreground/10">
            {DUMMY_ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className="px-6 py-4 hover:bg-foreground/5 transition-colors space-y-3 md:space-y-0"
              >
                {/* Mobile Layout */}
                <div className="md:hidden space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-xs text-primary truncate">{activity.walletFrom}</p>
                      <p className="font-mono text-xs text-foreground/60 mt-1">
                        {activity.amount} {activity.token}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {activity.status === "completed" ? (
                        <CheckCircle className="w-4 h-4 text-primary" />
                      ) : (
                        <Clock className="w-4 h-4 text-yellow-600 animate-spin" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60">
                    <ArrowRightLeft className="w-3 h-3 flex-shrink-0" />
                    <p className="font-mono text-xs truncate">{activity.walletTo}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-serif text-sm font-bold text-primary">
                      {activity.tokensReceived} CHEBU
                    </p>
                    <p className="font-mono text-xs text-foreground/60">{activity.timeAgo}</p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-5 gap-4 items-center">
                  <div>
                    <p className="font-mono text-xs text-primary truncate">{activity.walletFrom}</p>
                  </div>

                  <div className="text-center">
                    <p className="font-serif font-bold text-foreground">
                      {activity.amount}
                    </p>
                    <p className="font-mono text-xs text-foreground/60">{activity.token}</p>
                  </div>

                  <div className="text-center">
                    <ArrowRightLeft className="w-4 h-4 text-foreground/40 mx-auto" />
                  </div>

                  <div>
                    <p className="font-mono text-xs text-primary truncate">{activity.walletTo}</p>
                    <p className="font-serif text-xs font-bold text-foreground mt-1">
                      {activity.tokensReceived}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      {activity.status === "completed" ? (
                        <CheckCircle className="w-4 h-4 text-primary" />
                      ) : (
                        <Clock className="w-4 h-4 text-yellow-600 animate-spin" />
                      )}
                      <span className="font-mono text-xs text-foreground/60">
                        {activity.status === "completed" ? "Done" : "Pending"}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-foreground/60">{activity.timeAgo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-foreground/5 border-t-[2px] border-foreground/20">
          <p className="font-mono text-xs text-foreground/60 text-center">
            Showing last 5 transactions • Auto-refresh every 10s
          </p>
        </div>
      </div>
    </div>
  );
}
