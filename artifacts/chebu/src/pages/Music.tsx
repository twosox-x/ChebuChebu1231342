import { useI18n } from "@/lib/i18n";
import { Play, Pause, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import musicTrack from "@assets/music/CHEBURASHKA.mp3";
import musicVideo from "@assets/music/Clip.mp4";
import albumCover from "@assets/music/vinyl-label.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Music() {
  const { t } = useI18n();
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current || !videoRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      videoRef.current.muted = true;
    } else {
      videoRef.current.currentTime = audioRef.current.currentTime;
      audioRef.current.play();
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current && videoRef.current) {
      audioRef.current.currentTime = time;
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = vol;
      setVolume(vol);
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-14 pb-20">
        <div className="container mx-auto px-4 py-12 md:py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-primary text-2xl">★</span>
              <h1 className="text-3xl md:text-5xl font-serif text-primary uppercase tracking-widest">
                {t.music.title}
              </h1>
              <span className="text-primary text-2xl">★</span>
            </div>
            <p className="font-serif text-xl md:text-2xl text-foreground uppercase">
              The Music for the People!
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* LEFT - Vinyl Player */}
            <div className="flex flex-col items-center space-y-6">
              
              {/* VINYL DISC */}
              <div className="vinyl-container">
                <div className="vinyl-shadow" />
                <div className={`vinyl-disc ${isPlaying ? "spinning" : ""}`}>
                  <div className="vinyl-label">
                    <img src={albumCover} alt="Album" />
                  </div>
                </div>
              </div>

              {/* Track Info */}
              <div className="text-center">
                <h3 className="font-serif text-xl text-primary uppercase tracking-wide">
                  {t.music.trackTitle}
                </h3>
                <p className="font-mono text-xs text-foreground/60 uppercase mt-1">
                  {t.music.artist}
                </p>
              </div>

              {/* Controls */}
              <div className="w-full max-w-[420px] bg-card border-4 border-primary p-5 shadow-[6px_6px_0_#17110D] space-y-4">
                <div>
                  <div className="relative h-2 bg-background border-2 border-foreground">
                    <div className="absolute inset-y-0 left-0 bg-primary" style={{ width: `${progressPercent}%` }} />
                    <input
                      type="range"
                      min={0}
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-foreground/50 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={togglePlay}
                    className="p-4 bg-primary text-primary-foreground border-4 border-foreground shadow-[4px_4px_0_#17110D] hover:shadow-[2px_2px_0_#17110D] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t-2 border-foreground/10">
                  <Volume2 className="w-4 h-4 text-primary" />
                  <div className="flex-1 relative h-2 bg-background border-2 border-foreground">
                    <div className="absolute inset-y-0 left-0 bg-primary" style={{ width: `${volume * 100}%` }} />
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={volume}
                      onChange={handleVolumeChange}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-foreground/50 w-6">{Math.round(volume * 100)}</span>
                </div>
              </div>

              <audio ref={audioRef} src={musicTrack} preload="metadata" />
            </div>

            {/* RIGHT - Video */}
            <div className="flex flex-col items-center space-y-6">
              <div className="bg-primary text-primary-foreground px-5 py-2.5 border-4 border-foreground shadow-[5px_5px_0_#17110D]">
                <span className="font-serif uppercase text-sm tracking-widest font-bold">
                  ★ {t.music.videoLabel} ★
                </span>
              </div>

              <div className="relative w-full max-w-[420px] aspect-square">
                {/* Hard shadow */}
                <div className="absolute inset-0 bg-foreground translate-x-[8px] translate-y-[8px]" />
                
                {/* Outer frame */}
                <div className="absolute inset-0 bg-card border-[5px] border-foreground p-2">
                  {/* Inner red border */}
                  <div className="relative w-full h-full border-[3px] border-primary overflow-hidden bg-black">
                    <video
                      ref={videoRef}
                      src={musicVideo}
                      className="absolute inset-0 w-full h-full object-cover"
                      loop
                      muted
                      autoPlay
                      playsInline
                    />
                    
                    {/* Corner stars */}
                    <span className="absolute top-2 left-2 text-primary text-sm z-10">★</span>
                    <span className="absolute top-2 right-2 text-primary text-sm z-10">★</span>
                    <span className="absolute bottom-2 left-2 text-primary text-sm z-10">★</span>
                    <span className="absolute bottom-2 right-2 text-primary text-sm z-10">★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        .vinyl-container {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 1 / 1;
        }

        .vinyl-shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #17110D;
          transform: translate(8px, 8px);
          z-index: 0;
        }

        .vinyl-disc {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          z-index: 1;
          background:
            radial-gradient(circle at center,
              #1a1a1a 0%,
              #1a1a1a 16%,
              #2a2a2a 16.3%,
              #1a1a1a 16.6%,
              #1a1a1a 18%,
              #2a2a2a 18.3%,
              #1a1a1a 18.6%,
              #1a1a1a 20%,
              #2a2a2a 20.3%,
              #1a1a1a 20.6%,
              #1a1a1a 22%,
              #2a2a2a 22.3%,
              #1a1a1a 22.6%,
              #1a1a1a 24%,
              #2a2a2a 24.3%,
              #1a1a1a 24.6%,
              #1a1a1a 26%,
              #2a2a2a 26.3%,
              #1a1a1a 26.6%,
              #1a1a1a 28%,
              #2a2a2a 28.3%,
              #1a1a1a 28.6%,
              #1a1a1a 30%,
              #2a2a2a 30.3%,
              #1a1a1a 30.6%,
              #1a1a1a 32%,
              #2a2a2a 32.3%,
              #1a1a1a 32.6%,
              #1a1a1a 34%,
              #2a2a2a 34.3%,
              #1a1a1a 34.6%,
              #1a1a1a 36%,
              #2a2a2a 36.3%,
              #1a1a1a 36.6%,
              #1a1a1a 38%,
              #2a2a2a 38.3%,
              #1a1a1a 38.6%,
              #1a1a1a 40%,
              #2a2a2a 40.3%,
              #1a1a1a 40.6%,
              #1a1a1a 42%,
              #2a2a2a 42.3%,
              #1a1a1a 42.6%,
              #1a1a1a 44%,
              #2a2a2a 44.3%,
              #1a1a1a 44.6%,
              #1a1a1a 46%,
              #2a2a2a 46.3%,
              #1a1a1a 46.6%,
              #1a1a1a 48%,
              #2a2a2a 48.3%,
              #1a1a1a 48.6%,
              #1a1a1a 50%
            );
          box-shadow:
            0 0 0 4px #17110D,
            inset 0 0 60px rgba(255,255,255,0.05),
            inset 0 0 20px rgba(0,0,0,0.5);
        }

        .vinyl-disc::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            rgba(255,255,255,0) 0deg,
            rgba(255,255,255,0.08) 30deg,
            rgba(255,255,255,0) 60deg,
            rgba(255,255,255,0) 180deg,
            rgba(255,255,255,0.08) 210deg,
            rgba(255,255,255,0) 240deg,
            rgba(255,255,255,0) 360deg
          );
          pointer-events: none;
        }

        .vinyl-disc {
          animation: vinylSpin 4s linear infinite;
          animation-play-state: paused;
        }

        .vinyl-disc.spinning {
          animation-play-state: running;
        }

        .vinyl-label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 38%;
          height: 38%;
          border-radius: 50%;
          background: hsl(352, 81%, 38%);
          border: 4px solid #17110D;
          overflow: hidden;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.3);
        }

        .vinyl-label::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f2d7a6;
          z-index: 3;
        }

        .vinyl-label img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        @keyframes vinylSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
