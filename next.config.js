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
        hostname: "humble-cup-images.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
