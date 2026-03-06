'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ChevronRight,
  Box,
  Layers,
  Home,
  Zap,
  Shield,
  Eye,
  MousePointer,
  PenTool,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';

// Aceternity UI Components
import { FloatingNav } from '@/components/ui/floating-navbar';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Highlight } from '@/components/ui/hero-highlight';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function HomePage() {
  const navItems = [
    { name: 'หน้าหลัก', link: '#', icon: <Home className="w-4 h-4" /> },
    { name: 'จุดเด่น', link: '#features', icon: <Zap className="w-4 h-4" /> },
    { name: 'ขั้นตอน', link: '#preview', icon: <Layers className="w-4 h-4" /> },
  ];

  const features = [
    {
      title: 'ออกแบบ 3D แบบ Real-time',
      description: 'เห็นผลลัพธ์ทันทีขณะออกแบบ ด้วยเทคโนโลยี 3D ที่ทันสมัย',
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden relative">
          <Image src="/images/hero/feature-design.jpg" alt="Design" fill className="object-cover" />
        </div>
      ),
      icon: <Box className="w-5 h-5" />,
      className: "md:col-span-2",
    },
    {
      title: 'เลือกวัสดุได้ไม่จำกัด',
      description: 'หลังคา ผนัง พื้น ตกแต่งได้ตามต้องการ',
      header: (
         <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden relative">
          <Image src="/images/hero/feature-materials.jpg" alt="Materials" fill className="object-cover" />
        </div>
      ),
      icon: <Layers className="w-5 h-5" />,
      className: "md:col-span-1",
    },
    {
      title: 'ประเมินราคาทันที',
      description: 'รู้ราคาโดยประมาณ วางแผนงบได้อย่างแม่นยำ',
      header: (
         <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden relative">
          <Image src="/images/hero/feature-price.jpg" alt="Price" fill className="object-cover" />
        </div>
      ),
      icon: <Zap className="w-5 h-5" />,
      className: "md:col-span-1",
    },
    {
      title: 'ทีมงานมืออาชีพตรวจสอบ',
      description: 'สถาปนิกและวิศวกรพร้อมให้คำปรึกษาตลอดการออกแบบ',
      header: (
         <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-stone-100 dark:bg-stone-800 overflow-hidden relative">
          <Image src="/images/hero/feature-team.jpg" alt="Team" fill className="object-cover" />
        </div>
      ),
      icon: <Shield className="w-5 h-5" />,
      className: "md:col-span-2",
    }
  ];

  const stepsHoverCards = [
    {
      title: "1. เลือกพื้นที่ทำเล",
      description: "กำหนดขนาดที่ดินและขอบเขตพื้นที่เพื่อเริ่มต้นการออกแบบ",
      link: "#",
      icon: <MousePointer className="w-8 h-8" />
    },
    {
      title: "2. ออกแบบบ้าน 3D",
      description: "ใช้เครื่องมือ 3D วางโครงสร้าง เลือกวัสดุ และดูแบบแปลนได้ทันที",
      link: "#",
      icon: <PenTool className="w-8 h-8" />
    },
    {
      title: "3. ส่งแบบและประเมินราคา",
      description: "เมื่อพอใจกับแบบบ้านแล้ว ส่งให้วิศวกรประเมินราคาจริงได้อย่างรวดเร็ว",
      link: "#",
      icon: <CheckCircle2 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 selection:bg-stone-300 dark:selection:bg-stone-700">
      
      {/* 1. Floating Navbar */}
      <FloatingNav navItems={navItems} />

      {/* Brand Logo (Top Left) */}
      <div className="absolute top-4 left-4 sm:left-8 z-[6000] flex items-center gap-2">
        <Box className="w-8 h-8 text-stone-800 dark:text-stone-200" />
        <span className="text-xl font-semibold text-stone-800 dark:text-stone-200">BluePrint3D</span>
      </div>

      {/* Top action bar (for auth & theme) - Keep simple for mobile/desktop corner */}
      <div className="absolute top-4 right-4 sm:right-8 z-[6000] flex items-center gap-4">
        <ThemeToggle />
        <Link href="/login">
          <Button variant="ghost" className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-50 hidden sm:inline-flex">
            เข้าสู่ระบบ
          </Button>
        </Link>
        <Link href="/register">
          <Button className="bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-white text-white">
            เริ่มต้นฟรี
          </Button>
        </Link>
      </div>

      {/* 2. Hero Section with Aurora Background */}
      <AuroraBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left z-10"
            >
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
                  <Button size="lg" className="w-full sm:w-auto bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-white text-white px-8 h-12 lg:h-14 lg:text-lg rounded-xl">
                    เริ่มออกแบบฟรี
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#preview" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-stone-300 dark:border-stone-700 h-12 lg:h-14 lg:text-lg bg-white/50 dark:bg-stone-900/50 backdrop-blur-md rounded-xl">
                    <Eye className="w-5 h-5 mr-2" />
                    ดูตัวอย่าง
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 mt-8 lg:mt-0"
            >
              <div className="relative bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-900 rounded-[2rem] p-2 sm:p-4 aspect-square max-w-[500px] lg:max-w-none mx-auto w-full flex items-center justify-center overflow-hidden shadow-2xl border border-white/20 dark:border-stone-700/50">
                <Image
                  src="/images/hero/hero-3d.jpg"
                  alt="3D House Design Preview"
                  fill
                  className="object-cover rounded-[1.5rem] p-1"
                  priority
                />
                
                {/* Parallax Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-stone-100 dark:border-stone-800"
                >
                  <Home className="w-6 h-6 text-stone-700 dark:text-stone-300" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 left-8 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-stone-100 dark:border-stone-800"
                >
                  <Layers className="w-6 h-6 text-stone-700 dark:text-stone-300" />
                </motion.div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </AuroraBackground>

      {/* 3. Features Section with Bento Grid */}
      <section id="features" className="py-24 relative z-20 bg-white dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-stone-500 dark:from-stone-100 dark:to-stone-400 mb-4 lg:mb-6">
              สร้างสรรค์ไร้ขีดจำกัด
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-base sm:text-lg mb-8">
              ทุกฟีเจอร์ถูกออกแบบมาเพื่อให้คุณออกแบบบ้านได้ง่าย รวดเร็ว และดูเป็นมืออาชีพที่สุด
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

      {/* 4. Steps Section with Hover Effect Cards */}
      <section id="preview" className="py-24 relative z-10 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="mb-4 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-stone-700">ขั้นตอนการทำงาน</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 dark:text-white mb-4 lg:mb-6">
              เริ่มต้นง่ายๆ เพียง 3 ขั้นตอน
            </h2>
            <p className="text-stone-600 dark:text-stone-300 max-w-2xl mx-auto text-base sm:text-lg">
              ออกแบบบ้านของคุณได้เสร็จสมบูรณ์ พร้อมนำไปสร้างจริง ด้วยระบบที่เข้าใจคุณที่สุด
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

      {/* Footer */}
      <footer className="relative z-10 bg-white dark:bg-stone-950 py-12 border-t border-stone-200 dark:border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Box className="w-6 h-6 text-stone-600 dark:text-stone-400" />
              <span className="font-semibold text-stone-700 dark:text-stone-300">BluePrint3D</span>
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
