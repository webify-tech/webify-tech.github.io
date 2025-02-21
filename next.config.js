const { i18n } = require('./next-i18next.config');
const withImages = require('next-images');

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'your-repo-name'; // Change this to your GitHub repository name

module.exports = withImages({
  i18n, // ✅ Make sure this is enabled
  trailingSlash: true,
  images: {
    disableStaticImages: true
  },
  output: 'export', // ✅ Required for GitHub Pages (Static Export)
  basePath: isGitHubPages ? `/${repoName}` : '', // ✅ Sets the correct path
  assetPrefix: isGitHubPages ? `/${repoName}/` : '', // ✅ Ensures assets load properly
  publicRuntimeConfig: {
    localeSubpaths: process.env.LOCALE_SUBPATHS || 'none',
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    config.node = {};
    return config;
  },
});
