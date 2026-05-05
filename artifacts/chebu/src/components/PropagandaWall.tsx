import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import IllustrationPlaceholder from "./IllustrationPlaceholder";

export default function PropagandaWall() {
  const { t } = useI18n();

  const cards = [
    t.propaganda.card1,
    t.propaganda.card2,
    t.propaganda.card3,
    t.propaganda.card4,
    t.propaganda.card5,
    t.propaganda.card6
  ];

  const colors = [
    "bg-primary text-primary-foreground border-foreground",
    "bg-secondary text-secondary-foreground border-foreground",
    "bg-background text-primary border-primary",
    "bg-foreground text-background border-primary",
    "bg-primary text-secondary border-foreground",
    "bg-secondary text-primary border-primary"
  ];

  return (
    <section className="py-24 border-b-4 border-primary bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative flex items-center justify-center p-8 border-4 text-center cursor-pointer transition-transform shadow-[6px_6px_0_0_var(--color-foreground)] ${colors[i % colors.length]}`}
            >
              {(i === 0 || i === 5) && (
                 <div className="absolute top-2 left-2 w-16 h-16 opacity-50">
                    <IllustrationPlaceholder label="SKETCH" aspectRatio="1/1" className="border-2 !p-1 text-[10px]" />
                 </div>
              )}
              <h3 className="font-serif text-3xl md:text-4xl uppercase leading-tight">{card}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
