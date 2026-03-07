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
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-sm p-4",
        "bg-card/85 dark:bg-card/60 backdrop-blur-md",
        "border border-border",
        "justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-primary dark:text-accent mb-2 mt-2">
          {icon}
        </div>
        <div className="font-sans font-bold text-foreground text-base sm:text-lg mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-sm md:text-xs lg:text-sm text-balance">
          {description}
        </div>
      </div>
    </div>
  );
};
