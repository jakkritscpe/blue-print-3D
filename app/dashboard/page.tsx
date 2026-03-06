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
  Box,
  Home,
  Settings,
  LogOut,
  Plus,
  MoreVertical,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

// Mock data for projects
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
      return <Badge variant="outline" className="border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950"><Clock className="w-3 h-3 mr-1" /> กำลังดำเนินการ</Badge>;
    case 'submitted':
      return <Badge variant="outline" className="border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950"><AlertCircle className="w-3 h-3 mr-1" /> รอตรวจสอบ</Badge>;
    case 'completed':
      return <Badge variant="outline" className="border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950"><CheckCircle className="w-3 h-3 mr-1" /> เสร็จสิ้น</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('projects');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`bg-white dark:bg-stone-900 border-r border-stone-200 dark:border-stone-800 fixed h-full z-50 w-64 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Box className="w-8 h-8 text-stone-800 dark:text-stone-100" />
            <span className="text-xl font-semibold text-stone-800 dark:text-stone-100">BluePrint3D</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-4">
          <nav className="space-y-1">
            <Link href="/dashboard">
              <Button
                variant={activeTab === 'projects' ? 'secondary' : 'ghost'}
                className="w-full justify-start gap-3"
              >
                <Home className="w-5 h-5" />
                โปรเจกต์ของฉัน
              </Button>
            </Link>
            <Link href="/settings">
              <Button
                variant={activeTab === 'settings' ? 'secondary' : 'ghost'}
                className="w-full justify-start gap-3"
              >
                <Settings className="w-5 h-5" />
                ตั้งค่าบัญชี
              </Button>
            </Link>
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-stone-200 dark:border-stone-800">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-3 h-auto py-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback className="bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-stone-900 dark:text-stone-50">John Doe</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">john@example.com</p>
                </div>
                <MoreVertical className="w-4 h-4 text-stone-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>บัญชีของฉัน</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/settings">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  โปรไฟล์
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleLogout}>
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
        <header className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-8 py-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden -ml-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6 text-stone-800 dark:text-stone-100" />
              </Button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50">แดชบอร์ด</h1>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 hidden sm:block">จัดการโปรเจกต์ออกแบบบ้าน 3D ของคุณ</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/project/location">
                <Button className="bg-stone-800 hover:bg-stone-700 text-white gap-2 h-9 sm:h-10 px-3 sm:px-4">
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
            <Card className="border-stone-200 dark:border-stone-700">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-stone-600 dark:text-stone-400">โปรเจกต์ทั้งหมด</p>
                    <p className="text-2xl font-bold text-stone-900 dark:text-stone-50">12</p>
                  </div>
                  <div className="w-10 h-10 bg-stone-100 dark:bg-stone-800 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-stone-600 dark:text-stone-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-stone-200 dark:border-stone-700">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-stone-600 dark:text-stone-400">กำลังดำเนินการ</p>
                    <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">3</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-50 dark:bg-amber-950 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-stone-200 dark:border-stone-700">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-stone-600 dark:text-stone-400">รอตรวจสอบ</p>
                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">2</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-stone-200 dark:border-stone-700">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-stone-600 dark:text-stone-400">เสร็จสิ้น</p>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">7</p>
                  </div>
                  <div className="w-10 h-10 bg-green-50 dark:bg-green-950 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50">โปรเจกต์ล่าสุด</h2>
              <Button variant="ghost" size="sm" className="text-stone-600 dark:text-stone-400">
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
                  <Card className="border-stone-200 dark:border-stone-700 hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-stone-900 dark:text-stone-50 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors">
                            {project.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            {project.location}
                          </CardDescription>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>แก้ไข</DropdownMenuItem>
                            <DropdownMenuItem>คัดลอก</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">ลบ</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="relative rounded-lg aspect-video overflow-hidden mb-4 bg-stone-100 dark:bg-stone-800">
                        <Image
                          src={project.thumbnail}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        {getStatusBadge(project.status)}
                        <span className="text-sm text-stone-600 dark:text-stone-400">{project.lastEdited}</span>
                      </div>
                    </CardContent>
                    <Separator className="bg-stone-100 dark:bg-stone-700" />
                    <CardFooter className="pt-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-stone-600 dark:text-stone-400">ราคาประเมิน</span>
                        <span className="font-semibold text-stone-900 dark:text-stone-50">฿{project.price}</span>
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
