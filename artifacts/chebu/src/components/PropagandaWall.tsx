import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function PropagandaWall() {
  const { t } = useI18n();

  const cards = [
    { text: t.propaganda.card1, bg: "bg-primary", fg: "text-primary-foreground", star: "text-secondary", size: "text-4xl md:text-5xl" },
    { text: t.propaganda.card2, bg: "bg-secondary", fg: "text-secondary-foreground", star: "text-primary", size: "text-3xl md:text-4xl" },
    { text: t.propaganda.card3, bg: "bg-foreground", fg: "text-background", star: "text-primary", size: "text-3xl md:text-4xl" },
    { text: t.propaganda.card4, bg: "bg-background", fg: "text-foreground", star: "text-primary", size: "text-4xl md:text-5xl" },
    { text: t.propaganda.card5, bg: "bg-secondary", fg: "text-secondary-foreground", star: "text-foreground", size: "text-2xl md:text-3xl" },
    { text: t.propaganda.card6, bg: "bg-primary", fg: "text-primary-foreground", star: "text-secondary", size: "text-2xl md:text-3xl" },
  ];

  return (
    <section className="border-b-[6px] border-foreground bg-background overflow-hidden">
      {/* Section title — integrated into the wall */}
      <div className="bg-foreground border-b-[4px] border-primary">
        <div className="container mx-auto px-4 py-6 flex items-center gap-4">
          <span className="text-primary text-3xl font-serif leading-none">★</span>
          <span className="font-mono text-background/50 text-xs tracking-[0.4em] uppercase">The People's Poster Gallery</span>
          <span className="text-primary text-3xl font-serif leading-none ml-auto">★</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-[4px] border-foreground">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.02, zIndex: 10 }}
            className={`relative flex flex-col items-center justify-center p-10 md:p-12 border-r-[3px] border-b-[3px] border-foreground text-center cursor-default select-none min-h-[240px] soviet-stripes ${card.bg}`}
            data-testid={`propaganda-card-${i}`}
          >
            {/* Corner stars */}
            <span className={`absolute top-3 left-3 text-lg font-serif opacity-40 ${card.star}`}>★</span>
            <span className={`absolute bottom-3 right-3 text-lg font-serif opacity-40 ${card.star}`}>★</span>

            <h3 className={`font-serif ${card.size} uppercase leading-[0.9] tracking-tight drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)] ${card.fg}`}>
              {card.text}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
