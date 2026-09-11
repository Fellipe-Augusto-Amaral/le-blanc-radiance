import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
  animation = "reveal",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: "reveal" | "slide-right";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${animation} ${className}`}
    >
      {children}
    </div>
  );
}
