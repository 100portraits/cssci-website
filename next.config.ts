import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Updated configuration for React 19 and Sanity Studio 4.8+
  experimental: {
    turbo: {
      resolveAlias: {
        // Ensure single React instance
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      },
    },
  },
  // Remove serverExternalPackages for Sanity Studio to work properly
  transpilePackages: ['next-sanity'],
};

export default nextConfig;
