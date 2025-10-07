import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove serverExternalPackages for Sanity Studio to work properly
  transpilePackages: ['next-sanity'],
  images: {
    domains: ['cdn.sanity.io'],
  },
  turbopack: {
    resolveAlias: {
      // Ensure single React instance
      react: require.resolve('react'),
      'react-dom': require.resolve('react-dom'),
    }
  },
};

export default nextConfig;
