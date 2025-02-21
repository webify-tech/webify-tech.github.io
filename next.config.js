const withImages = require('next-images');
const ESLintPlugin = require('eslint-webpack-plugin');
const { i18n } = require('./next-i18next.config'); // Ensure i18n is properly imported

module.exports = withImages({
  i18n, // ✅ Uncomment to ensure i18n is loaded correctly
  trailingSlash: true,
  images: {
    disableStaticImages: true
  },
  publicRuntimeConfig: {
    localeSubpaths: process.env.LOCALE_SUBPATHS || 'none',
  },
  webpack: (config) => {
    // ✅ Ensure `cssModules` is part of `config.module.rules`
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    // ✅ Re-enable ESLint Plugin if needed
    config.plugins.push(
      new ESLintPlugin({
        exclude: ['node_modules'],
      })
    );

    return config;
  },
});
