/**
 * AuroraBackground — Server Component, pure CSS.
 *
 * Blueprint Tech theme: periwinkle/light-blue gradient background
 * with sparkle particle effects and soft bloom glows.
 * No JS, no animation frames — only CSS keyframe sparkles.
 */

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AuroraBackground = ({
  className,
  children,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full overflow-hidden",
        "bg-[#C8D8F8] dark:bg-[#071629]",
        className
      )}
      {...props}
    >
      {/* Background gradient overlays */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Periwinkle-to-light-blue base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C5D3F5] via-[#CBD9F8] to-[#B8CCFF] dark:from-[#071629] dark:via-[#091C38] dark:to-[#0B2148]" />
        {/* Top-right white bloom */}
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55)_0%,transparent_65%)] dark:bg-[radial-gradient(circle,rgba(31,119,180,0.18)_0%,transparent_65%)]" />
        {/* Center-left cyan accent glow */}
        <div className="absolute left-[15%] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,174,239,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(0,174,239,0.08)_0%,transparent_70%)]" />
        {/* Bottom-right subtle warm glow */}
        <div className="absolute bottom-0 right-[20%] h-[300px] w-[300px] translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(180,200,255,0.3)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(31,119,180,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Sparkle particles — CSS-only, GPU-composited */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left edge sparkles */}
        <div className="absolute top-[8%]  left-[4%]  w-2   h-2   bg-white/80 rounded-full animate-sparkle-1 shadow-[0_0_6px_2px_rgba(255,255,255,0.7)]" />
        <div className="absolute top-[22%] left-[9%]  w-1.5 h-1.5 bg-white/60 rounded-full animate-sparkle-3" />
        <div className="absolute top-[40%] left-[2%]  w-1   h-1   bg-white/70 rounded-full animate-sparkle-2" />
        <div className="absolute top-[58%] left-[6%]  w-1.5 h-1.5 bg-white/50 rounded-full animate-sparkle-5" />
        <div className="absolute top-[75%] left-[3%]  w-2   h-2   bg-white/60 rounded-full animate-sparkle-4 shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]" />
        {/* Right edge sparkles */}
        <div className="absolute top-[12%] right-[5%]  w-1.5 h-1.5 bg-white/70 rounded-full animate-sparkle-4" />
        <div className="absolute top-[28%] right-[2%]  w-1   h-1   bg-white/60 rounded-full animate-sparkle-2" />
        <div className="absolute top-[50%] right-[7%]  w-2   h-2   bg-white/50 rounded-full animate-sparkle-6 shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]" />
        <div className="absolute top-[68%] right-[3%]  w-1.5 h-1.5 bg-white/65 rounded-full animate-sparkle-1" />
        {/* Top center sparkles */}
        <div className="absolute top-[5%]  left-[35%] w-1   h-1   bg-white/55 rounded-full animate-sparkle-3" />
        <div className="absolute top-[18%] left-[50%] w-1.5 h-1.5 bg-white/45 rounded-full animate-sparkle-5" />
      </div>

      {/* Bottom edge fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white/50 to-transparent dark:from-[#071629] dark:to-transparent" />

      <div className="relative z-20 w-full flex flex-col h-full flex-1 min-h-[40rem]">
        {children}
      </div>
    </div>
  );
};
