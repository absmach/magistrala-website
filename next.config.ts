import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/mg-website/',
  basePath: '/mg-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
