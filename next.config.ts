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
  }
  // async headers() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: process.env.ALLOWED_ORIGIN || "http://localhost:3001",
  //         },
  //         {
  //           key: "Access-Control-Allow-Credentials",
  //           value: "true",
  //         },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //       ],
  //     },
  //   ];
  // }
};

export default nextConfig;
