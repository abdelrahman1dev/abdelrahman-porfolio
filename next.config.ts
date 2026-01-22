import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'feyd0czhfg.ufs.sh',
        port: '',
        pathname: '/f/**',
      },
    ],
  },
  
};

export default nextConfig;
