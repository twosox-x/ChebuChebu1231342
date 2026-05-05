import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function Roadmap() {
  const { t } = useI18n();

  const phases = [
    t.roadmap.phase1,
    t.roadmap.phase2,
    t.roadmap.phase3,
    t.roadmap.phase4,
    t.roadmap.phase5
  ];

  return (
    <section className="py-24 border-b-4 border-primary bg-background" id="roadmap">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-center text-primary mb-16 uppercase drop-shadow-[2px_2px_0_var(--color-foreground)]"
        >
          {t.roadmap.title}
        </motion.h2>

        <div className="relative border-l-4 border-primary ml-4 md:ml-12 space-y-12 pb-8">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute w-8 h-8 bg-secondary border-4 border-primary left-[-18px] top-1 rotate-45"></div>
              <div className="bg-card border-4 border-primary p-6 shadow-[4px_4px_0_0_var(--color-foreground)]">
                <h3 className="font-serif text-2xl md:text-3xl text-primary uppercase">{phase}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
