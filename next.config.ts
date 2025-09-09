import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mark Sanity packages as external for server components
  // This helps avoid Turbopack bundling issues
  serverExternalPackages: ['sanity', '@sanity/vision'],
  // Only transpile next-sanity for client usage
  transpilePackages: ['next-sanity'],
};

export default nextConfig;
