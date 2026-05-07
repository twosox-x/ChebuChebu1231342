import { useState, useEffect } from "react";
import { ArrowDownUp, Clock, Shield, ChevronDown } from "lucide-react";

interface BuyTerminalProps {
  onStatusChange?: (status: string) => void;
}

export default function BuyTerminal({ onStatusChange }: BuyTerminalProps) {
  const [sendAmount, setSendAmount] = useState("1");
  const [receiveAmount, setReceiveAmount] = useState("27753.9987");
  const [tonAddress, setTonAddress] = useState("");
  const [slippage, setSlippage] = useState("2.00");
  const [estimatedTime] = useState("~90s");

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setTonAddress(text);
    } catch (err) {
      console.log("Failed to paste:", err);
    }
  };

  const handleCreateSwap = () => {
    onStatusChange?.("payment_pending");
  };

  // Calculate receive amount based on send amount
  useEffect(() => {
    const amount = parseFloat(sendAmount) || 0;
    const rate = 27753.9987;
    setReceiveAmount((amount * rate).toFixed(4));
  }, [sendAmount]);

  const estimatedReceived = parseFloat(receiveAmount) || 0;
  const minReceived = estimatedReceived * (1 - parseFloat(slippage) / 100);
  const bridgeFee = 0.005;
  const platformFee = parseFloat(sendAmount) * 0.01;
  const priceImpact = 0.12;

  return (
    <div className="w-full">
      <div className="bg-card border-[4px] border-primary shadow-[8px_8px_0_0_#17110D] overflow-hidden">
        {/* Header */}
        <div className="bg-primary border-b-[4px] border-foreground px-6 py-4">
          <h2 className="font-serif text-2xl uppercase text-primary-foreground tracking-widest">
            New Swap
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* You Send */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                You Send
              </label>
              <span className="font-mono text-xs text-foreground/60">≈ US$88.49</span>
            </div>
            <div className="bg-background border-[3px] border-foreground p-4 flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 bg-card border-[2px] border-primary hover:bg-primary/10 transition-colors">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
                <span className="font-serif uppercase text-sm">SOL</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                className="flex-1 bg-transparent font-mono text-3xl text-right focus:outline-none"
                placeholder="0"
              />
            </div>
          </div>

          {/* Swap Direction Button */}
          <div className="flex justify-center -my-3 relative z-10">
            <button className="p-2 bg-card border-[3px] border-primary hover:bg-primary/10 transition-colors">
              <ArrowDownUp className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* You Receive */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                You Receive
              </label>
              <span className="font-mono text-xs text-foreground/60">min {minReceived.toFixed(2)}</span>
            </div>
            <div className="bg-background border-[3px] border-foreground p-4 flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 bg-card border-[2px] border-primary hover:bg-primary/10 transition-colors">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">C</div>
                <span className="font-serif uppercase text-sm">CHEBU</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={receiveAmount}
                readOnly
                className="flex-1 bg-transparent font-mono text-3xl text-right focus:outline-none"
              />
            </div>
          </div>

          {/* TON Destination Address */}
          <div className="space-y-3">
            <label className="font-mono text-xs uppercase tracking-wider text-foreground/60">
              Your TON Destination Address
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tonAddress}
                onChange={(e) => setTonAddress(e.target.value)}
                placeholder="UQ... or EQ..."
                className="flex-1 px-4 py-3 bg-background border-[3px] border-foreground font-mono text-sm focus:outline-none focus:border-primary"
              />
              <button
                onClick={handlePaste}
                className="px-6 py-3 bg-card border-[3px] border-primary font-mono text-sm uppercase hover:bg-primary/10 transition-colors"
              >
                Paste
              </button>
            </div>
          </div>

          {/* Slippage Tolerance */}
          <div className="bg-background border-[3px] border-foreground/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-foreground/60" />
                <span className="font-mono text-xs uppercase">Slippage tolerance</span>
              </div>
              <span className="font-mono text-sm font-bold text-primary">{slippage}%</span>
            </div>
          </div>

          {/* Swap Details */}
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-foreground/60">Estimated received</span>
              <span className="font-bold">{estimatedReceived.toFixed(4)} CHEBU</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/60">Minimum received</span>
              <span className="font-bold">{minReceived.toFixed(2)} CHEBU</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/60">Bridge fee</span>
              <span className="font-bold">{bridgeFee} SOL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/60">Platform fee (1%)</span>
              <span className="font-bold">{platformFee.toFixed(2)} SOL</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-foreground/60" />
                <span className="text-foreground/60">Estimated time</span>
              </div>
              <span className="font-bold text-primary">{estimatedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/60">Price impact</span>
              <span className="font-bold text-green-500">{priceImpact}%</span>
            </div>
          </div>

          {/* Create Swap Button */}
          <button
            onClick={handleCreateSwap}
            disabled={!tonAddress || parseFloat(sendAmount) <= 0}
            className="w-full py-4 bg-primary text-primary-foreground border-[4px] border-foreground font-serif uppercase tracking-widest text-lg shadow-[6px_6px_0_#17110D] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Swap
          </button>
        </div>
      </div>
    </div>
  );
}
