const withImages = require('next-images');

module.exports = withImages({
  trailingSlash: true,
  images: {
    disableStaticImages: true,
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
  webpack: (config) => config,
});
