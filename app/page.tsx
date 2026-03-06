/**
 * Landing page — pure Server Component.
 *
 * Every section is server-rendered HTML. The only client JavaScript on this page
 * comes from two tiny islands:
 *   • FloatingNav  — ~200-byte scroll listener, CSS transition
 *   • ThemeToggle  — next-themes hook
 *
 * Framer-motion is completely absent from this route's bundle.
 * Before this refactor it was loaded by 4 separate components.
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Box,
  Layers,
  Zap,
  Shield,
  MousePointer,
  PenTool,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroSection } from "@/components/hero-section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function HomePage() {
  const navItems = [
    { name: "หน้าหลัก", link: "#" },
    { name: "จุดเด่น", link: "#features" },
    { name: "ขั้นตอน", link: "#preview" },
  ];

  /**
   * Feature images.
   * • No `priority` — these are below the fold; browser lazy-loads them.
   * • `sizes` string matches the BentoGrid layout:
   *     col-span-2 in a max-w-5xl 3-col grid → ~60vw on desktop
   *     col-span-1 → ~30vw on desktop
   */
  const features = [
    {
      title: "ออกแบบ 3D แบบ Real-time",
      description: "เห็นผลลัพธ์ทันทีขณะออกแบบ ด้วยเทคโนโลยี 3D ที่ทันสมัย",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden relative">
          <Image
            src="/images/hero/feature-design.jpg"
            alt="Design"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
      ),
      icon: <Box className="w-5 h-5" />,
      className: "md:col-span-2",
    },
    {
      title: "เลือกวัสดุได้ไม่จำกัด",
      description: "หลังคา ผนัง พื้น ตกแต่งได้ตามต้องการ",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden relative">
          <Image
            src="/images/hero/feature-materials.jpg"
            alt="Materials"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover"
          />
        </div>
      ),
      icon: <Layers className="w-5 h-5" />,
      className: "md:col-span-1",
    },
    {
      title: "ประเมินราคาทันที",
      description: "รู้ราคาโดยประมาณ วางแผนงบได้อย่างแม่นยำ",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden relative">
          <Image
            src="/images/hero/feature-price.jpg"
            alt="Price"
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover"
          />
        </div>
      ),
      icon: <Zap className="w-5 h-5" />,
      className: "md:col-span-1",
    },
    {
      title: "ทีมงานมืออาชีพตรวจสอบ",
      description: "สถาปนิกและวิศวกรพร้อมให้คำปรึกษาตลอดการออกแบบ",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden relative">
          <Image
            src="/images/hero/feature-team.jpg"
            alt="Team"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
      ),
      icon: <Shield className="w-5 h-5" />,
      className: "md:col-span-2",
    },
  ];

  const stepsHoverCards = [
    {
      title: "1. เลือกพื้นที่ทำเล",
      description: "กำหนดขนาดที่ดินและขอบเขตพื้นที่เพื่อเริ่มต้นการออกแบบ",
      link: "#",
      icon: <MousePointer className="w-8 h-8" />,
    },
    {
      title: "2. ออกแบบบ้าน 3D",
      description:
        "ใช้เครื่องมือ 3D วางโครงสร้าง เลือกวัสดุ และดูแบบแปลนได้ทันที",
      link: "#",
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: "3. ส่งแบบและประเมินราคา",
      description:
        "เมื่อพอใจกับแบบบ้านแล้ว ส่งให้วิศวกรประเมินราคาจริงได้อย่างรวดเร็ว",
      link: "#",
      icon: <CheckCircle2 className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 selection:bg-stone-300 dark:selection:bg-stone-700">

      {/* Client island: scroll-aware nav */}
      <FloatingNav navItems={navItems} />

      {/* Brand logo — server-rendered, zero JS */}
      <div className="absolute top-4 left-4 sm:left-8 z-[6000] flex items-center gap-2">
        <Box className="w-8 h-8 text-stone-800 dark:text-stone-200" />
        <span className="text-xl font-semibold text-stone-800 dark:text-stone-200">
          BluePrint3D
        </span>
      </div>

      {/* Top-right controls */}
      <div className="absolute top-4 right-4 sm:right-8 z-[6000] flex items-center gap-4">
        <ThemeToggle />
        <Link href="/login">
          <Button
            variant="ghost"
            className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-50 hidden sm:inline-flex"
          >
            เข้าสู่ระบบ
          </Button>
        </Link>
        <Link href="/register">
          <Button className="bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-white text-white">
            เริ่มต้นฟรี
          </Button>
        </Link>
      </div>

      {/* Hero — both AuroraBackground and HeroSection are now server components */}
      <AuroraBackground>
        <HeroSection />
      </AuroraBackground>

      {/*
       * Below-fold sections.
       * content-visibility: auto — browser skips layout/paint for off-screen
       * content until the user scrolls near it. Reduces initial render time.
       * contain-intrinsic-size provides an estimated height so the scrollbar
       * doesn't jump when content is measured.
       */}
      <section
        id="features"
        style={{ containIntrinsicSize: "0 700px" }}
        className="[content-visibility:auto] py-24 relative z-20 bg-white dark:bg-stone-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-stone-500 dark:from-stone-100 dark:to-stone-400 mb-4 lg:mb-6">
              สร้างสรรค์ไร้ขีดจำกัด
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-base sm:text-lg mb-8">
              ทุกฟีเจอร์ถูกออกแบบมาเพื่อให้คุณออกแบบบ้านได้ง่าย รวดเร็ว
              และดูเป็นมืออาชีพที่สุด
            </p>
          </div>

          <BentoGrid className="max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <BentoGridItem
                key={i}
                title={feature.title}
                description={feature.description}
                header={feature.header}
                icon={feature.icon}
                className={feature.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      <section
        id="preview"
        style={{ containIntrinsicSize: "0 600px" }}
        className="[content-visibility:auto] py-24 relative z-10 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="mb-4 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700">
              ขั้นตอนการทำงาน
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4 lg:mb-6">
              เริ่มต้นง่ายๆ เพียง 3 ขั้นตอน
            </h2>
            <p className="text-stone-600 dark:text-stone-300 max-w-2xl mx-auto text-base sm:text-lg">
              ออกแบบบ้านของคุณได้เสร็จสมบูรณ์ พร้อมนำไปสร้างจริง
              ด้วยระบบที่เข้าใจคุณที่สุด
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <HoverEffect items={stepsHoverCards} />
          </div>

          <div className="text-center mt-12">
            <Link href="/register">
              <Button className="bg-stone-800 hover:bg-stone-700 text-white dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-white h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                สร้างโปรเจกต์แรกของคุณเลย
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-white dark:bg-stone-950 py-12 border-t border-stone-200 dark:border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Box className="w-6 h-6 text-stone-600 dark:text-stone-400" />
              <span className="font-semibold text-stone-700 dark:text-stone-300">
                BluePrint3D
              </span>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-sm">
              © 2026 BluePrint3D. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
