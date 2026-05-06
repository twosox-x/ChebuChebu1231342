import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { SiTelegram } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import sticker1 from "@assets/stickers/IMG_2024.png";
import sticker2 from "@assets/stickers/IMG_2025.png";
import sticker3 from "@assets/stickers/IMG_2026.png";
import sticker4 from "@assets/stickers/IMG_2027.png";
import sticker5 from "@assets/stickers/IMG_2028.png";
import sticker6 from "@assets/stickers/IMG_2029.png";
import sticker7 from "@assets/stickers/IMG_2030.png";
import sticker8 from "@assets/stickers/IMG_2031.png";
import sticker9 from "@assets/stickers/IMG_2032.png";
import sticker10 from "@assets/stickers/IMG_2033.png";
import sticker11 from "@assets/stickers/IMG_2034.png";
import sticker12 from "@assets/stickers/IMG_2035.png";
import sticker13 from "@assets/stickers/IMG_2036.png";

const STICKERS = [
  sticker1, sticker2, sticker3, sticker4, sticker5, sticker6,
  sticker7, sticker8, sticker9, sticker10, sticker11, sticker12, sticker13
];

export default function Stickers() {
  const { t } = useI18n();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative" id="stickers">
      {/* Red line background pattern */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,_transparent,_transparent_2px,_hsl(352_81%_38%_/_0.1)_2px,_hsl(352_81%_38%_/_0.1)_4px)] pointer-events-none" />
      
      <div className="relative bg-background/90 backdrop-blur-sm border-b-[6px] border-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="text-primary text-4xl font-serif leading-none">★</span>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-serif text-primary uppercase tracking-widest drop-shadow-[3px_3px_0_#17110D]"
                >
                  {t.stickers.title}
                </motion.h2>
                <span className="text-primary text-4xl font-serif leading-none">★</span>
              </div>
              <p className="font-serif text-2xl md:text-3xl uppercase tracking-wide mb-4">
                {t.stickers.subtitle}
              </p>
              <p className="font-mono text-base md:text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
                {t.stickers.description}
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex flex-col items-center gap-4 bg-background text-foreground border-[4px] border-primary shadow-[8px_8px_0_0_#17110D] p-8">
                <div className="flex items-center gap-3 mb-2">
                  <SiTelegram className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-xl uppercase tracking-widest">
                    {t.stickers.getPack}
                  </h3>
                </div>
                <p className="font-mono text-sm text-foreground/70 max-w-md mb-6">
                  {t.stickers.description2}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground border-[3px] border-foreground font-serif uppercase tracking-widest text-sm shadow-[4px_4px_0_#17110D] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                >
                  <SiTelegram className="w-5 h-5" />
                  {t.stickers.joinTelegram}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* True Edge-to-Edge Sticker Row - Outside Container */}
      <div className="relative">
        {/* Scrollable container - truly edge to edge with drag functionality */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-6 py-4 select-none">
            {STICKERS.map((sticker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                className="relative group flex-shrink-0"
              >
                {/* Film grain overlay */}
                <div className="absolute inset-0 opacity-30 pointer-events-none z-10">
                  <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 /%3E%3CfeColorMatrix type=%22matrix%22 values=%221 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0.5 0%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.15] mix-blend-multiply"></div>
                </div>
                <img
                  src={sticker}
                  alt={`Sticker ${i + 1}`}
                  className="w-auto h-48 md:h-64 lg:h-80 object-cover pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
