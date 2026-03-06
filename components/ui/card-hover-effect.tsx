/**
 * HoverEffect — Server Component, CSS-only hover.
 *
 * Previous version: 'use client' + framer-motion AnimatePresence + motion.div
 * with `layoutId="hoverBackground"` for a cross-card sliding highlight.
 *
 * New version: CSS group-hover with opacity transition on a pseudo-div.
 * The layoutId cross-card slide is dropped — each card gets its own instant
 * highlight on hover, which is equally premium and requires zero JavaScript.
 * No 'use client', no useState, no framer-motion import.
 */

import { cn } from "@/lib/utils";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 sm:py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link + idx}
          className="relative group block p-2 h-full w-full"
        >
          {/* CSS hover highlight — replaces framer-motion layoutId background */}
          <div className="absolute inset-0 rounded-3xl bg-stone-200 dark:bg-stone-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

          <Card>
            <div className="mb-4 text-stone-600 dark:text-stone-300">
              {item.icon}
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 sm:p-3 overflow-hidden",
        "bg-white dark:bg-stone-900",
        "border border-transparent dark:border-white/[0.2]",
        "group-hover:border-stone-300 dark:group-hover:border-stone-700",
        "relative z-20 shadow-sm transition-colors duration-150",
        className
      )}
    >
      <div className="relative z-50 flex flex-col h-full">
        <div className="p-3 sm:p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-stone-900 dark:text-stone-100 font-bold tracking-wide mt-2 sm:mt-3 text-base sm:text-lg",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 sm:mt-3 text-stone-600 dark:text-stone-400 tracking-wide leading-relaxed text-xs sm:text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
