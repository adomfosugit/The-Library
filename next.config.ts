import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 


  typescript: {
 ignoreBuildErrors: true,
},
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
