"use client";

/**
 * FloatingNav — scroll-aware navbar, no framer-motion.
 *
 * Previous version: useScroll + useMotionValueEvent + motion.div + AnimatePresence
 * from framer-motion. Those 4 imports alone pull in a significant chunk of the
 * framer-motion runtime.
 *
 * New version: useEffect + passive scroll listener + CSS `transition`.
 * Behaviour is identical (hides on scroll-down, shows on scroll-up).
 * Bundle contribution: ~200 bytes vs ~50KB.
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
        "border border-stone-200 dark:border-stone-800/50 rounded-full",
        "bg-white/80 dark:bg-stone-950/80 backdrop-blur-md",
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        "px-6 sm:px-8 py-2 items-center justify-center gap-4 sm:space-x-4",
        // CSS transition replaces framer-motion AnimatePresence + motion.div
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
          className="relative dark:text-stone-300 items-center flex space-x-1 text-stone-600 dark:hover:text-stone-50 hover:text-stone-900"
        >
          {navItem.icon && <span className="flex-shrink-0">{navItem.icon}</span>}
          <span className="text-sm font-medium">{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
};
