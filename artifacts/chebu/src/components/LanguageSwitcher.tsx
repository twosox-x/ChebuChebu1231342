import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useI18n();

  return (
    <div className={cn("flex items-center gap-2 font-mono text-sm font-bold", className)}>
      <button 
        onClick={() => setLanguage("en")}
        className={cn("hover:text-primary transition-colors", language === "en" && "text-primary underline decoration-2 underline-offset-4")}
      >
        EN
      </button>
      <span className="text-muted-foreground/30">|</span>
      <button 
        onClick={() => setLanguage("ru")}
        className={cn("hover:text-primary transition-colors", language === "ru" && "text-primary underline decoration-2 underline-offset-4")}
      >
        RU
      </button>
      <span className="text-muted-foreground/30">|</span>
      <button 
        onClick={() => setLanguage("zh")}
        className={cn("hover:text-primary transition-colors", language === "zh" && "text-primary underline decoration-2 underline-offset-4")}
      >
        中文
      </button>
    </div>
  );
}
