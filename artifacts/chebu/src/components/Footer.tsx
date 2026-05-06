import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import logoSvg from "@assets/LOGO.svg";

export default function Footer() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const ca = "EQAa...placeholder...ZXU";

  const handleCopy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-foreground text-background border-t-[8px] border-primary">

      {/* Top banner */}
      <div className="bg-primary border-b-[4px] border-foreground py-6 px-4">
        <div className="container mx-auto flex items-center justify-center">
          <img
            src={logoSvg}
            alt="$CHEBU Logo"
            className="h-14 md:h-20 w-auto drop-shadow-[3px_3px_0_#17110D]"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center gap-10 text-center">

        {/* CA block */}
        <div className="bg-background text-foreground border-[4px] border-primary shadow-[6px_6px_0_0_hsl(352_81%_38%)] flex flex-col md:flex-row items-stretch max-w-2xl w-full">
          <div className="bg-primary text-primary-foreground font-serif uppercase tracking-widest px-5 flex items-center justify-center text-sm border-r-[3px] border-primary md:border-foreground">
            CA
          </div>
          <code className="font-mono text-sm font-bold flex-1 px-4 py-4 truncate text-center md:text-left">
            {ca}
          </code>
          <button
            onClick={handleCopy}
            data-testid="btn-copy-ca"
            className="flex items-center justify-center gap-2 bg-foreground text-background hover:bg-primary hover:text-primary-foreground border-t-[3px] md:border-t-0 md:border-l-[3px] border-foreground px-5 py-4 font-serif uppercase tracking-widest text-sm transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? t.footer.caCopied : "COPY CA"}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-3xl">
          <div className="flex-1 h-[2px] bg-background/20"></div>
          <span className="text-primary text-xl font-serif">★ ★ ★</span>
          <div className="flex-1 h-[2px] bg-background/20"></div>
        </div>

        {/* Nav + language */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full max-w-4xl">
          <nav className="flex flex-wrap gap-6 font-mono text-xs tracking-[0.2em] uppercase text-background/70">
            <a href="#manifesto" className="hover:text-primary transition-colors">Manifesto</a>
            <a href="#culture" className="hover:text-primary transition-colors">Culture</a>
            <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
            <a href="#how-to-buy" className="hover:text-primary transition-colors">How to Buy</a>
            <a href="#community" className="hover:text-primary transition-colors">Community</a>
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Disclaimer */}
        <p className="font-mono text-xs opacity-40 max-w-lg leading-relaxed">
          © {new Date().getFullYear()} The People's Meme. All rights reserved.<br />
          Not financial advice. Not a product. Just a meme you choose to believe in.
        </p>
      </div>
    </footer>
  );
}
