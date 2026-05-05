import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";

export default function HowToBuy() {
  const { t } = useI18n();

  const steps = [
    t.howToBuy.step1,
    t.howToBuy.step2,
    t.howToBuy.step3,
    t.howToBuy.step4,
    t.howToBuy.step5,
  ];

  return (
    <section className="border-b-[6px] border-foreground bg-secondary" id="how-to-buy">
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
            {t.howToBuy.title}
          </motion.h2>
          <span className="text-primary text-4xl font-serif leading-none ml-auto">★</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-5 border-[4px] border-foreground mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex flex-col items-center gap-4 p-6 border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-foreground last:border-0 ${i % 2 === 0 ? "bg-background" : "bg-foreground text-background"}`}
            >
              {/* Step number */}
              <div className={`w-12 h-12 flex items-center justify-center border-[3px] font-serif text-xl font-bold shrink-0 ${i % 2 === 0 ? "border-primary text-primary" : "border-background text-background"}`}>
                {i + 1}
              </div>
              <IllustrationPlaceholder
                label="STEP ICON"
                aspectRatio="1/1"
                className={`w-full max-w-[80px] border-[3px] ${i % 2 === 0 ? "border-foreground" : "border-background"}`}
              />
              <p className={`font-serif text-base uppercase text-center leading-tight tracking-wide ${i % 2 === 0 ? "text-foreground" : "text-background"}`}>{step}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <motion.a
            href="#"
            data-testid="btn-buy-ton"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-serif text-xl md:text-3xl uppercase tracking-[0.2em] px-10 py-5 border-[4px] border-foreground shadow-[8px_8px_0_0_#17110D] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all"
          >
            <span>★</span>
            {t.howToBuy.btnBuy}
            <span>★</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
