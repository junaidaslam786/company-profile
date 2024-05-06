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

const sharpPath = require.resolve('sharp');
process.env.NEXT_SHARP_PATH = sharpPath;

module.exports = nextConfig;


