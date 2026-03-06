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

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-stone-900 border-b border-stone-100 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Box className="w-8 h-8 text-stone-800 dark:text-stone-100" />
              <span className="text-xl font-semibold text-stone-800 dark:text-stone-100">BluePrint3D</span>
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
            <TabsList className="grid w-full grid-cols-2 bg-stone-100 dark:bg-stone-800">
              <TabsTrigger value="login" className="data-[state=active]:bg-white dark:data-[state=active]:bg-stone-700">เข้าสู่ระบบ</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-white dark:data-[state=active]:bg-stone-700">สมัครสมาชิก</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card className="border-stone-200 dark:border-stone-700">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-stone-900 dark:text-stone-50">ยินดีต้อนรับกลับ</CardTitle>
                  <CardDescription className="text-stone-600 dark:text-stone-400">
                    เข้าสู่ระบบเพื่อเริ่มออกแบบบ้าน 3D ของคุณ
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-stone-700 dark:text-stone-300">อีเมล</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="name@example.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="border-stone-300 dark:border-stone-600 focus:border-stone-500 dark:focus:border-stone-400 h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-stone-700 dark:text-stone-300">รหัสผ่าน</Label>
                      <div className="relative">
                        <Input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          className="border-stone-300 dark:border-stone-600 focus:border-stone-500 dark:focus:border-stone-400 pr-10 h-11 sm:h-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-stone-300 dark:border-stone-600" />
                        <span className="text-stone-600 dark:text-stone-400">จดจำฉัน</span>
                      </label>
                      <Link href="/forgot-password" className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50">
                        ลืมรหัสผ่าน?
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-stone-800 hover:bg-stone-700 text-white h-11 sm:h-10"
                      disabled={isLoading}
                    >
                      {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white dark:bg-stone-900 px-2 text-stone-500 dark:text-stone-400">หรือเข้าสู่ระบบด้วย</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-stone-300 dark:border-stone-600 h-11 sm:h-10">
                      <Mail className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                    <Button variant="outline" className="border-stone-300 dark:border-stone-600 h-11 sm:h-10">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    ยังไม่มีบัญชี?{' '}
                    <Link href="#register" className="text-stone-900 dark:text-stone-100 font-semibold hover:underline">
                      สมัครสมาชิก
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <Card className="border-stone-200 dark:border-stone-700">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-stone-900 dark:text-stone-50">สมัครสมาชิก</CardTitle>
                  <CardDescription className="text-stone-600 dark:text-stone-400">
                    สร้างบัญชีเพื่อเริ่มออกแบบบ้าน 3D ฟรี
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-stone-700 dark:text-stone-300">ชื่อ-นามสกุล</Label>
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="ชื่อ นามสกุล"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        className="border-stone-300 dark:border-stone-600 focus:border-stone-500 dark:focus:border-stone-400 h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-stone-700 dark:text-stone-300">อีเมล</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="name@example.com"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        className="border-stone-300 dark:border-stone-600 focus:border-stone-500 dark:focus:border-stone-400 h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-stone-700 dark:text-stone-300">รหัสผ่าน</Label>
                      <div className="relative">
                        <Input
                          id="register-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="อย่างน้อย 8 ตัวอักษร"
                          value={registerData.password}
                          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                          className="border-stone-300 dark:border-stone-600 focus:border-stone-500 dark:focus:border-stone-400 pr-10 h-11 sm:h-10"
                          required
                          minLength={8}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-confirm" className="text-stone-700 dark:text-stone-300">ยืนยันรหัสผ่าน</Label>
                      <Input
                        id="register-confirm"
                        type="password"
                        placeholder="••••••••"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        className="border-stone-300 dark:border-stone-600 focus:border-stone-500 dark:focus:border-stone-400 h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="rounded border-stone-300 dark:border-stone-600 mt-1" required />
                      <span className="text-sm text-stone-600 dark:text-stone-400">
                        ฉันยอมรับ{' '}
                        <Link href="/terms" className="text-stone-900 dark:text-stone-100 hover:underline">เงื่อนไขการใช้งาน</Link>
                        {' '}และ{' '}
                        <Link href="/privacy" className="text-stone-900 dark:text-stone-100 hover:underline">นโยบายความเป็นส่วนตัว</Link>
                      </span>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-stone-800 hover:bg-stone-700 text-white h-11 sm:h-10"
                      disabled={isLoading}
                    >
                      {isLoading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white dark:bg-stone-900 px-2 text-stone-500 dark:text-stone-400">หรือสมัครด้วย</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-stone-300 dark:border-stone-600 h-11 sm:h-10">
                      <Mail className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                    <Button variant="outline" className="border-stone-300 dark:border-stone-600 h-11 sm:h-10">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    มีบัญชีอยู่แล้ว?{' '}
                    <Link href="#login" className="text-stone-900 dark:text-stone-100 font-semibold hover:underline">
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
