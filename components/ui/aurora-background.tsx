"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full overflow-hidden bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow 1 (Top Right) */}
        <div
          className={cn(
            "absolute -inset-[10px] opacity-[0.8] dark:opacity-[0.4] will-change-transform",
            "after:content-[''] after:absolute after:inset-0",
            "after:bg-[repeating-linear-gradient(100deg,var(--color-blue-200)_10%,var(--color-indigo-200)_15%,var(--color-cyan-100)_20%,var(--color-teal-100)_25%,var(--color-blue-200)_30%)]",
            "dark:after:bg-[repeating-linear-gradient(100deg,var(--color-blue-700)_10%,var(--color-indigo-600)_15%,var(--color-cyan-600)_20%,var(--color-teal-600)_25%,var(--color-blue-700)_30%)]",
            "after:[background-size:200%,_100%] after:animate-aurora",
            "after:[background-attachment:fixed]",
            "filter blur-[50px] sm:blur-[80px]",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_30%,transparent_70%)]"
          )}
        ></div>

        {/* Glow 2 (Bottom Left) */}
        <div
          className={cn(
            "absolute -inset-[10px] opacity-[0.6] dark:opacity-[0.3] will-change-transform",
            "after:content-[''] after:absolute after:inset-0",
            "after:bg-[repeating-linear-gradient(100deg,var(--color-indigo-200)_10%,var(--color-purple-200)_15%,var(--color-blue-100)_20%,var(--color-cyan-100)_25%,var(--color-indigo-200)_30%)]",
            "dark:after:bg-[repeating-linear-gradient(100deg,var(--color-indigo-700)_10%,var(--color-purple-600)_15%,var(--color-blue-600)_20%,var(--color-cyan-600)_25%,var(--color-indigo-700)_30%)]",
            "after:[background-size:250%,_100%] after:animate-aurora after:[animation-direction:reverse] after:[animation-duration:80s]",
            "after:[background-attachment:fixed]",
            "filter blur-[50px] sm:blur-[80px]",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_0%_100%,black_20%,transparent_70%)]"
          )}
        ></div>
      </div>
      
      {/* Blend bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent dark:from-stone-950 dark:via-stone-950/80 pointer-events-none z-10" />

      <div className="relative z-20 w-full flex flex-col h-full flex-1 min-h-[40rem]">{children}</div>
    </div>
  );
};
