/**
 * Landing page — pure Server Component.
 *
 * Blueprint Tech theme. Logo + nav are now inside the HeroSection card.
 * FloatingNav appears on scroll-up only.
 * Zero framer-motion on this route.
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

import { FloatingNav } from "@/components/ui/floating-navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroSection } from "@/components/hero-section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function HomePage() {
  const navItems = [
    { name: "หน้าหลัก", link: "#" },
    { name: "จุดเด่น",  link: "#features" },
    { name: "ขั้นตอน", link: "#preview" },
  ];

  const features = [
    {
      title: "ออกแบบ 3D แบบ Real-time",
      description: "เห็นผลลัพธ์ทันทีขณะออกแบบ ด้วยเทคโนโลยี 3D ที่ทันสมัย",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-blue-50 dark:bg-[#0B2454]/60 overflow-hidden relative">
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
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-blue-50 dark:bg-[#0B2454]/60 overflow-hidden relative">
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
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-blue-50 dark:bg-[#0B2454]/60 overflow-hidden relative">
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
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-blue-50 dark:bg-[#0B2454]/60 overflow-hidden relative">
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
      description: "ใช้เครื่องมือ 3D วางโครงสร้าง เลือกวัสดุ และดูแบบแปลนได้ทันที",
      link: "#",
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: "3. ส่งแบบและประเมินราคา",
      description: "เมื่อพอใจกับแบบบ้านแล้ว ส่งให้วิศวกรประเมินราคาจริงได้อย่างรวดเร็ว",
      link: "#",
      icon: <CheckCircle2 className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#C8D8F8] dark:bg-[#071629] text-[#0B2454] dark:text-blue-50 selection:bg-blue-200 dark:selection:bg-blue-800">

      {/* Scroll-aware floating nav */}
      <FloatingNav navItems={navItems} />

      {/* Hero — aurora background + hero card */}
      <AuroraBackground>
        <HeroSection />
      </AuroraBackground>

      {/* ── Features section ──────────────────────────────────────────── */}
      <section
        id="features"
        style={{ containIntrinsicSize: "0 700px" }}
        className="[content-visibility:auto] py-24 relative z-20 bg-white dark:bg-[#0A1628]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0B3C5D] to-[#1F77B4] dark:from-blue-100 dark:to-blue-400 mb-4 lg:mb-6">
              สร้างสรรค์ไร้ขีดจำกัด
            </h2>
            <p className="text-[#0B3C5D]/55 dark:text-blue-300/70 max-w-2xl mx-auto text-base sm:text-lg mb-8">
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

      {/* ── Steps section ─────────────────────────────────────────────── */}
      <section
        id="preview"
        style={{ containIntrinsicSize: "0 600px" }}
        className="[content-visibility:auto] py-24 relative z-10 bg-[#EEF5FC] dark:bg-[#091525] border-t border-blue-100/50 dark:border-blue-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="mb-4 bg-white dark:bg-[#0E2040] text-[#1F77B4] dark:text-blue-300 border-blue-100 dark:border-blue-700/40">
              ขั้นตอนการทำงาน
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2454] dark:text-white mb-4 lg:mb-6">
              เริ่มต้นง่ายๆ เพียง 3 ขั้นตอน
            </h2>
            <p className="text-[#0B3C5D]/55 dark:text-blue-300/70 max-w-2xl mx-auto text-base sm:text-lg">
              ออกแบบบ้านของคุณได้เสร็จสมบูรณ์ พร้อมนำไปสร้างจริง
              ด้วยระบบที่เข้าใจคุณที่สุด
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <HoverEffect items={stepsHoverCards} />
          </div>

          <div className="text-center mt-12">
            <Link href="/register">
              <Button className="bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white h-12 px-8 rounded-full shadow-lg shadow-[#0B3C5D]/20 dark:shadow-[#1F77B4]/20 hover:shadow-xl transition-all font-semibold">
                สร้างโปรเจกต์แรกของคุณเลย
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="relative z-10 bg-white dark:bg-[#071629] py-12 border-t border-blue-100/50 dark:border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Box className="w-6 h-6 text-[#1F77B4] dark:text-blue-400" />
              <span className="font-semibold text-[#0B3C5D] dark:text-blue-200">
                BluePrint3D
              </span>
            </div>
            <p className="text-[#0B3C5D]/45 dark:text-blue-400/60 text-sm">
              © 2026 BluePrint3D. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
