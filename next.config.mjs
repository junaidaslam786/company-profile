import sharp from 'sharp';

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.labverse.co" },
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "http", hostname: "127.0.0.1" },
    ],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    loader: 'default',
    path: '/_next/image',
    disableStaticImages: false,
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
