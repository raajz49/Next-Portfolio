// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Next-Portfolio", // Define the base path for your project
  assetPrefix: "/Next-Portfolio/", // This prefixes all static assets with the correct path
  images: {
    unoptimized: true, // Optional: Disable Next.js's image optimization for static hosting
  },
};

module.exports = nextConfig;
