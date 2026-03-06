"use client";

/**
 * FloatingNav — scroll-aware navbar, Blueprint Tech theme.
 * CSS transition only — no framer-motion.
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
        setVisible(true);
      } else {
        setVisible(false);
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
        "border border-blue-100/60 dark:border-blue-800/40 rounded-full",
        "bg-white/85 dark:bg-[#0C1F3F]/85 backdrop-blur-md",
        "shadow-[0px_4px_20px_rgba(11,60,93,0.12)] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.4)]",
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
          className="relative text-[#0B3C5D]/65 dark:text-blue-300/80 items-center flex space-x-1 hover:text-[#0B3C5D] dark:hover:text-white transition-colors text-sm font-medium"
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block">{navItem.name}</span>
        </Link>
      ))}
    </div>
  );
};
