import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    // Allows Turbopack to fetch Google Fonts in restricted network environments.
    // Safe to keep on; has no effect on Vercel where the network is unrestricted.
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
