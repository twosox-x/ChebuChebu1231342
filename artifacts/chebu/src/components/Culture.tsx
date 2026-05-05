import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";

export default function Culture() {
  const { t } = useI18n();

  return (
    <section className="py-24 border-b-4 border-foreground bg-primary text-primary-foreground overflow-hidden" id="culture">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif mb-16 uppercase text-background drop-shadow-[3px_3px_0_var(--color-foreground)] text-center"
        >
          {t.culture.title}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 -z-10 border-2 border-foreground"></div>
            <IllustrationPlaceholder label="CULTURE POSTER" aspectRatio="1/1" className="bg-background border-4 border-foreground text-foreground" />
          </motion.div>

          <div className="space-y-8">
            {[
              { title: t.culture.block1Title, text: t.culture.block1Text },
              { title: t.culture.block2Title, text: t.culture.block2Text },
              { title: t.culture.block3Title, text: t.culture.block3Text }
            ].map((block, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-8 border-secondary pl-6 bg-background/5 p-6 backdrop-blur-sm border-y-2 border-r-2 border-y-transparent border-r-transparent hover:border-secondary transition-colors"
              >
                <h3 className="font-serif text-2xl text-secondary mb-2 tracking-wide">{block.title}</h3>
                <p className="font-mono text-lg">{block.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
