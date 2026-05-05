import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "wouter";

export default function Navbar() {
  const { t } = useI18n();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-foreground border-b-[6px] border-primary">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-[0.2em] text-primary hover:text-secondary transition-colors uppercase" data-testid="nav-logo">
          ★ $CHEBU ★
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs tracking-widest uppercase text-background/70">
          <a href="#manifesto" className="hover:text-primary transition-colors">{t.manifesto.title.split(" ")[1]}</a>
          <a href="#culture" className="hover:text-primary transition-colors">{t.culture.title}</a>
          <a href="#roadmap" className="hover:text-primary transition-colors">{t.roadmap.title.split(" ")[1]}</a>
          <a href="#how-to-buy" className="hover:text-primary transition-colors">{t.howToBuy.btnBuy}</a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
