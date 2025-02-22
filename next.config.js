/** @type {import('next').NextConfig} */
const repoName = 'eg'; // Change this to your GitHub repo name

const nextConfig = {
  output: 'export', // Required for GitHub Pages
  trailingSlash: true, // Ensures proper routing on static hosting
  basePath: `/${repoName}`, // Needed for GitHub Pages
  assetPrefix: `/${repoName}/`, // Ensures assets load correctly
  images: {
    unoptimized: true, // Prevents errors related to server-side image optimization
    loader: 'imgix',
    path: `/${repoName}/`, // Ensures images use the correct path
  },
};

module.exports = nextConfig;
