/** @type {import('next').NextConfig} */
module.exports = {
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
};

