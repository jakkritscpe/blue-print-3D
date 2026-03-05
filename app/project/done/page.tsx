'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Box,
  CheckCircle,
  Clock,
  Home,
  DollarSign,
  FileText,
  Copy,
  ArrowLeft,
  Share2,
  Download,
  Check
} from 'lucide-react';

// Step Progress Component
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
            <div className={`flex flex-col items-center ${s.step === currentStep ? 'text-stone-900' : s.step < currentStep ? 'text-stone-600' : 'text-stone-400'}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${s.step === currentStep ? 'bg-stone-800 text-white' :
                  s.step < currentStep ? 'bg-stone-600 text-white' :
                    'bg-stone-200 text-stone-500'
                }`}>
                {s.step < currentStep ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s.step}
              </div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 font-medium">{s.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${s.step < currentStep ? 'bg-stone-600' : 'bg-stone-200'}`} />
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
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Box className="w-7 h-7 text-stone-800" />
                <span className="text-lg font-semibold text-stone-800">BluePrint3D</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-600">ขั้นตอนที่ 3 จาก 3</span>
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
          <Card className="border-stone-200 mb-8">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-stone-900 mb-4">
                ระบบได้รับข้อมูลแล้ว
              </h1>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-6">
                กรุณารอการติดต่อกลับภายใน <span className="font-semibold text-stone-900">1-3 วันทำการ</span>
                <br />
                ทีมงานจะตรวจสอบแบบและส่งใบเสนอราคาอย่างละเอียดให้คุณ
              </p>

              <div className="flex items-center justify-center gap-2 mb-8">
                <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50 px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  สถานะ: รอติดต่อกลับ
                </Badge>
              </div>

              {/* Reference Number */}
              <div className="bg-stone-100 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-sm text-stone-600 mb-2">เลขอ้างอิงโปรเจกต์</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-mono font-bold text-stone-900">{projectRef}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => copyToClipboard(projectRef)}
                  >
                    <Copy className="w-4 h-4 text-stone-600" />
                  </Button>
                </div>
                <p className="text-xs text-stone-500 mt-2">บันทึกเลขอ้างอิงนี้ไว้เพื่อติดตามสถานะ</p>
              </div>
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Price Summary */}
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <DollarSign className="w-5 h-5 text-stone-600" />
                  ราคาประเมิน
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-stone-900 mb-2">
                  ฿{estimatedPrice.toLocaleString()}
                </p>
                <p className="text-sm text-stone-500">
                  *ราคาโดยประมาณ อาจมีการเปลี่ยนแปลงตามเงื่อนไขจริง
                </p>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600">ค่าวัสดุก่อสร้าง</span>
                    <span className="text-stone-900">฿{(estimatedPrice * 0.6).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600">ค่าแรง</span>
                    <span className="text-stone-900">฿{(estimatedPrice * 0.3).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600">ค่าอื่นๆ</span>
                    <span className="text-stone-900">฿{(estimatedPrice * 0.1).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Items */}
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="w-5 h-5 text-stone-600" />
                  รายการที่เลือก
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {selectedItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0">
                      <span className="text-sm text-stone-700">{item.name}</span>
                      <span className="text-sm font-medium text-stone-900">฿{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="border-stone-200 mb-8">
            <CardHeader>
              <CardTitle className="text-lg">ขั้นตอนต่อไป</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-stone-700">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">ตรวจสอบแบบโดยสถาปนิก</h3>
                    <p className="text-sm text-stone-600">ทีมสถาปนิกจะตรวจสอบความเป็นไปได้ของแบบบ้าน</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-stone-700">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">ประเมินราคาละเอียด</h3>
                    <p className="text-sm text-stone-600">รับใบเสนอราคาอย่างละเอียดภายใน 3 วันทำการ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-stone-700">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900">นัดหมายพบทีมงาน</h3>
                    <p className="text-sm text-stone-600">พบทีมงานเพื่อปรับแก้แบบและเซ็นสัญญา</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" className="border-stone-300 w-full">
                <Home className="w-4 h-4 mr-2" />
                กลับไปที่แดชบอร์ด
              </Button>
            </Link>
            <Button variant="outline" className="border-stone-300 w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              ดาวน์โหลดใบเสนอราคา
            </Button>
            <Button variant="outline" className="border-stone-300 w-full sm:w-auto">
              <Share2 className="w-4 h-4 mr-2" />
              แชร์โปรเจกต์
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
