/**
 * AuroraBackground — Server Component, pure CSS.
 *
 * Static radial gradient glows in Blueprint Tech palette (cyan + blueprint blue).
 * No animation, no blur filter, no JS — zero runtime cost.
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
        "bg-background",
        className
      )}
      {...props}
    >
      {/* Static gradient glows — Blueprint Tech cyan / blueprint blue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Top-right: cyan glow */}
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(0,174,239,0.20)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(0,174,239,0.12)_0%,transparent_70%)]" />
        {/* Bottom-left: blueprint blue glow */}
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(31,119,180,0.18)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(31,119,180,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Bottom edge fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-20 w-full flex flex-col h-full flex-1 min-h-[40rem]">
        {children}
      </div>
    </div>
  );
};
