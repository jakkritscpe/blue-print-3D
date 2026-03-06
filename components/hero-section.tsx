/**
 * HeroSection — Server Component, zero JavaScript.
 *
 * Blueprint Tech theme: full-content wrapped in a white glass card,
 * mini navbar inside the card, feature pills row at the bottom.
 * All animations are CSS keyframes — no framer-motion, no hydration cost.
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Eye, Home, Layers, DollarSign, Box, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Highlight } from "@/components/ui/highlight";
import { ThemeToggle } from "@/components/theme-toggle";

export function HeroSection() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12 xl:py-16">

      {/* ── Main glass card ─────────────────────────────────────────────── */}
      <div className="animate-fade-in-up bg-white/80 dark:bg-[#0C1F3F]/80 backdrop-blur-xl rounded-[2rem] shadow-[0_24px_80px_rgba(11,60,93,0.18)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.5)] border border-white/70 dark:border-white/8 overflow-hidden">

        {/* ── Mini navbar inside card ─────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 lg:px-8 py-3.5 border-b border-blue-100/60 dark:border-white/6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Box className="w-6 h-6 text-[#0B3C5D] dark:text-blue-300" />
            <span className="text-base font-semibold text-[#0B3C5D] dark:text-blue-100 hidden sm:block">
              BluePrint3D
            </span>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#0B3C5D]/65 dark:text-blue-200/70 hover:text-[#0B3C5D] dark:hover:text-white hover:bg-blue-50/60 dark:hover:bg-white/8 hidden sm:inline-flex text-sm"
              >
                เข้าสู่ระบบ
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="sm"
                className="bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white rounded-xl text-sm px-4"
              >
                เริ่มต้นฟรี
              </Button>
            </Link>
          </div>
        </div>

        {/* ── Hero content grid ───────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-6 lg:gap-8 p-6 lg:p-8 xl:p-10">

          {/* Left: Text column */}
          <div className="flex flex-col justify-center text-center lg:text-left z-10 py-2 lg:py-6">
            <Badge className="mb-5 w-fit mx-auto lg:mx-0 bg-blue-50 dark:bg-blue-900/40 text-[#1F77B4] dark:text-blue-300 border border-blue-100 dark:border-blue-700/40 font-medium px-3 py-1 text-xs">
              แพลตฟอร์มออกแบบบ้าน 3D อันดับ 1
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-[#0B2454] dark:text-white leading-[1.08] tracking-tight mb-5">
              ออกแบบบ้านในฝัน
              <br />
              <Highlight className="text-[#0B2454] dark:text-white mt-1">
                ด้วยตัวคุณเอง
              </Highlight>
            </h1>

            <p className="text-base sm:text-lg text-[#0B3C5D]/55 dark:text-blue-200/65 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              สร้างแบบบ้าน 3D ที่สวยงามและเป็นไปได้จริง พร้อมประเมินราคา
              ด้วยทีมมืออาชีพ
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Link href="/register" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white px-7 h-12 rounded-xl shadow-lg shadow-[#0B3C5D]/25 dark:shadow-[#1F77B4]/25 font-semibold"
                >
                  เริ่มออกแบบฟรี
                  <ChevronRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="#preview" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#0B3C5D]/22 dark:border-blue-400/30 text-[#0B3C5D] dark:text-blue-200 h-12 rounded-xl bg-white/50 dark:bg-white/5 hover:bg-[#0B3C5D]/5 dark:hover:bg-white/10 backdrop-blur-sm font-medium"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  ดูตัวอย่าง
                </Button>
              </Link>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              <div className="flex items-center gap-2.5 bg-blue-50/80 dark:bg-blue-900/30 rounded-xl px-3.5 py-2 border border-blue-100/80 dark:border-blue-700/35">
                <div className="w-7 h-7 bg-[#1F77B4]/12 dark:bg-[#1F77B4]/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-[#1F77B4] dark:text-blue-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#0B3C5D] dark:text-blue-100 whitespace-nowrap">
                  ประเมินราคาเลยทันที
                </span>
              </div>

              <div className="flex items-center gap-2.5 bg-blue-50/80 dark:bg-blue-900/30 rounded-xl px-3.5 py-2 border border-blue-100/80 dark:border-blue-700/35">
                <div className="w-7 h-7 bg-[#1F77B4]/12 dark:bg-[#1F77B4]/25 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Box className="w-4 h-4 text-[#1F77B4] dark:text-blue-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#0B3C5D] dark:text-blue-100 whitespace-nowrap">
                  โมเดล 3D แบบเสมือนจริง
                </span>
              </div>

              <div className="flex items-center gap-2.5 bg-cyan-50/80 dark:bg-cyan-900/20 rounded-xl px-3.5 py-2 border border-cyan-100/80 dark:border-cyan-700/30">
                <div className="w-7 h-7 bg-[#00AEEF]/12 dark:bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-[#00AEEF] dark:text-cyan-300" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#0B3C5D] dark:text-blue-100 whitespace-nowrap">
                  สอบถามราคาทันที
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image card */}
          <div className="animate-fade-in-scale relative mt-2 lg:mt-0">
            <div className="relative bg-gradient-to-br from-[#E8F2FC] to-[#C8D8F0] dark:from-[#0B2454] dark:to-[#0d2f65] rounded-[1.5rem] overflow-hidden shadow-xl border border-white/80 dark:border-white/10 aspect-[4/3] w-full max-w-[540px] mx-auto lg:max-w-none">
              <Image
                src="/images/hero/hero-3d.jpg"
                alt="3D House Design Preview"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) min(90vw, 540px), 48vw"
                className="object-cover"
                priority
              />

              {/* Floating badge — top-right */}
              <div
                aria-hidden="true"
                className="animate-float-up absolute top-4 right-4 bg-white/92 dark:bg-[#0C1F3F]/92 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/60 dark:border-white/12"
              >
                <Home className="w-5 h-5 text-[#0B3C5D] dark:text-blue-300" />
              </div>

              {/* Floating badge — bottom-left */}
              <div
                aria-hidden="true"
                className="animate-float-down absolute bottom-4 left-4 bg-white/92 dark:bg-[#0C1F3F]/92 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/60 dark:border-white/12"
              >
                <Layers className="w-5 h-5 text-[#0B3C5D] dark:text-blue-300" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
