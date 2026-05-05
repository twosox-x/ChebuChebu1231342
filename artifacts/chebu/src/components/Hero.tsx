import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen pt-14 flex flex-col overflow-hidden bg-background">

      {/* Main content */}
      <div className="flex-1 container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center py-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          {/* Overline badge */}
          <div className="inline-flex items-center gap-2 self-start bg-primary text-primary-foreground px-3 py-1 font-mono text-xs tracking-[0.3em] uppercase border-2 border-foreground shadow-[3px_3px_0_0_#17110D]">
            ★ TON BLOCKCHAIN ★
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-foreground uppercase leading-[0.88] tracking-tight">
            <span className="block text-primary drop-shadow-[4px_4px_0_#17110D]">{t.hero.headline.split(" ").slice(0,2).join(" ")}</span>
            <span className="block drop-shadow-[3px_3px_0_hsl(352_81%_38%_/_0.4)]">{t.hero.headline.split(" ").slice(2).join(" ")}</span>
          </h1>

          <p className="text-base md:text-lg font-mono font-bold max-w-md border-l-[6px] border-primary pl-4 py-1 leading-relaxed">
            {t.hero.subtext}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-2">
            <a
              href="#"
              data-testid="btn-buy"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-serif text-base uppercase tracking-[0.15em] px-6 py-3 border-[3px] border-foreground shadow-[5px_5px_0_0_#17110D] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all"
            >
              {t.hero.btnBuy}
            </a>
            <a
              href="#"
              data-testid="btn-telegram"
              className="inline-flex items-center justify-center bg-background text-foreground font-serif text-base uppercase tracking-[0.15em] px-6 py-3 border-[3px] border-foreground shadow-[5px_5px_0_0_hsl(352_81%_38%)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all"
            >
              {t.hero.btnTelegram}
            </a>
            <a
              href="#manifesto"
              data-testid="btn-manifesto"
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground font-serif text-base uppercase tracking-[0.15em] px-6 py-3 border-[3px] border-foreground shadow-[5px_5px_0_0_#17110D] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all"
            >
              {t.hero.btnManifesto}
            </a>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center"
        >
          {/* Soviet star decoration */}
          <div className="absolute -top-4 -right-4 text-6xl text-secondary font-serif z-10 select-none leading-none drop-shadow-[2px_2px_0_#17110D]">★</div>
          <div className="absolute -bottom-4 -left-4 text-4xl text-primary font-serif z-10 select-none leading-none">★</div>
          <div className="relative">
            <div className="absolute inset-0 bg-secondary translate-x-[8px] translate-y-[8px] -z-10 border-[3px] border-foreground"></div>
            <IllustrationPlaceholder
              label="HERO MASCOT (MONOCHROME)"
              aspectRatio="3/4"
              className="w-full max-w-sm mx-auto bg-background border-[4px] border-foreground"
            />
          </div>
        </motion.div>
      </div>

      {/* Animated ticker */}
      <div className="w-full overflow-hidden bg-primary border-y-[4px] border-foreground py-3 flex">
        <div className="marquee-track flex font-serif text-primary-foreground text-xl tracking-[0.15em] uppercase select-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-6 shrink-0">{t.hero.ticker}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
