/**
 * AuroraBackground — Server Component, pure CSS.
 *
 * Previous version: two full-viewport divs with blur-[80px] + background-attachment:fixed
 * + continuous CSS animation. Caused: constant GPU repaints, scroll jank, iOS Safari breakage.
 *
 * New version: two static radial gradients, no animation, no blur filter.
 * Visual character is preserved (colorful corner glows) at zero runtime cost.
 * No 'use client' directive — rendered entirely on the server.
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
        "bg-stone-50 dark:bg-stone-950",
        className
      )}
      {...props}
    >
      {/* Static gradient glows — no animation, no blur, no JS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Top-right glow */}
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(165,180,252,0.35)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_70%)]" />
        {/* Bottom-left glow */}
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(186,230,253,0.3)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Bottom edge fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-stone-50 to-transparent dark:from-stone-950" />

      <div className="relative z-20 w-full flex flex-col h-full flex-1 min-h-[40rem]">
        {children}
      </div>
    </div>
  );
};
