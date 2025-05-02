/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Required for GitHub Pages
  trailingSlash: true, // Ensures proper routing on static hosting
  images: {
    unoptimized: true, // Prevents errors related to server-side image optimization
  },
};

module.exports = nextConfig;
