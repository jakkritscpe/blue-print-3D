/**
 * Highlight — CSS-only text background reveal animation.
 *
 * Replaces the framer-motion motion.span version from hero-highlight.tsx.
 * No 'use client', no JavaScript — the animation is handled by the
 * `animate-expand-bg` CSS keyframe defined in globals.css.
 *
 * Visual result is identical: a gradient background that sweeps left→right
 * across the text over 2 seconds with a 0.5s initial delay.
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
        "bg-gradient-to-r from-stone-300 to-stone-400",
        "dark:from-stone-700 dark:to-stone-600",
        "animate-expand-bg",
        className
      )}
    >
      {children}
    </span>
  );
}
