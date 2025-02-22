/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  trailingSlash: true, // Ensures proper routing on static hosting
  images: {
    unoptimized: true, // Prevents server-side image optimization (needed for static export)
  },
  basePath: '/eg', // Change to your GitHub repo name
  assetPrefix: '/eg', // Ensures assets load correctly
};

module.exports = nextConfig;
