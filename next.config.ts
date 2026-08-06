import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  images: {
    qualities: [75, 95],
  },
};

export default nextConfig;
