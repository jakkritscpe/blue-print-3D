/**
 * HeroSection — Server Component, zero JavaScript.
 *
 * Previous version: 'use client' + framer-motion motion.div wrappers.
 * The entire hero waited for the JS bundle to parse before animating.
 *
 * New version: pure HTML + CSS animations.
 * - `animate-fade-in-up` / `animate-fade-in-scale` start the instant
 *   the browser paints the first frame — before any JS executes.
 * - Floating badges use `animate-float-up` / `animate-float-down` CSS keyframes.
 * - `Highlight` uses `animate-expand-bg` CSS keyframe (no framer-motion).
 * - No 'use client', no hydration cost, no framer-motion import.
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Eye, Home, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Highlight } from "@/components/ui/highlight";

export function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Text column — fades in upward */}
        <div className="animate-fade-in-up text-center lg:text-left z-10">
          <Badge className="mb-6 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-0">
            แพลตฟอร์มออกแบบบ้าน 3D อันดับ 1
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 dark:text-white leading-tight mb-6">
            ออกแบบบ้านในฝัน
            <br />
            <Highlight className="text-stone-900 dark:text-white mt-2">
              ด้วยตัวคุณเอง
            </Highlight>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-300 mb-8 max-w-lg mx-auto lg:mx-0">
            สร้างแบบบ้าน 3D ที่สวยงามและเป็นไปได้จริง พร้อมประเมินราคาและคำปรึกษาจากทีมงานมืออาชีพ ทันสมัย ใช้งานง่าย
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <Link href="/register" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-white text-white px-8 h-12 lg:h-14 lg:text-lg rounded-xl"
              >
                เริ่มออกแบบฟรี
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#preview" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-stone-300 dark:border-stone-700 h-12 lg:h-14 lg:text-lg bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm rounded-xl"
              >
                <Eye className="w-5 h-5 mr-2" />
                ดูตัวอย่าง
              </Button>
            </Link>
          </div>
        </div>

        {/* Image column — fades in with slight scale */}
        <div className="animate-fade-in-scale relative z-10 mt-8 lg:mt-0">
          <div className="relative bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 rounded-[2rem] p-2 sm:p-4 aspect-square max-w-[500px] lg:max-w-none mx-auto w-full overflow-hidden shadow-2xl border border-white/20 dark:border-stone-700/50">
            {/*
             * priority — LCP element, preloaded immediately.
             * sizes    — tells Next.js which srcset variant to serve per breakpoint.
             *            Without this, it defaults to 100vw and always serves 1920px.
             */}
            <Image
              src="/images/hero/hero-3d.jpg"
              alt="3D House Design Preview"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) min(90vw, 500px), 45vw"
              className="object-cover rounded-[1.5rem] p-1"
              priority
            />

            {/* CSS float animations — zero JS, GPU-composited transform */}
            <div
              aria-hidden="true"
              className="animate-float-up absolute top-8 right-8 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-stone-100 dark:border-stone-800"
            >
              <Home className="w-6 h-6 text-stone-700 dark:text-stone-300" />
            </div>

            <div
              aria-hidden="true"
              className="animate-float-down absolute bottom-12 left-8 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-stone-100 dark:border-stone-800"
            >
              <Layers className="w-6 h-6 text-stone-700 dark:text-stone-300" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
