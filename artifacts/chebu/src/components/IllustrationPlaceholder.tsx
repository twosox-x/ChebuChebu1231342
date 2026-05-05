import { cn } from "@/lib/utils";

interface Props {
  label: string;
  aspectRatio?: string; // e.g. "3/4", "1/1", "16/9"
  className?: string;
}

export default function IllustrationPlaceholder({ label, aspectRatio = "1/1", className }: Props) {
  // Convert string fraction to actual CSS aspect-ratio
  const ratioParts = aspectRatio.split("/");
  const ratio = ratioParts.length === 2 ? `${ratioParts[0]} / ${ratioParts[1]}` : "1 / 1";

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-card/80 border-2 border-dashed border-primary p-4",
        "relative overflow-hidden group",
        className
      )}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,_transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="z-10 text-center">
        <p className="text-primary font-mono text-sm uppercase tracking-widest font-bold px-2 py-1 bg-background/90 border border-primary">
          {label}
        </p>
      </div>
    </div>
  );
}
