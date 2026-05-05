import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden border-b-4 border-primary bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-background/50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center grow">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[0.9] uppercase drop-shadow-[4px_4px_0_var(--color-foreground)]">
            {t.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl font-mono font-bold max-w-xl">
            {t.hero.subtext}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground text-lg uppercase font-bold tracking-widest border-2 border-transparent hover:border-foreground transition-all rounded-none shadow-[4px_4px_0_0_var(--color-foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              {t.hero.btnBuy}
            </Button>
            <Button size="lg" variant="outline" className="text-lg uppercase font-bold tracking-widest border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-none shadow-[4px_4px_0_0_var(--color-primary)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              {t.hero.btnTelegram}
            </Button>
            <Button size="lg" variant="outline" className="text-lg uppercase font-bold tracking-widest border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all rounded-none">
              {t.hero.btnManifesto}
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 -z-10 border-2 border-foreground"></div>
          <IllustrationPlaceholder label="HERO MASCOT (MONOCHROME)" aspectRatio="3/4" className="w-full max-w-md mx-auto bg-background border-4 border-foreground" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-primary text-primary-foreground border-t-4 border-foreground py-3 flex">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap flex font-serif text-2xl tracking-widest"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="mx-4">{t.hero.ticker}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
