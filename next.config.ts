import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'www.masarishop.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'm.media-amazon.com',
      pathname: '/**',
    },
  ],
  },
};

export default nextConfig;
