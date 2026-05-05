import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";

export default function Culture() {
  const { t } = useI18n();

  return (
    <section className="border-b-[6px] border-foreground bg-primary text-primary-foreground overflow-hidden" id="culture">
      {/* Section title banner */}
      <div className="bg-background py-8 px-4 border-b-[4px] border-primary">
        <div className="container mx-auto flex items-center gap-4">
          <span className="text-primary text-4xl font-serif leading-none">★</span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-primary uppercase tracking-widest drop-shadow-[3px_3px_0_#17110D]"
          >
            {t.culture.title}
          </motion.h2>
          <span className="text-primary text-4xl font-serif leading-none ml-auto">★</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary translate-x-[6px] translate-y-[6px] -z-10 border-[3px] border-foreground"></div>
            <IllustrationPlaceholder
              label="CULTURE POSTER"
              aspectRatio="1/1"
              className="bg-background border-[4px] border-foreground text-foreground"
            />
          </motion.div>

          {/* Content blocks */}
          <div className="space-y-0 border-[4px] border-foreground">
            {[
              { title: t.culture.block1Title, text: t.culture.block1Text, bg: "bg-foreground text-background", accent: "border-primary" },
              { title: t.culture.block2Title, text: t.culture.block2Text, bg: "bg-secondary text-secondary-foreground", accent: "border-foreground" },
              { title: t.culture.block3Title, text: t.culture.block3Text, bg: "bg-background text-foreground", accent: "border-primary" },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 border-b-[3px] border-foreground last:border-b-0 ${block.bg}`}
              >
                <div className={`border-l-[6px] ${block.accent} pl-4`}>
                  <h3 className="font-serif text-xl md:text-2xl uppercase mb-2 tracking-wide leading-tight">{block.title}</h3>
                  <p className="font-mono text-sm md:text-base leading-relaxed opacity-90">{block.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
