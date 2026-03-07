/**
 * Highlight — CSS-only text background reveal animation.
 *
 * Blueprint Tech: cyan-to-blue gradient sweep on the hero headline.
 */

import { cn } from "@/lib/utils";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-1 rounded-lg",
        "bg-gradient-to-r from-bp-cyan/40 to-bp-blue/55",
        "dark:from-bp-cyan/30 dark:to-bp-blue/45",
        "animate-expand-bg",
        className
      )}
    >
      {children}
    </span>
  );
}
