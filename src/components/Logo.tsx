export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-xl tracking-[0.22em] uppercase text-foreground sm:text-2xl">
        Le Blanc
      </span>
      <span className="mt-1 text-[0.6rem] tracking-[0.42em] uppercase text-gold">
        Concept
      </span>
    </span>
  );
}
