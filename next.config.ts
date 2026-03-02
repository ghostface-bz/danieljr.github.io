import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/danieljr.github.io",
  assetPrefix: "/danieljr.github.io/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
