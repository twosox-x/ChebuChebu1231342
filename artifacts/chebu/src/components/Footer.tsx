import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

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
    <footer className="bg-foreground text-background py-12 border-t-8 border-primary">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
        
        <div className="font-serif text-4xl md:text-6xl text-primary tracking-widest uppercase mb-4 drop-shadow-[2px_2px_0_var(--color-background)]">
          $CHEBU
        </div>

        <div className="bg-background text-foreground p-4 border-4 border-primary flex flex-col md:flex-row items-center gap-4 max-w-2xl w-full mx-auto">
          <span className="font-mono font-bold whitespace-nowrap hidden md:inline">CA:</span>
          <code className="font-mono text-sm md:text-base truncate flex-1 font-bold bg-primary/10 px-2 py-1 w-full text-center md:text-left">{ca}</code>
          <Button 
            onClick={handleCopy}
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase font-bold w-full md:w-auto"
          >
            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? t.footer.caCopied : "COPY CA"}
          </Button>
        </div>

        <div className="w-full h-1 bg-background/20 my-4 max-w-md mx-auto"></div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full max-w-4xl">
          <nav className="flex gap-6 font-mono text-sm font-bold uppercase">
             <a href="#manifesto" className="hover:text-primary transition-colors">Manifesto</a>
             <a href="#culture" className="hover:text-primary transition-colors">Culture</a>
             <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
             <a href="#how-to-buy" className="hover:text-primary transition-colors">How to Buy</a>
          </nav>

          <LanguageSwitcher className="text-background filter invert grayscale" />
        </div>
        
        <p className="font-mono text-xs opacity-50 mt-8">
          © {new Date().getFullYear()} The People's Meme. All rights reserved. Not financial advice.
        </p>
      </div>
    </footer>
  );
}
