'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Box, ChevronLeft, MapPin, Maximize, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const locations = [
  {
    id: 1,
    name: 'โครงการ สุขุมวิท การ์เด้น',
    address: 'ซอยสุขุมวิท 50, แขวงพระโขนง, เขตคลองเตย, กรุงเทพฯ',
    size: '200-500 ตร.ว.',
    price: '25,000-45,000 บาท/ตร.ว.',
    features: ['ใกล้ BTS', 'แหล่งชุมชน', 'โรงพยาบาล'],
    image: '/images/locations/location-1.jpg'
  },
  {
    id: 2,
    name: 'โครงการ รามอินทรา วิลล์',
    address: 'ซอยรามอินทรา 109, แขวงมีนบุรี, เขตมีนบุรี, กรุงเทพฯ',
    size: '300-800 ตร.ว.',
    price: '15,000-25,000 บาท/ตร.ว.',
    features: ['ใกล้ทางด่วน', 'รร.นานาชาติ', 'สวนสาธารณะ'],
    image: '/images/locations/location-2.jpg'
  },
  {
    id: 3,
    name: 'โครงการ ลาดพร้าว เรสซิเดนซ์',
    address: 'ซอยลาดพร้าว 71, แขวงลาดพร้าว, เขตลาดพร้าว, กรุงเทพฯ',
    size: '150-400 ตร.ว.',
    price: '35,000-55,000 บาท/ตร.ว.',
    features: ['ใกล้ MRT', 'ห้างสรรพสินค้า', 'ย่านธุรกิจ'],
    image: '/images/locations/location-3.jpg'
  },
  {
    id: 4,
    name: 'โครงการ รังสิต วัลเล่ย์',
    address: 'ถนนรังสิต-นครนายก, อำเภอธัญบุรี, ปทุมธานี',
    size: '400-1000 ตร.ว.',
    price: '8,000-15,000 บาท/ตร.ว.',
    features: ['บรรยากาศดี', 'ที่ดินกว้าง', 'ใกล้ฟิวเจอร์พาร์ค'],
    image: '/images/locations/location-4.jpg'
  },
  {
    id: 5,
    name: 'โครงการ บางนา ทาวน์',
    address: 'ถนนบางนา-ตราด กม. 7, แขวงบางนา, เขตบางนา, กรุงเทพฯ',
    size: '200-600 ตร.ว.',
    price: '30,000-50,000 บาท/ตร.ว.',
    features: ['ใกล้นิคมฯ', 'สนามบินสุวรรณภูมิ', 'BITECH'],
    image: '/images/locations/location-5.jpg'
  },
  {
    id: 6,
    name: 'โครงการ ปิ่นเกล้า โฮม',
    address: 'ถนนบรมราชชนนี, แขวงบางพลัด, เขตบางพลัด, กรุงเทพฯ',
    size: '250-500 ตร.ว.',
    price: '20,000-35,000 บาท/ตร.ว.',
    features: ['ใกล้สะพาน', 'แหล่งราชการ', 'วัดวาอาราม'],
    image: '/images/locations/location-6.jpg'
  }
];

const StepProgress = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: 'เลือกทำเล', step: 1 },
    { label: 'ออกแบบ 3D', step: 2 },
    { label: 'ยืนยัน', step: 3 }
  ];

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center gap-2 sm:gap-4">
        {steps.map((s, index) => (
          <div key={s.step} className="flex items-center">
            <div className={`flex flex-col items-center ${s.step === currentStep ? 'text-foreground' : s.step < currentStep ? 'text-primary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${
                s.step === currentStep ? 'bg-primary text-primary-foreground' :
                s.step < currentStep ? 'bg-primary/70 text-primary-foreground' :
                'bg-muted text-muted-foreground'
              }`}>
                {s.step < currentStep ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s.step}
              </div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 font-medium">{s.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${s.step < currentStep ? 'bg-primary/70' : 'bg-border'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LocationSelectionPage() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedLocation) {
      router.push('/project/build');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <Box className="w-7 h-7 text-primary dark:text-accent" />
                <span className="text-lg font-semibold text-foreground">BluePrint3D</span>
              </Link>
            </div>
            <span className="text-sm text-muted-foreground">ขั้นตอนที่ 1 จาก 3</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-3">เลือกทำเลที่ตั้ง</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              เลือกทำเลที่ตั้งสำหรับโครงการของคุณ ข้อมูลพื้นที่จะถูกนำไปใช้ในการออกแบบ 3D
            </p>
          </div>

          <StepProgress currentStep={1} />

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {locations.map((location) => (
              <motion.div
                key={location.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className={`border-2 cursor-pointer transition-all h-full overflow-hidden p-0 gap-0 flex flex-col ${
                    selectedLocation === location.id
                      ? 'border-primary shadow-lg shadow-primary/10'
                      : 'border-border hover:border-primary/40'
                  }`}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <div className="relative h-48 sm:h-52 w-full bg-muted flex-shrink-0">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader className="pt-6 pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-foreground">{location.name}</CardTitle>
                      {selectedLocation === location.id && (
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <CardDescription className="flex items-start gap-1 mt-1">
                      <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      {location.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 pb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Maximize className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">ขนาดพื้นที่:</span>
                      <span className="font-medium text-foreground">{location.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">ราคาเริ่มต้น:</span>
                      <span className="font-medium text-foreground">{location.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {location.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="bg-muted text-muted-foreground">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto text-muted-foreground">
                <ChevronLeft className="w-4 h-4 mr-2" />
                ยกเลิก
              </Button>
            </Link>
            <Button
              onClick={handleNext}
              disabled={!selectedLocation}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              size="lg"
            >
              ถัดไป
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
