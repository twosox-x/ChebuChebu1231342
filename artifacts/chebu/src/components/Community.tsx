import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { SiTelegram, SiX } from "react-icons/si";
import { LineChart, ExternalLink } from "lucide-react";
import stacksImg from "@assets/STACKS.png";

export default function Community() {
  const { t } = useI18n();

  const links = [
    { icon: <SiTelegram className="w-5 h-5" />, label: t.community.telegram, href: "#", style: "bg-foreground text-background hover:bg-primary hover:text-primary-foreground hover:border-primary border-foreground" },
    { icon: <SiX className="w-5 h-5" />, label: t.community.twitter, href: "#", style: "bg-background text-foreground hover:bg-foreground hover:text-background border-foreground" },
    { icon: <LineChart className="w-5 h-5" />, label: t.community.dexScreener, href: "#", style: "bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background border-foreground" },
    { icon: <ExternalLink className="w-5 h-5" />, label: t.community.tonviewer, href: "#", style: "bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground border-foreground" },
  ];

  return (
    <section className="border-b-[6px] border-foreground bg-background" id="community">
      {/* Section title banner */}
      <div className="bg-secondary py-8 px-4 border-b-[4px] border-foreground">
        <div className="container mx-auto flex items-center gap-4">
          <span className="text-foreground text-4xl font-serif leading-none">★</span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif text-foreground uppercase tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]"
          >
            {t.community.title}
          </motion.h2>
          <span className="text-foreground text-4xl font-serif leading-none ml-auto">★</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy + buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xl md:text-2xl font-bold mb-10 border-l-[6px] border-primary pl-5 py-1 leading-relaxed">
              "{t.community.copy}"
            </p>

            <div className="grid grid-cols-2 gap-0 border-[4px] border-foreground">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  data-testid={`btn-community-${i}`}
                  className={`flex items-center justify-center gap-3 px-4 py-5 border-r-[3px] border-b-[3px] border-foreground font-serif text-base uppercase tracking-widest transition-all hover:translate-x-[3px] hover:translate-y-[3px] ${link.style}`}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden max-w-lg mx-auto">
              <img 
                src={stacksImg} 
                alt="Community Poster" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
