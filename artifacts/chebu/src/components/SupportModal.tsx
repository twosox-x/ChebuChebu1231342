import { useEffect, useState } from "react";
import { Copy, Check, ArrowUpRight, X } from "lucide-react";
import { Link } from "wouter";
import solanaArt from "@assets/Solana.png";
import { useI18n } from "@/lib/i18n";

const CONTRIBUTION_CA = "EQAa...placeholder...ZXU";

export default function SupportModal() {
  const { t } = useI18n();
  const [render, setRender] = useState(false);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setRender(true);
      requestAnimationFrame(() => setVisible(true));
    }, 900);
    return () => clearTimeout(delayTimer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRIBUTION_CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setRender(false), 350);
  };

  if (!render) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`relative max-w-5xl w-full bg-background text-foreground border-[6px] border-foreground shadow-[14px_14px_0_#150C07] overflow-hidden transition-all duration-500 ease-out ${
          visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
        }`}
      >

        <div className="grid lg:grid-cols-2">
          <div className="p-8 lg:p-10 space-y-6">
            <div className="flex justify-end">
              <button
                aria-label="Close announcement"
                onClick={handleClose}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-[40px] uppercase leading-tight text-primary drop-shadow-[3px_3px_0_#150C07]">
                {t.supportModal.headline}
              </p>
              <p className="font-mono text-sm md:text-base mt-4 text-foreground/80 leading-relaxed">
                {t.supportModal.body}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/SOLtoTON">
                <a
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground border-[3px] border-foreground uppercase font-serif tracking-widest text-sm shadow-[4px_4px_0_#150C07] hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
                  onClick={handleClose}
                >
                  {t.supportModal.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Link>
              <button
                onClick={handleClose}
                className="px-5 py-3 border-[3px] border-foreground bg-background text-foreground uppercase font-serif tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                {t.supportModal.close}
              </button>
            </div>

            <div className="bg-background border-[4px] border-primary shadow-[6px_6px_0_#150C07] flex items-stretch max-w-md w-full">
              <div className="bg-primary text-primary-foreground font-serif uppercase tracking-widest px-4 flex items-center justify-center text-xs border-r-[3px] border-foreground">
                CA
              </div>
              <code className="font-mono text-xs sm:text-sm font-bold flex-1 px-4 py-3 truncate">
                {CONTRIBUTION_CA}
              </code>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 bg-foreground text-background hover:bg-primary hover:text-primary-foreground border-l-[3px] border-foreground px-4 py-3 font-serif uppercase tracking-widest text-xs transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "COPIED" : "COPY CA"}
              </button>
            </div>
          </div>

          <div className="relative bg-secondary/20 flex items-end justify-center overflow-hidden">
            <img
              src={solanaArt}
              alt="Support illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
