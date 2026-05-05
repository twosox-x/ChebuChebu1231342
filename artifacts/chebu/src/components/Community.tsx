import { useI18n } from "@/lib/i18n";
import IllustrationPlaceholder from "./IllustrationPlaceholder";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiTelegram, SiX } from "react-icons/si";
import { LineChart, ExternalLink } from "lucide-react";

export default function Community() {
  const { t } = useI18n();

  return (
    <section className="py-24 border-b-4 border-primary bg-background" id="community">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 uppercase drop-shadow-[2px_2px_0_var(--color-foreground)]">
              {t.community.title}
            </h2>
            <p className="font-mono text-xl font-bold mb-10 border-l-4 border-secondary pl-4 py-1 text-foreground">
              {t.community.copy}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 border-4 border-foreground rounded-none font-bold text-lg hover:bg-primary hover:text-primary-foreground hover:border-primary uppercase flex gap-3 group shadow-[4px_4px_0_0_var(--color-foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                <SiTelegram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                {t.community.telegram}
              </Button>
              <Button variant="outline" className="h-16 border-4 border-foreground rounded-none font-bold text-lg hover:bg-foreground hover:text-background uppercase flex gap-3 group shadow-[4px_4px_0_0_var(--color-foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                <SiX className="w-6 h-6 group-hover:scale-110 transition-transform" />
                {t.community.twitter}
              </Button>
              <Button variant="outline" className="h-16 border-4 border-foreground rounded-none font-bold text-lg hover:bg-secondary hover:text-secondary-foreground hover:border-secondary uppercase flex gap-3 group shadow-[4px_4px_0_0_var(--color-foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                <LineChart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                {t.community.dexScreener}
              </Button>
              <Button variant="outline" className="h-16 border-4 border-foreground rounded-none font-bold text-lg hover:bg-primary hover:text-primary-foreground hover:border-primary uppercase flex gap-3 group shadow-[4px_4px_0_0_var(--color-foreground)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
                <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
                {t.community.tonviewer}
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 -z-10 border-2 border-foreground"></div>
            <IllustrationPlaceholder label="COMMUNITY POSTER" aspectRatio="3/4" className="bg-background border-4 border-foreground" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
