/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.humblecupcoffee.com",
      },
    ],
  },
};

module.exports = nextConfig;
