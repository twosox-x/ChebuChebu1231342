import { useState, useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "wouter";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import sovietAnthemAudio from "@assets/National Anthem of USSR.mp3";
import logoSvg from "@assets/LOGO.svg";

const NAV_LINKS = [
  { href: "#manifesto", labelKey: "manifesto" },
  { href: "#culture",   labelKey: "culture"   },
  { href: "#roadmap",   labelKey: "roadmap"   },
  { href: "#how-to-buy",labelKey: "howToBuy"  },
  { href: "#community", labelKey: "community" },
] as const;

const NAV_LABELS: Record<(typeof NAV_LINKS)[number]["labelKey"], Record<"en"|"ru"|"zh", string>> = {
  manifesto: { en: "Manifesto", ru: "Манифест", zh: "宣言" },
  culture:   { en: "Culture",   ru: "Культура", zh: "文化" },
  roadmap:   { en: "Roadmap",   ru: "Пятилетний план", zh: "计划" },
  howToBuy:  { en: "How to Buy",ru: "Как купить", zh: "购买" },
  community: { en: "Community", ru: "Сообщество", zh: "社区" },
};

export default function Navbar() {
  const { language } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Auto-play audio on first user interaction
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !audioStarted) {
        audioRef.current.play().catch(err => {
          console.log("Auto-play prevented:", err);
        });
        setAudioStarted(true);
      }
    };

    // Try to play immediately
    startAudio();

    // Also try on first click/touch anywhere
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, startAudio, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, startAudio);
      });
    };
  }, [audioStarted]);

  const toggleMute = () => {
    if (audioRef.current) {
      // Start audio if not started yet
      if (!audioStarted) {
        audioRef.current.play().catch(err => {
          console.log("Play prevented:", err);
        });
        setAudioStarted(true);
      }
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
          scrolled
            ? "bg-foreground/98 border-b-[4px] border-primary shadow-[0_4px_0_0_hsl(352_81%_38%)]"
            : "bg-foreground border-b-[4px] border-primary"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="h-14 flex items-center justify-between gap-6">

            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              data-testid="nav-logo"
              className="shrink-0 flex items-center"
            >
              <img
                src={logoSvg}
                alt="$CHEBU Logo"
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0 flex-1 justify-center" aria-label="Main navigation">
              {NAV_LINKS.map(({ href, labelKey }) => (
                <a
                  key={href}
                  href={href}
                  className="relative px-4 py-1 font-mono text-[11px] tracking-[0.25em] uppercase text-background/60 hover:text-primary transition-colors group"
                >
                  {NAV_LABELS[labelKey][language]}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </nav>

            {/* Right side: mute + lang + hamburger */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Mute button */}
              <button
                onClick={toggleMute}
                data-testid="btn-mute"
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="flex items-center justify-center w-9 h-9 border-[2px] border-primary text-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen(v => !v)}
                data-testid="btn-hamburger"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="md:hidden flex items-center justify-center w-9 h-9 border-[2px] border-primary text-background hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Red accent line beneath nav */}
        <div className="hidden md:block w-full h-[1px] bg-primary/20" />
      </header>

      {/* Mobile drawer */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/80"
          onClick={closeMenu}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-14 left-0 right-0 bg-foreground border-b-[4px] border-primary transition-transform duration-200 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ href, labelKey }, i) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className={`flex items-center gap-4 px-6 py-5 font-serif text-lg uppercase tracking-widest text-background hover:bg-primary hover:text-primary-foreground transition-colors ${i < NAV_LINKS.length - 1 ? "border-b-[2px] border-primary/30" : ""}`}
              >
                <span className="text-primary text-sm">★</span>
                {NAV_LABELS[labelKey][language]}
              </a>
            ))}
            <div className="px-6 py-5 border-t-[2px] border-primary/30">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>

      {/* Hidden audio player */}
      <audio
        ref={audioRef}
        src={sovietAnthemAudio}
        loop
        autoPlay
      />
    </>
  );
}
