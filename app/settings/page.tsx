'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Box, Home, Settings, LogOut, User, Mail, Phone,
  MapPin, Camera, Save, ChevronLeft, Eye, EyeOff, Menu, X
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '081-234-5678',
    address: '123 ถนนสุขุมวิท กรุงเทพฯ 10110',
    bio: 'สนใจออกแบบบ้านสไตล์โมเดิร์น พร้อมสระว่ายน้ำ'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '', newPassword: '', confirmPassword: ''
  });

  const handleSaveProfile = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleSavePassword = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

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
              <Button variant="ghost" className="w-full justify-start gap-3 text-[#0B3C5D] dark:text-blue-200">
                <Home className="w-5 h-5" />
                โปรเจกต์ของฉัน
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="secondary" className="w-full justify-start gap-3 text-[#0B3C5D] dark:text-blue-100">
                <Settings className="w-5 h-5" />
                ตั้งค่าบัญชี
              </Button>
            </Link>
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-white/30 dark:border-white/8">
          <Button variant="ghost" className="w-full justify-start gap-3 h-auto py-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/images/avatar/user.jpg" />
              <AvatarFallback className="bg-blue-100 dark:bg-blue-900/40 text-[#0B3C5D] dark:text-blue-300">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-[#0B2454] dark:text-blue-50">John Doe</p>
              <p className="text-xs text-[#0B3C5D]/55 dark:text-blue-400/70">john@example.com</p>
            </div>
            <LogOut className="w-4 h-4 text-[#0B3C5D]/40 dark:text-blue-400/50" />
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white/70 dark:bg-[#0C1F3F]/70 backdrop-blur-md border-b border-white/40 dark:border-white/10 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-8 py-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <Button variant="ghost" size="icon" className="md:hidden -ml-2" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-6 h-6 text-[#0B3C5D] dark:text-blue-200" />
              </Button>
              <Link href="/dashboard" className="hidden sm:block">
                <Button variant="ghost" size="icon" className="text-[#0B3C5D] dark:text-blue-200">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-[#0B2454] dark:text-blue-50">ตั้งค่าบัญชี</h1>
                <p className="text-xs sm:text-sm text-[#0B3C5D]/55 dark:text-blue-300/70 hidden sm:block">จัดการข้อมูลส่วนตัวและการตั้งค่าความปลอดภัย</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-8 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-white/40 dark:bg-white/8 backdrop-blur-md border border-white/50 dark:border-white/12 mb-6">
                <TabsTrigger value="profile" className="data-[state=active]:bg-white/80 dark:data-[state=active]:bg-white/15 data-[state=active]:text-[#0B3C5D] dark:data-[state=active]:text-blue-100">ข้อมูลส่วนตัว</TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-white/80 dark:data-[state=active]:bg-white/15 data-[state=active]:text-[#0B3C5D] dark:data-[state=active]:text-blue-100">ความปลอดภัย</TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-white/80 dark:data-[state=active]:bg-white/15 data-[state=active]:text-[#0B3C5D] dark:data-[state=active]:text-blue-100">การแจ้งเตือน</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-lg shadow-blue-200/25 dark:shadow-black/25">
                  <CardHeader>
                    <CardTitle className="text-[#0B2454] dark:text-blue-50">ข้อมูลส่วนตัว</CardTitle>
                    <CardDescription className="text-[#0B3C5D]/55 dark:text-blue-400/65">
                      อัปเดตข้อมูลส่วนตัวและรูปโปรไฟล์ของคุณ
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Avatar Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className="relative">
                        <Avatar className="w-24 h-24">
                          <AvatarImage src="/images/avatar/user.jpg" />
                          <AvatarFallback className="bg-blue-100 dark:bg-blue-900/40 text-[#0B3C5D] dark:text-blue-300 text-2xl">JD</AvatarFallback>
                        </Avatar>
                        <Button
                          size="icon"
                          className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white shadow-md"
                        >
                          <Camera className="w-4 h-4" />
                        </Button>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B2454] dark:text-blue-50">รูปโปรไฟล์</h3>
                        <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-400/65">รองรับไฟล์ JPG, PNG ขนาดไม่เกิน 2MB</p>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200">อัปโหลดรูปใหม่</Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">ลบรูป</Button>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-white/40 dark:bg-white/10" />

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#0B3C5D] dark:text-blue-200">ชื่อ-นามสกุล</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F77B4]/50 dark:text-blue-400/50" />
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                            className="pl-10 bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#0B3C5D] dark:text-blue-200">อีเมล</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F77B4]/50 dark:text-blue-400/50" />
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            className="pl-10 bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#0B3C5D] dark:text-blue-200">เบอร์โทรศัพท์</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F77B4]/50 dark:text-blue-400/50" />
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            className="pl-10 bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-[#0B3C5D] dark:text-blue-200">ที่อยู่</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F77B4]/50 dark:text-blue-400/50" />
                          <Input
                            id="address"
                            value={profileData.address}
                            onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                            className="pl-10 bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-[#0B3C5D] dark:text-blue-200">เกี่ยวกับฉัน</Label>
                      <textarea
                        id="bio"
                        rows={3}
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        className="w-full px-3 py-2 border border-white/50 dark:border-white/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F77B4]/40 dark:focus:ring-blue-400/40 resize-none bg-white/60 dark:bg-white/8 text-[#0B2454] dark:text-blue-50 backdrop-blur-sm placeholder:text-[#0B3C5D]/35 dark:placeholder:text-blue-400/40"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200">ยกเลิก</Button>
                      <Button
                        onClick={handleSaveProfile}
                        className={saved ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white shadow-md shadow-[#0B3C5D]/20'}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        {saved ? 'บันทึกแล้ว' : 'บันทึกข้อมูล'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security">
                <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-lg shadow-blue-200/25 dark:shadow-black/25">
                  <CardHeader>
                    <CardTitle className="text-[#0B2454] dark:text-blue-50">เปลี่ยนรหัสผ่าน</CardTitle>
                    <CardDescription className="text-[#0B3C5D]/55 dark:text-blue-400/65">
                      อัปเดตรหัสผ่านเพื่อความปลอดภัยของบัญชี
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password" className="text-[#0B3C5D] dark:text-blue-200">รหัสผ่านปัจจุบัน</Label>
                      <div className="relative">
                        <Input
                          id="current-password"
                          type={showPassword ? 'text' : 'password'}
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                          className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400 pr-10"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0B3C5D]/40 hover:text-[#0B3C5D] dark:text-blue-400/60 dark:hover:text-blue-200"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <Separator className="bg-white/40 dark:bg-white/10" />

                    <div className="space-y-2">
                      <Label htmlFor="new-password" className="text-[#0B3C5D] dark:text-blue-200">รหัสผ่านใหม่</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400"
                        placeholder="อย่างน้อย 8 ตัวอักษร"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-[#0B3C5D] dark:text-blue-200">ยืนยันรหัสผ่านใหม่</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200">ยกเลิก</Button>
                      <Button
                        onClick={handleSavePassword}
                        className={saved ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white shadow-md shadow-[#0B3C5D]/20'}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        {saved ? 'บันทึกแล้ว' : 'เปลี่ยนรหัสผ่าน'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-lg shadow-blue-200/25 dark:shadow-black/25 mt-6">
                  <CardHeader>
                    <CardTitle className="text-[#0B2454] dark:text-blue-50">การยืนยันตัวตนแบบสองขั้นตอน (2FA)</CardTitle>
                    <CardDescription className="text-[#0B3C5D]/55 dark:text-blue-400/65">
                      เพิ่มความปลอดภัยด้วยการยืนยันตัวตนเพิ่มเติม
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-[#0B2454] dark:text-blue-50">ยืนยันด้วยเบอร์โทรศัพท์</h3>
                        <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-400/65">รับรหัส OTP ทาง SMS เมื่อเข้าสู่ระบบ</p>
                      </div>
                      <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200">เปิดใช้งาน</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-lg shadow-blue-200/25 dark:shadow-black/25">
                  <CardHeader>
                    <CardTitle className="text-[#0B2454] dark:text-blue-50">การแจ้งเตือน</CardTitle>
                    <CardDescription className="text-[#0B3C5D]/55 dark:text-blue-400/65">
                      จัดการการแจ้งเตือนที่คุณต้องการรับ
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: 'อีเมลแจ้งเตือนโปรเจกต์', description: 'รับอีเมลเมื่อมีอัปเดตเกี่ยวกับโปรเจกต์', checked: true },
                      { label: 'แจ้งเตือนการติดต่อกลับ', description: 'แจ้งเตือนเมื่อทีมงานติดต่อกลับ', checked: true },
                      { label: 'ข่าวสารและโปรโมชั่น', description: 'รับข้อมูลข่าวสารและส่วนลดพิเศษ', checked: false },
                      { label: 'อัปเดตระบบ', description: 'แจ้งเตือนเมื่อมีฟีเจอร์ใหม่ในระบบ', checked: true }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start justify-between py-3 border-b border-white/30 dark:border-white/8 last:border-0">
                        <div>
                          <h3 className="font-medium text-[#0B2454] dark:text-blue-50">{item.label}</h3>
                          <p className="text-sm text-[#0B3C5D]/55 dark:text-blue-400/65">{item.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" />
                          <div className="w-11 h-6 bg-white/40 dark:bg-white/12 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#1F77B4]/20 dark:peer-focus:ring-blue-400/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B3C5D] dark:peer-checked:bg-[#1F77B4]"></div>
                        </label>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
