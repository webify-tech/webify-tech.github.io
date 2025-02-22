/** @type {import('next').NextConfig} */
const isProd = true;
const nextConfig = {
  reactStrictMode: true, // Enables React's strict mode
  images: {
    domains: ['example.com'], // Allow loading images from specific domains
  },
  assetPrefix: isProd ? '/eg/' : '',
  basePath: isProd ? '/eg' : '',
  output: 'export'
};

module.exports = nextConfig;
