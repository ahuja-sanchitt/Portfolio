import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "img-cdn.publive.online" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
  },
  async rewrites() {
    return [{ source: "/resume", destination: "/resume.pdf" }];
  },
};

export default nextConfig;
