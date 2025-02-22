/** @type {import('next').NextConfig} */
const isProd = true;
const nextConfig = {
  reactStrictMode: true, // Enables React's strict mode
  images: {
    domains: ['example.com'], // Allow loading images from specific domains
  },
  assetPrefix: isProd ? '/eg/' : '',
  basePath: isProd ? '/eg' : '',
  output: 'export',
  i18n: {
    locales: ['en', 'ar'], // Example for localization
    defaultLocale: 'ar',
  }
};

module.exports = nextConfig;
