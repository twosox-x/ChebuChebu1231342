import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function Roadmap() {
  const { t } = useI18n();

  const phases = [
    t.roadmap.phase1,
    t.roadmap.phase2,
    t.roadmap.phase3,
    t.roadmap.phase4,
    t.roadmap.phase5,
  ];

  const phaseColors = [
    "bg-background text-foreground",
    "bg-foreground text-background",
    "bg-background text-foreground",
    "bg-primary text-primary-foreground",
    "bg-secondary text-secondary-foreground",
  ];

  return (
    <section className="border-b-[6px] border-foreground bg-background" id="roadmap">
      {/* Section title banner */}
      <div className="bg-primary py-8 px-4 border-b-[4px] border-foreground">
        <div className="container mx-auto flex items-center gap-4">
          <span className="text-secondary text-4xl font-serif leading-none">★</span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-primary-foreground uppercase tracking-widest drop-shadow-[3px_3px_0_#17110D]"
          >
            {t.roadmap.title}
          </motion.h2>
          <span className="text-secondary text-4xl font-serif leading-none ml-auto">★</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="border-[4px] border-foreground">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-6 p-6 md:p-8 border-b-[3px] border-foreground last:border-b-0 ${phaseColors[i]}`}
            >
              {/* Phase number block */}
              <div className={`shrink-0 w-14 h-14 flex items-center justify-center border-[3px] font-serif text-2xl font-bold ${i % 2 === 0 ? "border-primary text-primary bg-background" : "border-background text-background bg-primary"}`}>
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-3xl uppercase leading-tight tracking-wide">{phase}</h3>
              </div>
              <div className="shrink-0 text-3xl font-serif opacity-30">★</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-center mt-8 opacity-60 italic tracking-wide"
        >
          * The People's Five-Year Plan is subject to vibe adjustments at any time.
        </motion.p>
      </div>
    </section>
  );
}
