'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Box, Eye, EyeOff, Github, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/dashboard');
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C8D8F8] via-[#D0DFF8] to-[#B8CCFF] dark:from-[#071629] dark:via-[#091C38] dark:to-[#0B2148] flex flex-col">
      {/* Header */}
      <header className="bg-white/70 dark:bg-[#0C1F3F]/70 backdrop-blur-md border-b border-white/40 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Box className="w-8 h-8 text-[#0B3C5D] dark:text-blue-300" />
              <span className="text-xl font-semibold text-[#0B3C5D] dark:text-blue-100">BluePrint3D</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/40 dark:bg-white/8 backdrop-blur-md border border-white/50 dark:border-white/10">
              <TabsTrigger value="login" className="data-[state=active]:bg-white/80 dark:data-[state=active]:bg-white/12 data-[state=active]:text-[#0B3C5D] dark:data-[state=active]:text-blue-100">เข้าสู่ระบบ</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-white/80 dark:data-[state=active]:bg-white/12 data-[state=active]:text-[#0B3C5D] dark:data-[state=active]:text-blue-100">สมัครสมาชิก</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-xl shadow-blue-200/30 dark:shadow-black/30">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-[#0B2454] dark:text-blue-50">ยินดีต้อนรับกลับ</CardTitle>
                  <CardDescription className="text-[#0B3C5D]/60 dark:text-blue-300/70">
                    เข้าสู่ระบบเพื่อเริ่มออกแบบบ้าน 3D ของคุณ
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-[#0B3C5D] dark:text-blue-200">อีเมล</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="name@example.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400 h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-[#0B3C5D] dark:text-blue-200">รหัสผ่าน</Label>
                      <div className="relative">
                        <Input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400 pr-10 h-11 sm:h-10"
                          required
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
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-blue-200 dark:border-blue-700" />
                        <span className="text-[#0B3C5D]/60 dark:text-blue-300/70">จดจำฉัน</span>
                      </label>
                      <Link href="/forgot-password" className="text-[#1F77B4] dark:text-blue-300 hover:text-[#0B3C5D] dark:hover:text-blue-100">
                        ลืมรหัสผ่าน?
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white h-11 sm:h-10 shadow-md shadow-[#0B3C5D]/20"
                      disabled={isLoading}
                    >
                      {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full bg-white/40 dark:bg-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white/60 dark:bg-[#0C1F3F]/60 px-2 text-[#0B3C5D]/50 dark:text-blue-400/60 backdrop-blur-sm rounded">หรือเข้าสู่ระบบด้วย</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200 h-11 sm:h-10 hover:bg-white/70 dark:hover:bg-white/12">
                      <Mail className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                    <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200 h-11 sm:h-10 hover:bg-white/70 dark:hover:bg-white/12">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="text-sm text-[#0B3C5D]/60 dark:text-blue-300/70">
                    ยังไม่มีบัญชี?{' '}
                    <Link href="#register" className="text-[#1F77B4] dark:text-blue-300 font-semibold hover:underline">
                      สมัครสมาชิก
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <Card className="bg-white/70 dark:bg-white/8 backdrop-blur-xl border border-white/50 dark:border-white/12 shadow-xl shadow-blue-200/30 dark:shadow-black/30">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-[#0B2454] dark:text-blue-50">สมัครสมาชิก</CardTitle>
                  <CardDescription className="text-[#0B3C5D]/60 dark:text-blue-300/70">
                    สร้างบัญชีเพื่อเริ่มออกแบบบ้าน 3D ฟรี
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-[#0B3C5D] dark:text-blue-200">ชื่อ-นามสกุล</Label>
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="ชื่อ นามสกุล"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400 h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-[#0B3C5D] dark:text-blue-200">อีเมล</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="name@example.com"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400 h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-[#0B3C5D] dark:text-blue-200">รหัสผ่าน</Label>
                      <div className="relative">
                        <Input
                          id="register-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="อย่างน้อย 8 ตัวอักษร"
                          value={registerData.password}
                          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                          className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400 pr-10 h-11 sm:h-10"
                          required
                          minLength={8}
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
                    <div className="space-y-2">
                      <Label htmlFor="register-confirm" className="text-[#0B3C5D] dark:text-blue-200">ยืนยันรหัสผ่าน</Label>
                      <Input
                        id="register-confirm"
                        type="password"
                        placeholder="••••••••"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        className="bg-white/60 dark:bg-white/8 border-white/50 dark:border-white/15 focus:border-[#1F77B4] dark:focus:border-blue-400 h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="rounded border-blue-200 dark:border-blue-700 mt-1" required />
                      <span className="text-sm text-[#0B3C5D]/60 dark:text-blue-300/70">
                        ฉันยอมรับ{' '}
                        <Link href="/terms" className="text-[#1F77B4] dark:text-blue-300 hover:underline">เงื่อนไขการใช้งาน</Link>
                        {' '}และ{' '}
                        <Link href="/privacy" className="text-[#1F77B4] dark:text-blue-300 hover:underline">นโยบายความเป็นส่วนตัว</Link>
                      </span>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#0B3C5D] hover:bg-[#0d4a72] dark:bg-[#1F77B4] dark:hover:bg-[#1868a0] text-white h-11 sm:h-10 shadow-md shadow-[#0B3C5D]/20"
                      disabled={isLoading}
                    >
                      {isLoading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full bg-white/40 dark:bg-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white/60 dark:bg-[#0C1F3F]/60 px-2 text-[#0B3C5D]/50 dark:text-blue-400/60 backdrop-blur-sm rounded">หรือสมัครด้วย</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200 h-11 sm:h-10 hover:bg-white/70 dark:hover:bg-white/12">
                      <Mail className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                    <Button variant="outline" className="bg-white/50 dark:bg-white/8 border-white/50 dark:border-white/15 text-[#0B3C5D] dark:text-blue-200 h-11 sm:h-10 hover:bg-white/70 dark:hover:bg-white/12">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="text-sm text-[#0B3C5D]/60 dark:text-blue-300/70">
                    มีบัญชีอยู่แล้ว?{' '}
                    <Link href="#login" className="text-[#1F77B4] dark:text-blue-300 font-semibold hover:underline">
                      เข้าสู่ระบบ
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
