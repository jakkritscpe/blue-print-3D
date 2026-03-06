'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Box, CheckCircle, Clock, Home, DollarSign,
  FileText, Copy, Download, Share2, Check, ArrowLeft
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const StepProgress = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: 'เลือกทำเล', step: 1 },
    { label: 'ออกแบบ 3D', step: 2 },
    { label: 'ยืนยัน', step: 3 }
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2 sm:gap-4">
        {steps.map((s, index) => (
          <div key={s.step} className="flex items-center">
            <div className={`flex flex-col items-center ${s.step === currentStep ? 'text-[#0B2454] dark:text-blue-50' : s.step < currentStep ? 'text-[#1F77B4] dark:text-blue-300' : 'text-[#0B3C5D]/35 dark:text-blue-600/50'}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold backdrop-blur-sm ${
                s.step === currentStep
                  ? 'bg-[#0B3C5D] dark:bg-[#1F77B4] text-white shadow-lg shadow-[#0B3C5D]/25'
                  : s.step < currentStep
                    ? 'bg-[#1F77B4]/80 dark:bg-blue-600/60 text-white'
                    : 'bg-white/50 dark:bg-white/10 border border-white/40 dark:border-white/15 text-[#0B3C5D]/50 dark:text-blue-400/60'
              }`}>
                {s.step < currentStep ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s.step}
              </div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 font-medium">{s.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${s.step < currentStep ? 'bg-[#1F77B4]/60 dark:bg-blue-600/40' : 'bg-white/40 dark:bg-white/12'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DonePage() {
  const projectRef = 'BP3D-2026-0042';
  const estimatedPrice = 4850000;
  const selectedItems = [
    { name: 'หลังคาทรงโมเดิร์น', price: 150000 },
    { name: 'อิฐมอญ (ผนัง)', price: 85000 },
    { name: 'กระเบื้องเซรามิค (พื้น)', price: 45000 },
    { name: 'โครงเหล็ก', price: 250000 },
    { name: 'สระระบบเกลือ 3x6m', price: 280000 },
    { name: 'รั้วเหล็ก', price: 45000 },
    { name: 'ระบบไฟ 3 เฟส', price: 85000 },
    { name: 'ระบบประปา', price: 45000 },
    { name: 'ฝ้าเพดาน', price: 65000 },
    { name: 'ของตกแต่งภายใน', price: 120000 }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C8D8F8] via-[#D0DFF8] to-[#B8CCFF] dark:from-[#071629] dark:via-[#091C38] dark:to-[#0B2148]">
      {/* Header */}
      <header className="bg-white/70 dark:bg-[#0C1F3F]/70 backdrop-blur-md border-b border-white/40 dark:border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Box className="w-7 h-7 text-[#0B3C5D] dark:text-blue-300" />
                <span className="text-lg font-semibold text-[#0B3C5D] dark:text-blue-100">BluePrint3D</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#0B3C5D]/55 dark:text-blue-300/70">ขั้นตอนที่ 3 จาก 3</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <StepProgress currentStep={3} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Success Card */}
          <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-xl shadow-blue-200/30 dark:shadow-black/30 mb-8">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 bg-green-100/70 dark:bg-green-900/25 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-green-200/40 dark:border-green-700/30">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-3xl font-bold text-[#0B2454] dark:text-blue-50 mb-4">
                ระบบได้รับข้อมูลแล้ว
              </h1>
              <p className="text-lg text-[#0B3C5D]/60 dark:text-blue-300/70 max-w-2xl mx-auto mb-6">
                กรุณารอการติดต่อกลับภายใน <span className="font-semibold text-[#0B2454] dark:text-blue-100">1-3 วันทำการ</span>
                <br />
                ทีมงานจะตรวจสอบแบบและส่งใบเสนอราคาอย่างละเอียดให้คุณ
              </p>

              <div className="flex items-center justify-center gap-2 mb-8">
                <Badge variant="outline" className="border-amber-200/60 dark:border-amber-700/40 text-amber-600 dark:text-amber-400 bg-amber-50/60 dark:bg-amber-900/20 backdrop-blur-sm px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  สถานะ: รอติดต่อกลับ
                </Badge>
              </div>

              {/* Reference Number */}
              <div className="bg-blue-50/60 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto border border-blue-100/50 dark:border-blue-700/25">
                <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-400/65 mb-2">เลขอ้างอิงโปรเจกต์</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-mono font-bold text-[#0B2454] dark:text-blue-50">{projectRef}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-[#0B3C5D]/50 dark:text-blue-400/60 hover:text-[#1F77B4] dark:hover:text-blue-300"
                    onClick={() => copyToClipboard(projectRef)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-[#0B3C5D]/45 dark:text-blue-400/55 mt-2">บันทึกเลขอ้างอิงนี้ไว้เพื่อติดตามสถานะ</p>
              </div>
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Price Summary */}
            <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-lg shadow-blue-200/25 dark:shadow-black/25">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-[#0B2454] dark:text-blue-50">
                  <DollarSign className="w-5 h-5 text-[#1F77B4] dark:text-blue-300" />
                  ราคาประเมิน
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-[#0B2454] dark:text-blue-50 mb-2">
                  ฿{estimatedPrice.toLocaleString()}
                </p>
                <p className="text-sm text-[#0B3C5D]/50 dark:text-blue-400/60">
                  *ราคาโดยประมาณ อาจมีการเปลี่ยนแปลงตามเงื่อนไขจริง
                </p>
                <Separator className="my-4 bg-white/40 dark:bg-white/10" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0B3C5D]/55 dark:text-blue-400/65">ค่าวัสดุก่อสร้าง</span>
                    <span className="text-[#0B2454] dark:text-blue-100">฿{(estimatedPrice * 0.6).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0B3C5D]/55 dark:text-blue-400/65">ค่าแรง</span>
                    <span className="text-[#0B2454] dark:text-blue-100">฿{(estimatedPrice * 0.3).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0B3C5D]/55 dark:text-blue-400/65">ค่าอื่นๆ</span>
                    <span className="text-[#0B2454] dark:text-blue-100">฿{(estimatedPrice * 0.1).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Items */}
            <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-lg shadow-blue-200/25 dark:shadow-black/25">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg text-[#0B2454] dark:text-blue-50">
                  <FileText className="w-5 h-5 text-[#1F77B4] dark:text-blue-300" />
                  รายการที่เลือก
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-white/30 dark:border-white/8 last:border-0">
                      <span className="text-sm text-[#0B3C5D] dark:text-blue-200">{item.name}</span>
                      <span className="text-sm font-medium text-[#0B2454] dark:text-blue-50">฿{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-lg shadow-blue-200/25 dark:shadow-black/25 mb-8">
            <CardHeader>
              <CardTitle className="text-lg text-[#0B2454] dark:text-blue-50">ขั้นตอนต่อไป</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: 'ตรวจสอบแบบโดยสถาปนิก', desc: 'ทีมสถาปนิกจะตรวจสอบความเป็นไปได้ของแบบบ้าน' },
                  { title: 'ประเมินราคาละเอียด', desc: 'รับใบเสนอราคาอย่างละเอียดภายใน 3 วันทำการ' },
                  { title: 'นัดหมายพบทีมงาน', desc: 'พบทีมงานเพื่อปรับแก้แบบและเซ็นสัญญา' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-50/70 dark:bg-blue-900/25 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100/50 dark:border-blue-700/30">
                      <span className="text-sm font-semibold text-[#1F77B4] dark:text-blue-300">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0B2454] dark:text-blue-50">{item.title}</h3>
                      <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-400/65">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200 w-full hover:bg-white/70 dark:hover:bg-white/12">
                <Home className="w-4 h-4 mr-2" />
                กลับไปที่แดชบอร์ด
              </Button>
            </Link>
            <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200 w-full sm:w-auto hover:bg-white/70 dark:hover:bg-white/12">
              <Download className="w-4 h-4 mr-2" />
              ดาวน์โหลดใบเสนอราคา
            </Button>
            <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200 w-full sm:w-auto hover:bg-white/70 dark:hover:bg-white/12">
              <Share2 className="w-4 h-4 mr-2" />
              แชร์โปรเจกต์
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
