"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useId } from "react";

export const BackgroundBoxes = ({
  className,
  containerClassName,
  children
}: {
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}) => {
  const id = useId();
  
  const rows = new Array(30).fill(1);
  const cols = new Array(40).fill(1);
  
  return (
    <div
      className={cn(
        "relative min-h-[40rem] flex items-center justify-center w-full overflow-hidden bg-background",
        containerClassName
      )}
    >
      <div 
        className={cn(
          "absolute inset-0 w-full h-full p-4 pointer-events-none z-0 transform-gpu [mask-image:radial-gradient(ellipse_100%_100%_at_50%_40%,#000_20%,transparent_100%)]",
          className
        )}
      >
        <div className="absolute inset-0 flex justify-center w-full h-full -skew-x-12 -skew-y-12 scale-[1.5] sm:scale-125 md:scale-110 lg:scale-100 opacity-60 dark:opacity-40">
          {rows.map((_, i) => (
            <motion.div
              key={`row` + i}
              className="w-16 h-8 sm:w-20 sm:h-10 border-l border-border relative shadow-[0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_1px_rgba(255,255,255,0.05)]"
            >
              {cols.map((_, j) => (
                <motion.div
                  initial={false}
                  animate={{
                    transition: { duration: 2 },
                  }}
                  key={`col` + j}
                  className="w-16 h-8 sm:w-20 sm:h-10 border-r border-t border-border relative"
                >
                  {/* Random subtle highlights */}
                  {j % 8 === 0 && i % 4 === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 0.4, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i + j) * 0.1,
                      }}
                      className="absolute inset-0 bg-bp-blue/15 dark:bg-bp-cyan/10 rounded-[2px]"
                    />
                  ) : null}
                  {j % 5 === 0 && i % 7 === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: (i * j) % 5,
                      }}
                      className="absolute inset-0 bg-bp-bg/40 dark:bg-bp-navy/20 rounded-[2px]"
                    />
                  ) : null}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle overlay gradient to blend bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
};
