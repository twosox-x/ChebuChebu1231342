import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useI18n();

  return (
    <div className={cn("flex items-center border-[2px] border-primary overflow-hidden font-mono text-xs tracking-widest", className)}>
      {(["en", "ru", "zh"] as const).map((lang, i) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          data-testid={`lang-${lang}`}
          className={cn(
            "px-3 py-1.5 uppercase transition-colors border-r-[2px] border-primary last:border-r-0",
            language === lang
              ? "bg-primary text-primary-foreground font-bold"
              : "bg-background text-foreground hover:bg-primary/20"
          )}
        >
          {lang === "en" ? "EN" : lang === "ru" ? "RU" : "中文"}
        </button>
      ))}
    </div>
  );
}
