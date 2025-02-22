const { i18n } = require('./next-i18next.config');

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'your-repo-name'; // Change this to your GitHub repository name

module.exports = {
  i18n,
  trailingSlash: true,
  images: {
    disableStaticImages: true
  },
  output: 'export',
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}/` : '',
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
};
