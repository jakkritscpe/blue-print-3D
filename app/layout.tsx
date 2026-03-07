import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

/**
 * display: 'swap' — show system font immediately, swap to Inter when loaded.
 * Prevents FOIT (Flash of Invisible Text) which hurts LCP and CLS.
 * preload: true is the default for next/font; keeping it explicit for clarity.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BluePrint3D - ออกแบบบ้าน 3D ออนไลน์",
  description: "แพลตฟอร์มออกแบบบ้าน 3D สำหรับธุรกิจอสังหาริมทรัพย์",
};

/**
 * Separate viewport export — required by Next.js 14+ for viewport meta tags.
 * Ensures correct mobile scaling and avoids CLS from viewport zoom.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E6F2FA" },
    { media: "(prefers-color-scheme: dark)", color: "#091825" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
