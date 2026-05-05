import { useEffect, useRef } from "react";

// Animated film grain overlay — renders random noise on a canvas every frame.
// pointer-events: none ensures it never intercepts clicks, scroll, or hover.
export default function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: false });
    if (!ctx) return;

    const resize = () => {
      // Render at half resolution for performance, CSS scales it up
      canvas.width = Math.ceil(window.innerWidth / 2);
      canvas.height = Math.ceil(window.innerHeight / 2);
    };

    const draw = () => {
      frameRef.current++;
      // Throttle to ~20fps — enough for convincing film grain
      if (frameRef.current % 3 === 0) {
        const w = canvas.width;
        const h = canvas.height;
        const imageData = ctx.createImageData(w, h);
        const data = imageData.data;
        let i = 0;
        while (i < data.length) {
          // Generate noise — sepia/warm tint to match the paper palette
          const luma = (Math.random() * 255) | 0;
          data[i]     = luma;           // R
          data[i + 1] = (luma * 0.9) | 0; // G (slightly warm)
          data[i + 2] = (luma * 0.7) | 0; // B (more yellow/sepia)
          data[i + 3] = 28;             // Alpha ~11%
          i += 4;
        }
        ctx.putImageData(imageData, 0, 0);
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const handleResize = () => {
      cancelAnimationFrame(rafRef.current);
      resize();
      frameRef.current = 0;
      draw();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9998,
        mixBlendMode: "multiply",
        opacity: 0.6,
        imageRendering: "pixelated",
      }}
    />
  );
}
