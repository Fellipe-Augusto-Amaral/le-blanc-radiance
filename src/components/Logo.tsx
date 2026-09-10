import logoAsset from "@/assets/brand/le-blanc-logo.png.asset.json";

export function Logo({
  className = "",
  size = "header",
}: {
  className?: string;
  size?: "header" | "footer";
}) {
  const dimension =
    size === "header" ? "h-12 w-12 sm:h-16 sm:w-16" : "h-14 w-14 sm:h-16 sm:w-16";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoAsset.url}
        width={512}
        height={512}
        alt="Le Blanc Concept"
        className={`${dimension} shrink-0 rounded-full object-contain mix-blend-multiply`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display uppercase tracking-[0.22em] text-foreground ${
            size === "header" ? "text-lg sm:text-xl" : "text-xl"
          }`}
          style={{ fontWeight: 600 }}
        >
          Le Blanc
        </span>
        <span className="mt-1 text-[0.62rem] font-medium tracking-[0.42em] uppercase text-gold">
          Concept
        </span>
      </span>
    </span>
  );
}
