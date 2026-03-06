/**
 * Highlight — CSS-only text background reveal animation.
 * Blueprint Tech theme: blueprint-blue gradient sweep.
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
        "bg-gradient-to-r from-blue-200/70 to-blue-300/60",
        "dark:from-blue-800/60 dark:to-blue-700/50",
        "animate-expand-bg",
        className
      )}
    >
      {children}
    </span>
  );
}
