/**
 * StepProgress — Server Component, zero JavaScript.
 * Indigo color scheme matching the landing page design system.
 */

import { Check } from "lucide-react";

interface StepProgressProps {
  currentStep: number;
  centered?: boolean;
}

const steps = [
  { label: "เลือกทำเล", step: 1 },
  { label: "ออกแบบ 3D", step: 2 },
  { label: "ยืนยัน", step: 3 },
];

export function StepProgress({ currentStep, centered = false }: StepProgressProps) {
  return (
    <div className={`flex items-center ${centered ? "justify-center" : ""}`}>
      <div className="flex items-center gap-2 sm:gap-4">
        {steps.map((s, index) => (
          <div key={s.step} className="flex items-center">
            <div
              className={`flex flex-col items-center ${
                s.step === currentStep
                  ? "text-stone-900 dark:text-stone-100"
                  : s.step < currentStep
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-stone-400 dark:text-stone-600"
              }`}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${
                  s.step === currentStep
                    ? "bg-indigo-600 text-white"
                    : s.step < currentStep
                    ? "bg-indigo-500 text-white"
                    : "bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400"
                }`}
              >
                {s.step < currentStep ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  s.step
                )}
              </div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 font-medium">
                {s.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${
                  s.step < currentStep
                    ? "bg-indigo-500"
                    : "bg-stone-200 dark:bg-stone-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
