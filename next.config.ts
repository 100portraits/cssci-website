import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove serverExternalPackages for Sanity Studio to work properly
  transpilePackages: ['next-sanity'],
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
