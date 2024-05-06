/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "labverse.co",
        },
        {
          protocol: "https",
          hostname: "flagcdn.com",
        },
      ],
    },
  },
};
export default nextConfig;
