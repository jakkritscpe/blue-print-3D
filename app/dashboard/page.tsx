'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Box, Home, Settings, LogOut, Plus, MoreVertical, MapPin,
  Clock, CheckCircle, AlertCircle, User, ChevronRight, Menu, X
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const mockProjects = [
  {
    id: 'PRJ-001',
    name: 'บ้านเดี่ยว สุขุมวิท',
    location: 'สุขุมวิท 50, กรุงเทพ',
    status: 'in_progress',
    lastEdited: '2 ชั่วโมงที่แล้ว',
    thumbnail: '/images/projects/project-1.jpg',
    price: '5.2M'
  },
  {
    id: 'PRJ-002',
    name: 'บ้านสวน รามอินทรา',
    location: 'รามอินทรา 109, กรุงเทพ',
    status: 'submitted',
    lastEdited: '3 วันที่แล้ว',
    thumbnail: '/images/projects/project-2.jpg',
    price: '8.5M'
  },
  {
    id: 'PRJ-003',
    name: 'ทาวน์โฮม ลาดพร้าว',
    location: 'ลาดพร้าว 71, กรุงเทพ',
    status: 'completed',
    lastEdited: '1 สัปดาห์ที่แล้ว',
    thumbnail: '/images/projects/project-3.jpg',
    price: '4.8M'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'in_progress':
      return <Badge variant="outline" className="border-amber-200/60 dark:border-amber-700/40 text-amber-700 dark:text-amber-400 bg-amber-50/70 dark:bg-amber-900/20 backdrop-blur-sm"><Clock className="w-3 h-3 mr-1" /> กำลังดำเนินการ</Badge>;
    case 'submitted':
      return <Badge variant="outline" className="border-blue-200/60 dark:border-blue-700/40 text-[#1F77B4] dark:text-blue-300 bg-blue-50/70 dark:bg-blue-900/20 backdrop-blur-sm"><AlertCircle className="w-3 h-3 mr-1" /> รอตรวจสอบ</Badge>;
    case 'completed':
      return <Badge variant="outline" className="border-green-200/60 dark:border-green-700/40 text-green-700 dark:text-green-400 bg-green-50/70 dark:bg-green-900/20 backdrop-blur-sm"><CheckCircle className="w-3 h-3 mr-1" /> เสร็จสิ้น</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('projects');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => { router.push('/'); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C8D8F8] via-[#D0DFF8] to-[#B8CCFF] dark:from-[#071629] dark:via-[#091C38] dark:to-[#0B2148] flex">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`bg-white/75 dark:bg-[#0C1F3F]/80 backdrop-blur-xl border-r border-white/40 dark:border-white/10 fixed h-full z-50 w-64 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Box className="w-8 h-8 text-[#0B3C5D] dark:text-blue-300" />
            <span className="text-xl font-semibold text-[#0B3C5D] dark:text-blue-100">BluePrint3D</span>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-4">
          <nav className="space-y-1">
            <Link href="/dashboard">
              <Button variant={activeTab === 'projects' ? 'secondary' : 'ghost'} className="w-full justify-start gap-3 text-[#0B3C5D] dark:text-blue-200">
                <Home className="w-5 h-5" />
                โปรเจกต์ของฉัน
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant={activeTab === 'settings' ? 'secondary' : 'ghost'} className="w-full justify-start gap-3 text-[#0B3C5D] dark:text-blue-200">
                <Settings className="w-5 h-5" />
                ตั้งค่าบัญชี
              </Button>
            </Link>
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-white/30 dark:border-white/8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-3 h-auto py-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-900/40 text-[#0B3C5D] dark:text-blue-300">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-[#0B2454] dark:text-blue-50">John Doe</p>
                  <p className="text-xs text-[#0B3C5D]/55 dark:text-blue-400/70">john@example.com</p>
                </div>
                <MoreVertical className="w-4 h-4 text-[#0B3C5D]/40 dark:text-blue-400/60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white/80 dark:bg-[#0C1F3F]/90 backdrop-blur-xl border-white/40 dark:border-white/12">
              <DropdownMenuLabel className="text-[#0B2454] dark:text-blue-100">บัญชีของฉัน</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/settings">
                <DropdownMenuItem className="text-[#0B3C5D] dark:text-blue-200">
                  <User className="w-4 h-4 mr-2" />
                  โปรไฟล์
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleLogout} className="text-[#0B3C5D] dark:text-blue-200">
                <LogOut className="w-4 h-4 mr-2" />
                ออกจากระบบ
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white/70 dark:bg-[#0C1F3F]/70 backdrop-blur-md border-b border-white/40 dark:border-white/10 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-8 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="md:hidden -ml-2" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-6 h-6 text-[#0B3C5D] dark:text-blue-200" />
              </Button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#0B2454] dark:text-blue-50">แดชบอร์ด</h1>
                <p className="text-xs sm:text-sm text-[#0B3C5D]/55 dark:text-blue-300/70 hidden sm:block">จัดการโปรเจกต์ออกแบบบ้าน 3D ของคุณ</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/project/location">
                <Button className="bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white gap-2 h-9 sm:h-10 px-3 sm:px-4 shadow-md shadow-[#0B3C5D]/20">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">สร้างโปรเจกต์ใหม่</span>
                  <span className="sm:hidden">สร้างใหม่</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-8 flex-1">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-md border border-white/50 dark:border-white/12 shadow-md shadow-blue-100/20 dark:shadow-black/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-300/70">โปรเจกต์ทั้งหมด</p>
                    <p className="text-2xl font-bold text-[#0B2454] dark:text-blue-50">12</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100/60 dark:bg-blue-900/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-[#1F77B4] dark:text-blue-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-md border border-white/50 dark:border-white/12 shadow-md shadow-blue-100/20 dark:shadow-black/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-300/70">กำลังดำเนินการ</p>
                    <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">3</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-50/70 dark:bg-amber-900/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-md border border-white/50 dark:border-white/12 shadow-md shadow-blue-100/20 dark:shadow-black/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-300/70">รอตรวจสอบ</p>
                    <p className="text-2xl font-bold text-[#1F77B4] dark:text-blue-300">2</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50/70 dark:bg-blue-900/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#1F77B4] dark:text-blue-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-md border border-white/50 dark:border-white/12 shadow-md shadow-blue-100/20 dark:shadow-black/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-300/70">เสร็จสิ้น</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">7</p>
                  </div>
                  <div className="w-10 h-10 bg-green-50/70 dark:bg-green-900/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#0B2454] dark:text-blue-50">โปรเจกต์ล่าสุด</h2>
              <Button variant="ghost" size="sm" className="text-[#1F77B4] dark:text-blue-300 hover:text-[#0B3C5D] dark:hover:text-blue-100">
                ดูทั้งหมด
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-md border border-white/50 dark:border-white/12 shadow-md shadow-blue-100/20 dark:shadow-black/20 hover:shadow-xl hover:shadow-blue-200/30 dark:hover:shadow-black/40 hover:bg-white/80 dark:hover:bg-white/12 transition-all cursor-pointer group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-[#0B2454] dark:text-blue-50 group-hover:text-[#1F77B4] dark:group-hover:text-blue-300 transition-colors">
                            {project.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1 text-[#0B3C5D]/55 dark:text-blue-400/65">
                            <MapPin className="w-3 h-3" />
                            {project.location}
                          </CardDescription>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#0B3C5D]/40 dark:text-blue-400/50">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-white/80 dark:bg-[#0C1F3F]/90 backdrop-blur-xl border-white/40 dark:border-white/12">
                            <DropdownMenuItem className="text-[#0B3C5D] dark:text-blue-200">แก้ไข</DropdownMenuItem>
                            <DropdownMenuItem className="text-[#0B3C5D] dark:text-blue-200">คัดลอก</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">ลบ</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="relative rounded-lg aspect-video overflow-hidden mb-4 bg-blue-50/50 dark:bg-blue-900/20">
                        <Image src={project.thumbnail} alt={project.name} fill className="object-cover" />
                      </div>
                      <div className="flex items-center justify-between">
                        {getStatusBadge(project.status)}
                        <span className="text-sm text-[#0B3C5D]/55 dark:text-blue-400/65">{project.lastEdited}</span>
                      </div>
                    </CardContent>
                    <Separator className="bg-white/40 dark:bg-white/8" />
                    <CardFooter className="pt-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-[#0B3C5D]/55 dark:text-blue-400/65">ราคาประเมิน</span>
                        <span className="font-semibold text-[#0B2454] dark:text-blue-50">฿{project.price}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
