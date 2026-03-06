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
            <div className={`flex flex-col items-center ${s.step === currentStep ? 'text-stone-900 dark:text-stone-50' : s.step < currentStep ? 'text-stone-600 dark:text-stone-400' : 'text-stone-400 dark:text-stone-500'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${s.step === currentStep ? 'bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-900' :
                s.step < currentStep ? 'bg-stone-600 dark:bg-stone-500 text-white' :
                  'bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400'
                }`}>
                {s.step < currentStep ? <Check className="w-4 h-4" /> : s.step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 mx-2 ${s.step < currentStep ? 'bg-stone-600 dark:bg-stone-500' : 'bg-stone-200 dark:bg-stone-700'}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// 3D Scene Components
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

      {/* Ground Plane */}
      <Plane
        args={[50, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#e7e5e4" />
      </Plane>

      {/* Grid Helper */}
      <primitive object={new THREE.GridHelper(50, 50, 0xa8a29e, 0xd6d3d1)} position={[0, -0.49, 0]} />

      {/* Sample House Base */}
      <DreiBox
        ref={meshRef}
        args={[4, 0.2, 4]}
        position={[0, 0.1, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#78716c" />
      </DreiBox>

      {/* Sample Walls */}
      <DreiBox args={[3.8, 3, 3.8]} position={[0, 1.7, 0]} castShadow>
        <meshStandardMaterial color="#f5f5f4" />
      </DreiBox>

      {/* Sample Roof */}
      <DreiBox args={[4.2, 0.3, 4.2]} position={[0, 3.5, 0]} castShadow>
        <meshStandardMaterial color="#44403c" />
      </DreiBox>
    </>
  );
}

// Component Categories
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

  // Mobile states
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
      <header className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 h-14 flex items-center justify-between px-2 sm:px-4 shrink-0 z-50">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Box className="w-6 h-6 text-stone-800 dark:text-stone-100" />
            <span className="text-base font-semibold text-stone-800 dark:text-stone-100 hidden md:block">BluePrint3D</span>
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

          <Button size="sm" onClick={handleSubmit} className="bg-stone-800 hover:bg-stone-700 text-white h-8 px-2 sm:px-3">
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

        {/* Left Sidebar - Components */}
        <aside
          className={`bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 flex flex-col shrink-0 absolute lg:static h-full z-50 transition-transform duration-300 ease-in-out w-72 lg:w-64
            ${isLeftPanelOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >
          <div className="p-3 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-50">ส่วนประกอบบ้าน</h2>
            <Button variant="ghost" size="icon" className="h-6 w-6 lg:hidden" onClick={() => setIsLeftPanelOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <TabsList className="flex flex-wrap h-auto bg-stone-50 dark:bg-stone-950 p-1 gap-1 rounded-none">
              {Object.entries(componentCategories).map(([key, category]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex-1 min-w-[60px] h-auto py-2 px-1 data-[state=active]:bg-white dark:data-[state=active]:bg-stone-800 data-[state=active]:shadow-sm"
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
                          className={`cursor-pointer border-stone-200 dark:border-stone-700 hover:border-stone-400 dark:hover:border-stone-500 transition-colors ${selectedItems.includes(item.name) ? 'border-stone-800 dark:border-stone-200 bg-stone-50 dark:bg-stone-800' : ''
                            }`}
                          onClick={() => addItem(item.name, item.price)}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-stone-900 dark:text-stone-50">{item.name}</span>
                              {selectedItems.includes(item.name) && (
                                <Check className="w-4 h-4 text-stone-800" />
                              )}
                            </div>
                            <p className="text-xs text-stone-500 mt-1">
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

        {/* Center - 3D Viewport */}
        <main className="flex-1 relative bg-stone-200 dark:bg-stone-800">
          {/* 3D Toolbar */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white dark:bg-stone-900 rounded-lg shadow-lg px-3 py-2">
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
            style={{ width: '100%', height: '100%', touchAction: 'none' }} // Prevent scrolling while interacting
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
            <Button variant="ghost" size="sm" className="bg-white/80 dark:bg-stone-900/80 shadow-lg">
              <Maximize className="w-4 h-4 mr-2" />
              มุมมองภายใน
            </Button>
          </div>
          {/* Mobile Floating Action Buttons */}
          <div className="absolute bottom-20 left-4 z-10 lg:hidden flex flex-col gap-2">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-xl bg-stone-800 text-white"
              onClick={() => setIsLeftPanelOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>

          <div className="absolute bottom-20 right-4 z-10 lg:hidden flex flex-col gap-2">
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-xl bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 border-2 border-stone-200 dark:border-stone-700"
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

        {/* Right Sidebar - Properties */}
        <aside
          className={`bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 flex flex-col shrink-0 absolute right-0 lg:static h-full z-50 transition-transform duration-300 ease-in-out w-80 lg:w-72
            ${isRightPanelOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
        >
          {/* Price Summary */}
          <div className="p-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 relative">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 absolute top-4 right-4 lg:hidden"
              onClick={() => setIsRightPanelOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2 mb-2 pr-6">
              <DollarSign className="w-5 h-5 text-stone-600 dark:text-stone-400" />
              <h3 className="font-semibold text-stone-900 dark:text-stone-50">ราคาประเมิน</h3>
            </div>
            <p className="text-3xl font-bold text-stone-900 dark:text-stone-50">฿{totalPrice.toLocaleString()}</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">*ราคาโดยประมาณ อาจมีการเปลี่ยนแปลง</p>
          </div>

          {/* Selected Items */}
          <div className="p-3 border-b border-stone-200 dark:border-stone-800">
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-3">รายการที่เลือก</h3>
            <ScrollArea className="h-40">
              <div className="space-y-2">
                {selectedItems.length === 0 ? (
                  <p className="text-sm text-stone-500 text-center py-4">
                    ยังไม่มีรายการที่เลือก
                  </p>
                ) : (
                  selectedItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-stone-50 dark:bg-stone-800 rounded-lg">
                      <span className="text-sm text-stone-700 dark:text-stone-300">{item}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => {
                          setSelectedItems(selectedItems.filter((_, i) => i !== index));
                        }}
                      >
                        <Trash2 className="w-3 h-3 text-red-500" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Properties Panel */}
          <div className="flex-1 p-3">
            <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-50 mb-3">คุณสมบัติ</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-stone-500 dark:text-stone-400 mb-1 block">วัสดุ</label>
                <select className="w-full text-sm border border-stone-300 dark:border-stone-600 rounded-lg px-3 py-2 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-50">
                  <option>เลือกวัสดุ...</option>
                  <option>ปูนซีเมนต์</option>
                  <option>ไม้เนื้อแข็ง</option>
                  <option>เหล็กกล้า</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-stone-500 dark:text-stone-400 mb-1 block">สี</label>
                <div className="flex gap-2">
                  {['#f5f5f4', '#e7e5e4', '#d6d3d1', '#a8a29e', '#78716c', '#44403c'].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-lg border-2 border-white shadow-sm hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-stone-500 dark:text-stone-400 mb-1 block">ขนาด</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Minimize className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-stone-700 dark:text-stone-300 flex-1 text-center">100%</span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Maximize className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 border-t border-stone-200 dark:border-stone-800 space-y-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push('/project/location')}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              ย้อนกลับ
            </Button>
            <Button
              className="w-full bg-stone-800 hover:bg-stone-700 text-white"
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
