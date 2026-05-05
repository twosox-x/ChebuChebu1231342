import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";

export default function Manifesto() {
  const { t } = useI18n();

  return (
    <section className="py-24 border-b-4 border-primary bg-background" id="manifesto">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-center text-primary mb-16 uppercase drop-shadow-[2px_2px_0_var(--color-foreground)]"
        >
          {t.manifesto.title}
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-lg md:text-xl font-mono border-l-4 border-primary pl-6 py-2"
          >
            <p>{t.manifesto.p1}</p>
            <p>{t.manifesto.p2}</p>
            <p className="font-bold text-primary">{t.manifesto.p3}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
             <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 -z-10 border-2 border-foreground"></div>
             <IllustrationPlaceholder label="PROPAGANDA ILLUSTRATION" aspectRatio="4/5" className="bg-background border-4 border-foreground" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[t.manifesto.card1, t.manifesto.card2, t.manifesto.card3, t.manifesto.card4].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border-4 border-primary p-6 text-center shadow-[4px_4px_0_0_var(--color-primary)]"
            >
              <p className="font-serif text-xl text-primary uppercase">{card}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
