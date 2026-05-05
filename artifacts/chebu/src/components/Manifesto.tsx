import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";

export default function Manifesto() {
  const { t } = useI18n();

  return (
    <section className="border-b-[6px] border-foreground bg-background" id="manifesto">
      {/* Section title banner */}
      <div className="bg-foreground py-8 px-4 border-b-[4px] border-primary">
        <div className="container mx-auto flex items-center gap-4">
          <span className="text-primary text-4xl font-serif leading-none">★</span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-background uppercase tracking-widest drop-shadow-[3px_3px_0_hsl(352_81%_38%)]"
          >
            {t.manifesto.title}
          </motion.h2>
          <span className="text-primary text-4xl font-serif leading-none ml-auto">★</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="soviet-stripes border-[3px] border-foreground p-6 bg-background">
              <p className="font-mono text-base md:text-lg leading-relaxed border-l-[6px] border-primary pl-5">{t.manifesto.p1}</p>
            </div>
            <div className="border-[3px] border-foreground p-6 bg-background">
              <p className="font-mono text-base md:text-lg leading-relaxed border-l-[6px] border-secondary pl-5">{t.manifesto.p2}</p>
            </div>
            <div className="bg-primary border-[3px] border-foreground p-6">
              <p className="font-mono text-base md:text-lg text-primary-foreground font-bold leading-relaxed border-l-[6px] border-secondary pl-5">{t.manifesto.p3}</p>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-primary translate-x-[6px] translate-y-[6px] -z-10 border-[3px] border-foreground"></div>
            <IllustrationPlaceholder
              label="PROPAGANDA ILLUSTRATION"
              aspectRatio="4/5"
              className="bg-background border-[4px] border-foreground"
            />
          </motion.div>
        </div>

        {/* Slogan cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-16 border-[4px] border-foreground">
          {[t.manifesto.card1, t.manifesto.card2, t.manifesto.card3, t.manifesto.card4].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-8 text-center border-foreground flex flex-col items-center justify-center gap-3 ${i % 2 === 0 ? "bg-foreground text-background" : "bg-background text-foreground"} ${i < 3 ? "border-r-[3px]" : ""}`}
            >
              <span className={`text-2xl ${i % 2 === 0 ? "text-primary" : "text-primary"}`}>★</span>
              <p className="font-serif text-lg uppercase leading-tight tracking-wide">{card}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
