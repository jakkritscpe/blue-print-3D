"use client";

/**
 * FloatingNav — scroll-aware navbar, no framer-motion.
 *
 * useEffect + passive scroll listener + CSS transition.
 * Blueprint Tech theme: navy border, card/background backdrop.
 */

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);   // scrolling up → show
      } else {
        setVisible(false);  // scrolling down → hide
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "flex max-w-fit fixed top-4 sm:top-10 inset-x-0 mx-auto z-[5000]",
        "border border-border rounded-full",
        "bg-card/85 dark:bg-background/85 backdrop-blur-md",
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(11,60,93,0.08)]",
        "px-6 sm:px-8 py-2 items-center justify-center gap-4 sm:space-x-4",
        "transition-all duration-200",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={idx}
          href={navItem.link}
          className="relative text-muted-foreground items-center flex space-x-1 hover:text-foreground transition-colors"
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
};
