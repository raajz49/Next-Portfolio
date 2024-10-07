/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Next-Portfolio", // Set the base path to match the GitHub Pages subdirectory
  assetPrefix: "/Next-Portfolio/", // Prefix all static assets with this path
  images: {
    unoptimized: true, // Disable Next.js image optimization to work better with GitHub Pages
  },
};

module.exports = nextConfig;
