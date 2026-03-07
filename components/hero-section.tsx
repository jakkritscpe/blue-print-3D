/**
 * HeroSection — Server Component, zero JavaScript.
 *
 * Pure HTML + CSS animations, Blueprint Tech palette.
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Eye, Home, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Highlight } from "@/components/ui/highlight";

export function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Text column — fades in upward */}
        <div className="animate-fade-in-up text-center lg:text-left z-10">
          <Badge className="mb-6 bg-accent/15 text-bp-navy dark:text-bp-cyan border-0">
            แพลตฟอร์มออกแบบบ้าน 3D อันดับ 1
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            ออกแบบบ้านในฝัน
            <br />
            <Highlight className="text-foreground mt-2">
              ด้วยตัวคุณเอง
            </Highlight>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            สร้างแบบบ้าน 3D ที่สวยงามและเป็นไปได้จริง พร้อมประเมินราคาและคำปรึกษาจากทีมงานมืออาชีพ ทันสมัย ใช้งานง่าย
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <Link href="/register" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 lg:h-14 lg:text-lg rounded-xl"
              >
                เริ่มออกแบบฟรี
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#preview" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border h-12 lg:h-14 lg:text-lg bg-card/50 backdrop-blur-sm rounded-xl"
              >
                <Eye className="w-5 h-5 mr-2" />
                ดูตัวอย่าง
              </Button>
            </Link>
          </div>
        </div>

        {/* Image column — fades in with slight scale */}
        <div className="animate-fade-in-scale relative z-10 mt-8 lg:mt-0">
          <div className="relative bg-gradient-to-br from-bp-bg to-bp-blue/20 dark:from-secondary dark:to-card rounded-[2rem] p-2 sm:p-4 aspect-square max-w-[500px] lg:max-w-none mx-auto w-full overflow-hidden shadow-2xl border border-bp-blue/20 dark:border-border/50">
            <Image
              src="/images/hero/hero-3d.jpg"
              alt="3D House Design Preview"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) min(90vw, 500px), 45vw"
              className="object-cover rounded-[1.5rem] p-1"
              priority
            />

            {/* CSS float animations */}
            <div
              aria-hidden="true"
              className="animate-float-up absolute top-8 right-8 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border"
            >
              <Home className="w-6 h-6 text-primary dark:text-accent" />
            </div>

            <div
              aria-hidden="true"
              className="animate-float-down absolute bottom-12 left-8 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border"
            >
              <Layers className="w-6 h-6 text-primary dark:text-accent" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
