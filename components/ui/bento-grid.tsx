import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-sm",
        "p-4 justify-between flex flex-col space-y-4",
        "bg-white/90 dark:bg-[#0E2040]/70 backdrop-blur-md",
        "border border-blue-100/60 dark:border-blue-800/30",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-[#1F77B4] dark:text-blue-300 mb-2 mt-2">
          {icon}
        </div>
        <div className="font-sans font-bold text-[#0B2454] dark:text-blue-50 text-base sm:text-lg mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-[#0B3C5D]/55 dark:text-blue-300/70 text-sm md:text-xs lg:text-sm text-balance">
          {description}
        </div>
      </div>
    </div>
  );
};
