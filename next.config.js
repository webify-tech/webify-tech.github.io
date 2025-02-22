const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/eg/',
  basePath: '/eg',
  output: 'export'
};

module.exports = nextConfig;
