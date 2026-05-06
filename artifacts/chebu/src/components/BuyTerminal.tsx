import { useState, useEffect } from "react";
import { Copy, Check, AlertCircle, Zap, Loader } from "lucide-react";

interface BuyTerminalProps {
  onStatusChange?: (status: string) => void;
}

export default function BuyTerminal({ onStatusChange }: BuyTerminalProps) {
  const [solAmount, setSolAmount] = useState("1.0");
  const [paymentToken, setPaymentToken] = useState<"sol" | "usdc">("sol");
  const [tonWallet, setTonWallet] = useState("");
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [quoteTime, setQuoteTime] = useState(120);
  const [tonWalletValid, setTonWalletValid] = useState<boolean | null>(null);

  // Dummy quote calculation
  const estimatedTokens = parseFloat(solAmount || "0") * 10000;

  // Quote timer countdown
  useEffect(() => {
    if (quoteTime <= 0) return;
    const timer = setInterval(() => setQuoteTime(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [quoteTime]);

  // Validate TON wallet (dummy validation)
  useEffect(() => {
    if (!tonWallet) {
      setTonWalletValid(null);
      return;
    }
    // Dummy validation: TON addresses start with 0Q or UQ and are ~48 chars
    const isValid = (tonWallet.startsWith("0Q") || tonWallet.startsWith("UQ")) && tonWallet.length >= 45;
    setTonWalletValid(isValid);
  }, [tonWallet]);

  const handleConnectWallet = () => {
    setIsLoading(true);
    setTimeout(() => {
      setConnectedWallet("Phantom...8x9K");
      setIsLoading(false);
      onStatusChange?.("wallet_connected");
    }, 800);
  };

  const handleDisconnect = () => {
    setConnectedWallet(null);
    onStatusChange?.("wallet_disconnected");
  };

  const handleBuy = () => {
    if (!connectedWallet || !tonWallet || !tonWalletValid) return;
    setIsLoading(true);
    onStatusChange?.("payment_pending");
    setTimeout(() => {
      setIsLoading(false);
      onStatusChange?.("payment_confirmed");
    }, 2000);
  };

  const handleCopyWallet = () => {
    navigator.clipboard.writeText(connectedWallet || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-background border-[4px] border-foreground shadow-[8px_8px_0_0_#150C07] overflow-hidden">
        {/* Header */}
        <div className="bg-primary border-b-[3px] border-foreground px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl uppercase text-primary-foreground tracking-widest">
              Buy Terminal
            </h2>
            <div className="flex items-center gap-2 bg-primary-foreground/20 px-3 py-1 rounded border border-primary-foreground/40">
              <Zap className="w-3 h-3 text-primary-foreground" />
              <span className="font-mono text-xs text-primary-foreground">LIVE</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Wallet Connection */}
          <div className="space-y-3">
            <label className="block font-serif text-sm uppercase tracking-widest text-foreground">
              Phantom Wallet
            </label>
            {!connectedWallet ? (
              <button
                onClick={handleConnectWallet}
                disabled={isLoading}
                className="w-full py-3 bg-primary text-primary-foreground border-[3px] border-foreground font-serif uppercase tracking-widest text-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  "Connect Phantom"
                )}
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-foreground/5 border-[2px] border-primary p-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <code className="font-mono text-sm flex-1">{connectedWallet}</code>
                <button
                  onClick={handleCopyWallet}
                  className="p-2 hover:bg-foreground/10 transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4 text-foreground/60" />
                  )}
                </button>
                <button
                  onClick={handleDisconnect}
                  className="px-3 py-1 text-xs font-mono uppercase border border-foreground/30 hover:bg-foreground/5 transition-colors"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>

          {/* Payment Token Selection */}
          <div className="space-y-3">
            <label className="block font-serif text-sm uppercase tracking-widest text-foreground">
              Pay With
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["sol", "usdc"] as const).map((token) => (
                <button
                  key={token}
                  onClick={() => setPaymentToken(token)}
                  className={`py-2 border-[2px] font-serif uppercase tracking-widest text-sm transition-all ${
                    paymentToken === token
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-foreground/30 text-foreground/60 hover:border-foreground"
                  }`}
                >
                  ${token.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-3">
            <label className="block font-serif text-sm uppercase tracking-widest text-foreground">
              Amount ({paymentToken.toUpperCase()})
            </label>
            <div className="relative">
              <input
                type="number"
                value={solAmount}
                onChange={(e) => setSolAmount(e.target.value)}
                disabled={!connectedWallet}
                placeholder="0.00"
                className="w-full px-4 py-3 bg-foreground/5 border-[2px] border-foreground font-mono text-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-primary"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-sm text-foreground/60">
                {paymentToken.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Quote Info */}
          <div className="bg-foreground/5 border-[2px] border-foreground/30 p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-foreground/70">Estimated Output</span>
              <span className="font-serif text-lg font-bold text-primary">
                {estimatedTokens.toLocaleString()} CHEBU
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-foreground/70">Quote Expires</span>
              <span className={`font-mono text-sm font-bold ${quoteTime < 30 ? "text-red-500" : "text-primary"}`}>
                {formatTime(quoteTime)}
              </span>
            </div>
          </div>

          {/* TON Wallet Address */}
          <div className="space-y-3">
            <label className="block font-serif text-sm uppercase tracking-widest text-foreground">
              TON Wallet Address
            </label>
            <div className="relative">
              <input
                type="text"
                value={tonWallet}
                onChange={(e) => setTonWallet(e.target.value)}
                disabled={!connectedWallet}
                placeholder="0Q... or UQ..."
                className={`w-full px-4 py-3 bg-foreground/5 border-[2px] font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none transition-colors ${
                  tonWalletValid === null
                    ? "border-foreground"
                    : tonWalletValid
                      ? "border-primary"
                      : "border-red-500"
                }`}
              />
              {tonWalletValid !== null && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  {tonWalletValid ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {tonWalletValid === false && (
              <p className="text-xs text-red-500 font-mono">Invalid TON address format</p>
            )}
          </div>

          {/* Main CTA */}
          <button
            onClick={handleBuy}
            disabled={!connectedWallet || !tonWalletValid || isLoading}
            className="w-full py-4 bg-primary text-primary-foreground border-[3px] border-foreground font-serif uppercase tracking-widest text-base shadow-[4px_4px_0_#150C07] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Buy with Phantom
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
