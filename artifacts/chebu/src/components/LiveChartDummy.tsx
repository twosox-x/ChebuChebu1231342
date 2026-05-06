import { TrendingUp, BarChart3 } from "lucide-react";

export default function LiveChartDummy() {
  // Dummy chart data - simple SVG visualization
  const chartPoints = [
    { x: 0, y: 60 },
    { x: 20, y: 45 },
    { x: 40, y: 55 },
    { x: 60, y: 35 },
    { x: 80, y: 50 },
    { x: 100, y: 40 },
    { x: 120, y: 65 },
    { x: 140, y: 55 },
    { x: 160, y: 70 },
    { x: 180, y: 60 },
    { x: 200, y: 75 },
  ];

  const pathData = chartPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-background border-[4px] border-foreground shadow-[8px_8px_0_0_#150C07] overflow-hidden">
        {/* Header */}
        <div className="bg-secondary border-b-[3px] border-foreground px-6 py-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl uppercase text-secondary-foreground tracking-widest">
            Live Chart
          </h2>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <TrendingUp className="w-5 h-5" />
            <span className="font-mono text-sm">+12.5%</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Chart */}
          <div className="bg-foreground/5 border-[2px] border-foreground/20 p-4 rounded">
            <svg viewBox="0 0 200 80" className="w-full h-48" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={`grid-${y}`}
                  x1="0"
                  y1={y}
                  x2="200"
                  y2={y}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.1"
                  className="text-foreground"
                />
              ))}

              {/* Chart line */}
              <path
                d={pathData}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
              />

              {/* Fill under line */}
              <path
                d={`${pathData} L 200 80 L 0 80 Z`}
                fill="currentColor"
                opacity="0.1"
                className="text-primary"
              />
            </svg>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-foreground/5 border-[2px] border-foreground/20 p-4">
              <p className="font-mono text-xs text-foreground/70 uppercase mb-2">Current Price</p>
              <p className="font-serif text-2xl font-bold text-primary">$0.0042</p>
              <p className="font-mono text-xs text-primary mt-1">+2.1% (24h)</p>
            </div>

            <div className="bg-foreground/5 border-[2px] border-foreground/20 p-4">
              <p className="font-mono text-xs text-foreground/70 uppercase mb-2">24h Volume</p>
              <p className="font-serif text-2xl font-bold text-primary">$842K</p>
              <p className="font-mono text-xs text-primary mt-1">SOL Absorbed</p>
            </div>

            <div className="bg-foreground/5 border-[2px] border-foreground/20 p-4">
              <p className="font-mono text-xs text-foreground/70 uppercase mb-2">TON Liquidity</p>
              <p className="font-serif text-2xl font-bold text-primary">2.4M</p>
              <p className="font-mono text-xs text-primary mt-1">Injected</p>
            </div>

            <div className="bg-foreground/5 border-[2px] border-foreground/20 p-4">
              <p className="font-mono text-xs text-foreground/70 uppercase mb-2">Market Cap</p>
              <p className="font-serif text-2xl font-bold text-primary">$420M</p>
              <p className="font-mono text-xs text-primary mt-1">All Time High</p>
            </div>
          </div>

          {/* Recent Buys */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <h3 className="font-serif text-sm uppercase tracking-widest text-foreground">
                Recent Buys
              </h3>
            </div>

            <div className="space-y-2 bg-foreground/5 border-[2px] border-foreground/20 p-4 max-h-48 overflow-y-auto">
              {[
                { wallet: "Phantom...x9K2", amount: "5.2 SOL", tokens: "52,000", time: "2m ago" },
                { wallet: "Phantom...m4L7", amount: "2.1 USDC", tokens: "21,000", time: "5m ago" },
                { wallet: "Phantom...p8Q1", amount: "10.0 SOL", tokens: "100,000", time: "8m ago" },
                { wallet: "Phantom...r3N9", amount: "3.5 SOL", tokens: "35,000", time: "12m ago" },
                { wallet: "Phantom...s2M6", amount: "7.8 USDC", tokens: "78,000", time: "15m ago" },
              ].map((buy, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 px-2 border-b border-foreground/10 last:border-0 hover:bg-foreground/5 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs text-primary truncate">{buy.wallet}</p>
                    <p className="font-mono text-xs text-foreground/60">{buy.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-xs font-bold text-foreground">{buy.tokens}</p>
                    <p className="font-mono text-xs text-foreground/60">{buy.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
