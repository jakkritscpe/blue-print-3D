'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronRight,
  Box,
  Layers,
  Home,
  Zap,
  Shield,
  Menu,
  X,
  Eye,
  MousePointer
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Box className="w-8 h-8" />,
      image: '/images/hero/feature-design.jpg',
      title: 'ออกแบบ 3D แบบ Real-time',
      description: 'เห็นผลลัพธ์ทันทีขณะออกแบบ ด้วยเทคโนโลยี 3D ที่ทันสมัย'
    },
    {
      icon: <Layers className="w-8 h-8" />,
      image: '/images/hero/feature-materials.jpg',
      title: 'เลือกวัสดุได้ไม่จำกัด',
      description: 'หลังคา ผนัง พื้น ของตกแต่ง ปรับแต่งได้ตามใจคุณ'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      image: '/images/hero/feature-price.jpg',
      title: 'ประเมินราคาทันที',
      description: 'รู้ราคาโดยประมาณขณะออกแบบ วางแผนงบประมาณได้ง่าย'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      image: '/images/hero/feature-team.jpg',
      title: 'ทีมงานมืออาชีพ',
      description: 'แบบของคุณจะถูกตรวจสอบโดยสถาปนิกและวิศวกร'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Box className="w-8 h-8 text-stone-800" />
              <span className="text-xl font-semibold text-stone-800">BluePrint3D</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-stone-600 hover:text-stone-900 transition-colors">
                จุดเด่น
              </Link>
              <Link href="#preview" className="text-stone-600 hover:text-stone-900 transition-colors">
                ทดลองใช้
              </Link>
              <Link href="#pricing" className="text-stone-600 hover:text-stone-900 transition-colors">
                ราคา
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="text-stone-600 hover:text-stone-900">
                  เข้าสู่ระบบ
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-stone-800 hover:bg-stone-700 text-white">
                  สมัครสมาชิก
                </Button>
              </Link>
            </div>

            <button
              className="md:hidden p-3 -mr-3 flex items-center justify-center rounded-lg hover:bg-stone-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-stone-800" /> : <Menu className="w-6 h-6 text-stone-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-stone-100"
          >
            <div className="px-4 py-4 space-y-2">
              <Link href="#features" className="block text-stone-600 py-3 hover:bg-stone-50 px-2 rounded-lg">จุดเด่น</Link>
              <Link href="#preview" className="block text-stone-600 py-3 hover:bg-stone-50 px-2 rounded-lg">ทดลองใช้</Link>
              <Link href="#pricing" className="block text-stone-600 py-3 hover:bg-stone-50 px-2 rounded-lg">ราคา</Link>
              <hr className="border-stone-100 my-2" />
              <Link href="/login" className="block">
                <Button variant="ghost" className="w-full justify-start h-12 text-base">เข้าสู่ระบบ</Button>
              </Link>
              <Link href="/register" className="block">
                <Button className="w-full bg-stone-800 text-white h-12 text-base">สมัครสมาชิก</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-stone-100 text-stone-700 hover:bg-stone-200 border-0">
                แพลตฟอร์มออกแบบบ้าน 3D อันดับ 1
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
                ออกแบบบ้านในฝันของคุณ
                <span className="text-stone-500"> ด้วยตัวเอง</span>
              </h1>
              <p className="text-lg text-stone-600 mb-8 max-w-lg">
                สร้างแบบบ้าน 3D ที่สวยงามและเป็นไปได้จริง
                พร้อมประเมินราคาและคำปรึกษาจากทีมงานมืออาชีพ
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-stone-800 hover:bg-stone-700 text-white px-8">
                    เริ่มออกแบบฟรี
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#preview">
                  <Button size="lg" variant="outline" className="border-stone-300">
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
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Hero Image */}
                <Image
                  src="/images/hero/hero-3d.jpg"
                  alt="3D House Design Preview"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-8 right-8 bg-white rounded-xl p-4 shadow-lg z-10"
                >
                  <Home className="w-6 h-6 text-stone-700" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-lg z-10"
                >
                  <Layers className="w-6 h-6 text-stone-700" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">จุดเด่นของระบบ</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              ทุกฟีเจอร์ถูกออกแบบมาเพื่อให้คุณออกแบบบ้านได้ง่าย รวดเร็ว และเป็นมืออาชีพ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-0 h-full bg-white border-stone-100 hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-40 w-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-4 text-stone-700">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">{feature.title}</h3>
                    <p className="text-stone-600 text-sm">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section id="preview" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative bg-stone-100 rounded-3xl aspect-video overflow-hidden shadow-inner">
                <Image
                  src="/images/hero/hero-3d.jpg"
                  alt="Interactive 3D Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="text-center text-white">
                    <MousePointer className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive 3D Preview</p>
                    <p className="text-sm opacity-80 mt-2">ลองหมุน ซูม และสำรวจบ้านตัวอย่าง</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <Badge className="mb-4 bg-stone-100 text-stone-700 border-0">ทดลองใช้งาน</Badge>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">
                สำรวจความเป็นไปได้ก่อนเริ่มต้น
              </h2>
              <p className="text-stone-600 mb-6">
                ดูตัวอย่างบ้าน 3D ที่ออกแบบด้วยระบบของเรา
                สัมผัสประสบการณ์การใช้งานที่ลื่นไหลและสมจริง
              </p>
              <ul className="space-y-3 mb-8">
                {['หมุนดูจากทุกมุมมอง', 'ซูมเข้าไปดูรายละเอียด', 'เปลี่ยนวัสดุได้'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-6 h-6 bg-stone-200 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-stone-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/register">
                <Button className="bg-stone-800 hover:bg-stone-700 text-white">
                  สมัครสมาชิกเพื่อใช้งานเต็มรูปแบบ
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            พร้อมที่จะสร้างบ้านในฝันแล้วหรือยัง?
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            สมัครสมาชิกฟรีวันนี้ และเริ่มออกแบบบ้าน 3D ของคุณได้ทันที
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100 px-8">
                เริ่มต้นฟรี
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-stone-600 text-white hover:bg-stone-800">
                เข้าสู่ระบบ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 py-12 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Box className="w-6 h-6 text-stone-600" />
              <span className="font-semibold text-stone-700">BluePrint3D</span>
            </div>
            <p className="text-stone-500 text-sm">
              © 2026 BluePrint3D. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
