const isProd = true;
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/eg/' : '',
  basePath: isProd ? '/eg' : '',
  output: 'export'
};

module.exports = nextConfig;
