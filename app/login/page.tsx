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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Box className="w-8 h-8 text-primary dark:text-accent" />
              <span className="text-xl font-semibold text-foreground">BluePrint3D</span>
            </Link>
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
            <TabsList className="grid w-full grid-cols-2 bg-muted">
              <TabsTrigger value="login" className="data-[state=active]:bg-card">เข้าสู่ระบบ</TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-card">สมัครสมาชิก</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card className="border-border">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-foreground">ยินดีต้อนรับกลับ</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    เข้าสู่ระบบเพื่อเริ่มออกแบบบ้าน 3D ของคุณ
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-foreground">อีเมล</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="name@example.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        className="border-border h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-foreground">รหัสผ่าน</Label>
                      <div className="relative">
                        <Input
                          id="login-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          className="border-border pr-10 h-11 sm:h-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-border accent-primary" />
                        <span className="text-muted-foreground">จดจำฉัน</span>
                      </label>
                      <Link href="/forgot-password" className="text-muted-foreground hover:text-foreground transition-colors">
                        ลืมรหัสผ่าน?
                      </Link>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 sm:h-10"
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
                      <span className="bg-card px-2 text-muted-foreground">หรือเข้าสู่ระบบด้วย</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-border h-11 sm:h-10">
                      <Mail className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                    <Button variant="outline" className="border-border h-11 sm:h-10">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="text-sm text-muted-foreground">
                    ยังไม่มีบัญชี?{' '}
                    <Link href="#register" className="text-primary dark:text-accent font-semibold hover:underline">
                      สมัครสมาชิก
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <Card className="border-border">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl text-foreground">สมัครสมาชิก</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    สร้างบัญชีเพื่อเริ่มออกแบบบ้าน 3D ฟรี
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name" className="text-foreground">ชื่อ-นามสกุล</Label>
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="ชื่อ นามสกุล"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        className="border-border h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-foreground">อีเมล</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="name@example.com"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        className="border-border h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-foreground">รหัสผ่าน</Label>
                      <div className="relative">
                        <Input
                          id="register-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="อย่างน้อย 8 ตัวอักษร"
                          value={registerData.password}
                          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                          className="border-border pr-10 h-11 sm:h-10"
                          required
                          minLength={8}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-confirm" className="text-foreground">ยืนยันรหัสผ่าน</Label>
                      <Input
                        id="register-confirm"
                        type="password"
                        placeholder="••••••••"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        className="border-border h-11 sm:h-10"
                        required
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="rounded border-border mt-1 accent-primary" required />
                      <span className="text-sm text-muted-foreground">
                        ฉันยอมรับ{' '}
                        <Link href="/terms" className="text-primary dark:text-accent hover:underline">เงื่อนไขการใช้งาน</Link>
                        {' '}และ{' '}
                        <Link href="/privacy" className="text-primary dark:text-accent hover:underline">นโยบายความเป็นส่วนตัว</Link>
                      </span>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 sm:h-10"
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
                      <span className="bg-card px-2 text-muted-foreground">หรือสมัครด้วย</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-border h-11 sm:h-10">
                      <Mail className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                    <Button variant="outline" className="border-border h-11 sm:h-10">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="text-sm text-muted-foreground">
                    มีบัญชีอยู่แล้ว?{' '}
                    <Link href="#login" className="text-primary dark:text-accent font-semibold hover:underline">
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
