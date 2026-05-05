import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "wouter";

export default function Navbar() {
  const { t } = useI18n();
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b-4 border-primary bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest text-primary hover:text-secondary transition-colors uppercase">
          $CHEBU
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
