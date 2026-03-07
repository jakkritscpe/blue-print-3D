'use client';

import { useState, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box as DreiBox, Plane } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Box,
  ChevronLeft,
  Undo,
  Redo,
  Save,
  Send,
  Check,
  Home,
  Square,
  Triangle,
  Circle,
  Layers,
  Droplets,
  Lightbulb,
  Fence,
  Maximize,
  Minimize,
  MousePointer,
  Hand,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Trash2,
  Copy,
  Palette,
  DollarSign,
  ArrowRight,
  Menu,
  Settings2,
  X
} from 'lucide-react';
import * as THREE from 'three';
import { ThemeToggle } from '@/components/theme-toggle';
import { AuroraBackground } from '@/components/ui/aurora-background';

// Step Progress Component
const StepProgress = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: 'เลือกทำเล', step: 1 },
    { label: 'ออกแบบ 3D', step: 2 },
    { label: 'ยืนยัน', step: 3 }
  ];

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2">
        {steps.map((s, index) => (
          <div key={s.step} className="flex items-center">
            <div className={`flex flex-col items-center ${
              s.step === currentStep ? 'text-foreground' :
              s.step < currentStep ? 'text-primary' :
              'text-muted-foreground'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                s.step === currentStep ? 'bg-primary text-primary-foreground' :
                s.step < currentStep ? 'bg-primary/70 text-primary-foreground' :
                'bg-muted text-muted-foreground'
              }`}>
                {s.step < currentStep ? <Check className="w-4 h-4" /> : s.step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 mx-2 ${s.step < currentStep ? 'bg-primary/70' : 'bg-border'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// 3D Scene — Blueprint Tech palette
function Scene3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Ground Plane — soft blueprint bg */}
      <Plane
        args={[50, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#D4E8F5" />
      </Plane>

      {/* Grid Helper — blueprint blue tones */}
      <primitive object={new THREE.GridHelper(50, 50, 0x1F77B4, 0xC8D8F0)} position={[0, -0.49, 0]} />

      {/* House Base — deep navy */}
      <DreiBox
        ref={meshRef}
        args={[4, 0.2, 4]}
        position={[0, 0.1, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#0B3C5D" />
      </DreiBox>

      {/* Walls — soft bg */}
      <DreiBox args={[3.8, 3, 3.8]} position={[0, 1.7, 0]} castShadow>
        <meshStandardMaterial color="#E6F2FA" />
      </DreiBox>

      {/* Roof — blueprint blue */}
      <DreiBox args={[4.2, 0.3, 4.2]} position={[0, 3.5, 0]} castShadow>
        <meshStandardMaterial color="#1F77B4" />
      </DreiBox>
    </>
  );
}

const componentCategories = {
  roof: {
    label: 'หลังคา',
    icon: <Triangle className="w-4 h-4" />,
    items: [
      { name: 'หลังคาทรงโมเดิร์น', price: 150000 },
      { name: 'หลังคาทรงไทย', price: 180000 },
      { name: 'หลังคาทรงจั่ว', price: 120000 },
      { name: 'หลังคาโค้ง', price: 200000 },
      { name: 'หลังคาทรงปั้นหยา', price: 160000 }
    ]
  },
  walls: {
    label: 'ผนัง',
    icon: <Square className="w-4 h-4" />,
    items: [
      { name: 'อิฐมอญ', price: 85000 },
      { name: 'อิฐบล็อก', price: 65000 },
      { name: 'คอนกรีต', price: 120000 },
      { name: 'ไม้สัก', price: 150000 },
      { name: 'ผนังกระจก', price: 180000 }
    ]
  },
  floor: {
    label: 'พื้น',
    icon: <Layers className="w-4 h-4" />,
    items: [
      { name: 'กระเบื้องเซรามิค', price: 45000 },
      { name: 'หินแกรนิต', price: 85000 },
      { name: 'ไม้ปาร์เก้', price: 120000 },
      { name: 'พื้นปูน', price: 25000 },
      { name: 'กระเบื้องยาง', price: 55000 }
    ]
  },
  structure: {
    label: 'โครงสร้าง',
    icon: <Box className="w-4 h-4" />,
    items: [
      { name: 'โครงเหล็ก', price: 250000 },
      { name: 'โครงไม้', price: 180000 },
      { name: 'โครงคอนกรีต', price: 320000 },
      { name: 'โครงสำเร็จรูป', price: 280000 }
    ]
  },
  pool: {
    label: 'สระว่ายน้ำ',
    icon: <Droplets className="w-4 h-4" />,
    items: [
      { name: 'สระระบบเกลือ 3x6m', price: 280000 },
      { name: 'สระคลอรีน 4x8m', price: 350000 },
      { name: 'สระอินฟินิตี้ 5x10m', price: 550000 },
      { name: 'จacuzzi ส่วนตัว', price: 180000 }
    ]
  },
  fence: {
    label: 'กำแพง/รั้ว',
    icon: <Fence className="w-4 h-4" />,
    items: [
      { name: 'รั้วเหล็ก', price: 45000 },
      { name: 'รั้วคอนกรีต', price: 65000 },
      { name: 'กำแพงอิฐ', price: 85000 },
      { name: 'รั้วไม้', price: 55000 }
    ]
  },
  electrical: {
    label: 'ระบบไฟ',
    icon: <Lightbulb className="w-4 h-4" />,
    items: [
      { name: 'ระบบไฟ 3 เฟส', price: 85000 },
      { name: 'ระบบไฟ 1 เฟส', price: 45000 },
      { name: 'ไฟ LED ทั้งหลัง', price: 65000 },
      { name: 'ระบบ Smart Home', price: 150000 }
    ]
  }
};

export default function BuildPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('roof');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(1250000);
  const [saved, setSaved] = useState(false);
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleSubmit = () => {
    router.push('/project/done');
  };

  const addItem = (item: string, price: number) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setTotalPrice(prev => prev + price);
    }
  };

  return (
    <AuroraBackground className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-card/85 dark:bg-background/85 backdrop-blur-md border-b border-border h-14 flex items-center justify-between px-2 sm:px-4 shrink-0 z-50">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Box className="w-6 h-6 text-primary dark:text-accent" />
            <span className="text-base font-semibold text-foreground hidden md:block">BluePrint3D</span>
          </Link>
          <Separator orientation="vertical" className="h-6 mx-1 sm:mx-2 hidden sm:block" />
          <div className="hidden sm:block">
            <StepProgress currentStep={2} />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Undo className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo (Ctrl+Z)</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Redo className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo (Ctrl+Y)</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Separator orientation="vertical" className="h-6 mx-2" />

          <Button
            variant="outline"
            size="sm"
            onClick={handleSave}
            className={saved ? 'text-green-600 border-green-600' : ''}
          >
            <Save className="w-4 h-4 mr-2" />
            {saved ? 'บันทึกแล้ว' : 'บันทึก'}
          </Button>

          <Button size="sm" onClick={handleSubmit} className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 px-2 sm:px-3">
            <Send className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
            <span className="hidden sm:inline">ส่งแบบ</span>
          </Button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* Mobile Overlay for Left Panel */}
        <AnimatePresence>
          {isLeftPanelOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsLeftPanelOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Left Sidebar — Components */}
        <aside
          className={`bg-card border-r border-border flex flex-col shrink-0 absolute lg:static h-full z-50 transition-transform duration-300 ease-in-out w-72 lg:w-64
            ${isLeftPanelOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >
          <div className="p-3 border-b border-border flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">ส่วนประกอบบ้าน</h2>
            <Button variant="ghost" size="icon" className="h-6 w-6 lg:hidden" onClick={() => setIsLeftPanelOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <TabsList className="flex flex-wrap h-auto bg-muted/50 p-1 gap-1 rounded-none">
              {Object.entries(componentCategories).map(([key, category]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex-1 min-w-[60px] h-auto py-2 px-1 data-[state=active]:bg-card data-[state=active]:shadow-sm"
                >
                  <div className="flex flex-col items-center gap-1">
                    {category.icon}
                    <span className="text-[10px]">{category.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <ScrollArea className="flex-1 p-3">
              {Object.entries(componentCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="space-y-2">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card
                          className={`cursor-pointer transition-colors ${
                            selectedItems.includes(item.name)
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => addItem(item.name, item.price)}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-foreground">{item.name}</span>
                              {selectedItems.includes(item.name) && (
                                <Check className="w-4 h-4 text-primary dark:text-accent" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              ฿{item.price.toLocaleString()}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </ScrollArea>
          </Tabs>
        </aside>

        {/* Center — 3D Viewport */}
        <main className="flex-1 relative bg-muted/30">
          {/* 3D Toolbar */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-card rounded-lg shadow-lg px-3 py-2 border border-border">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hidden sm:inline-flex">
                    <MousePointer className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>เลือก (V)</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 hidden sm:inline-flex">
                    <Hand className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>เลื่อน (H)</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Separator orientation="vertical" className="h-6 hidden sm:block" />

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>ซูมเข้า</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>ซูมออก</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <RotateCw className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>รีเซ็ตมุมมอง</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* 3D Canvas */}
          <Canvas
            shadows
            camera={{ position: [15, 15, 15], fov: 45 }}
            className="w-full h-full"
            style={{ width: '100%', height: '100%', touchAction: 'none' }}
          >
            <Suspense fallback={null}>
              <Scene3D />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={5}
                maxDistance={50}
                maxPolarAngle={Math.PI / 2 - 0.1}
              />
            </Suspense>
          </Canvas>

          {/* View Mode */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
            <Button variant="secondary" size="sm" className="shadow-lg">
              <Home className="w-4 h-4 mr-2" />
              มุมมองบ้าน
            </Button>
            <Button variant="ghost" size="sm" className="bg-card/80 shadow-lg border border-border">
              <Maximize className="w-4 h-4 mr-2" />
              มุมมองภายใน
            </Button>
          </div>

          {/* Mobile Floating Action Buttons */}
          <div className="absolute bottom-20 left-4 z-10 lg:hidden flex flex-col gap-2">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-xl bg-primary text-primary-foreground"
              onClick={() => setIsLeftPanelOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          <div className="absolute bottom-20 right-4 z-10 lg:hidden flex flex-col gap-2">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-xl bg-card text-foreground border-2 border-border"
              onClick={() => setIsRightPanelOpen(true)}
            >
              <Settings2 className="w-5 h-5" />
            </Button>
          </div>
        </main>

        {/* Mobile Overlay for Right Panel */}
        <AnimatePresence>
          {isRightPanelOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsRightPanelOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Right Sidebar — Properties */}
        <aside
          className={`bg-card border-l border-border flex flex-col shrink-0 absolute right-0 lg:static h-full z-50 transition-transform duration-300 ease-in-out w-80 lg:w-72
            ${isRightPanelOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
        >
          {/* Price Summary */}
          <div className="p-4 border-b border-border bg-primary/5 relative">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 absolute top-4 right-4 lg:hidden"
              onClick={() => setIsRightPanelOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 mb-2 pr-6">
              <DollarSign className="w-5 h-5 text-primary dark:text-accent" />
              <h3 className="font-semibold text-foreground">ราคาประเมิน</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">฿{totalPrice.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">*ราคาโดยประมาณ อาจมีการเปลี่ยนแปลง</p>
          </div>

          {/* Selected Items */}
          <div className="p-3 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3">รายการที่เลือก</h3>
            <ScrollArea className="h-40">
              <div className="space-y-2">
                {selectedItems.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    ยังไม่มีรายการที่เลือก
                  </p>
                ) : (
                  selectedItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                      <span className="text-sm text-foreground">{item}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => {
                          setSelectedItems(selectedItems.filter((_, i) => i !== index));
                        }}
                      >
                        <Trash2 className="w-3 h-3 text-destructive" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Properties Panel */}
          <div className="flex-1 p-3">
            <h3 className="text-sm font-semibold text-foreground mb-3">คุณสมบัติ</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">วัสดุ</label>
                <select className="w-full text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>เลือกวัสดุ...</option>
                  <option>ปูนซีเมนต์</option>
                  <option>ไม้เนื้อแข็ง</option>
                  <option>เหล็กกล้า</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">สี</label>
                <div className="flex gap-2">
                  {['#E6F2FA', '#C8D8F0', '#1F77B4', '#0B3C5D', '#00AEEF', '#0F172A'].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-lg border-2 border-border shadow-sm hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">ขนาด</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Minimize className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-foreground flex-1 text-center">100%</span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Maximize className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 border-t border-border space-y-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push('/project/location')}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              ย้อนกลับ
            </Button>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleSubmit}
            >
              ถัดไป
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </aside>
      </div>
    </AuroraBackground>
  );
}
