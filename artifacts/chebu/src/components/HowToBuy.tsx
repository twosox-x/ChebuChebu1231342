import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HowToBuy() {
  const { t } = useI18n();

  const steps = [
    t.howToBuy.step1,
    t.howToBuy.step2,
    t.howToBuy.step3,
    t.howToBuy.step4,
    t.howToBuy.step5
  ];

  return (
    <section className="py-24 border-b-4 border-foreground bg-secondary" id="how-to-buy">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-center text-foreground mb-16 uppercase drop-shadow-[2px_2px_0_var(--color-background)]"
        >
          {t.howToBuy.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 bg-background border-4 border-foreground p-4 shadow-[4px_4px_0_0_var(--color-primary)] text-center items-center"
            >
              <IllustrationPlaceholder label="STEP ICON" aspectRatio="1/1" className="w-full max-w-[120px] aspect-square rounded-full border-primary border-4" />
              <p className="font-serif text-lg text-primary mt-2 uppercase">{step}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-foreground hover:text-background text-xl md:text-3xl py-8 px-12 uppercase font-bold tracking-widest border-4 border-foreground transition-all rounded-none shadow-[8px_8px_0_0_var(--color-foreground)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]">
            {t.howToBuy.btnBuy}
          </Button>
        </div>
      </div>
    </section>
  );
}
