import { cn } from "@/lib/utils";

/**
 * Level 3 decorative animation: a slow ember glow with a few drifting
 * particles. Pure CSS (transform/opacity only) so it stays GPU friendly, and
 * it collapses automatically under prefers-reduced-motion.
 */
export function FlameBackdrop({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-flame-glow"
        style={{ background: "var(--gradient-ember)", opacity: 0.55 }}
      />
      <div
        className="absolute bottom-0 left-[20%] h-[45%] w-[45%] rounded-full blur-3xl animate-flame-glow"
        style={{ background: "var(--gradient-ember)", animationDelay: "-2.5s", opacity: 0.35 }}
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="absolute bottom-6 size-1.5 rounded-full bg-primary-glow blur-[1px] animate-flame-drift"
          style={{
            left: `${12 + i * 14}%`,
            animationDelay: `${i * 1.4}s`,
            animationDuration: `${8 + (i % 3) * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}
