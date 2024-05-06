import sharp from 'sharp';

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "labverse.co" },
      { protocol: "https", hostname: "flagcdn.com" },
    ],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    loader: 'default',
    path: '/_next/image',
    disableStaticImages: false,
    minimumCacheTTL: 60,
  },
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true,
    },
  },
};

// Assuming you still need to set this for some reason:
const sharpPath = sharp ? sharp.path : undefined;
if (sharpPath) {
  process.env.NEXT_SHARP_PATH = sharpPath;
}

export default nextConfig;


