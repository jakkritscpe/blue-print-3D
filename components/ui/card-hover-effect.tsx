/**
 * HoverEffect — Server Component, CSS-only hover.
 *
 * Blueprint Tech theme: navy/cyan accent on hover, card tokens for surfaces.
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
          {/* CSS hover highlight */}
          <div className="absolute inset-0 rounded-3xl bg-accent/10 dark:bg-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

          <Card>
            <div className="mb-4 text-primary dark:text-accent">
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
        "bg-card dark:bg-card",
        "border border-transparent dark:border-border/30",
        "group-hover:border-accent/50 dark:group-hover:border-accent/60",
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
        "text-foreground font-bold tracking-wide mt-2 sm:mt-3 text-base sm:text-lg",
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
        "mt-2 sm:mt-3 text-muted-foreground tracking-wide leading-relaxed text-xs sm:text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
