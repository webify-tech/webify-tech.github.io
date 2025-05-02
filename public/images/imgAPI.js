const isProduction = process.env.NODE_ENV === 'production';
const prefix = isProduction ? '' : '';

const imgAPI = {
  saas: [
    prefix + '/images/saas/featur.png',
    prefix + '/images/saas/dahsboared_ar.png',
    'https://via.placeholder.com/1000x625/e6f8ff/757575',
    prefix + '/images/saas/app-counter.png',
    prefix + '/images/saas/shop_ar.png',
    prefix + '/images/saas/portfolio_ar.png',
    prefix + '/images/saas/landing_ar.png',
    prefix + '/images/saas/desktop_illustration.png'
  ],
  saas_en: [
    prefix + '/images/saas/featur.png',
    prefix + '/images/saas/dahsboared_en.png',
    'https://via.placeholder.com/1000x625/e6f8ff/757575',
    prefix + '/images/saas/app-counter.png',
    prefix + '/images/saas/shop_en.png',
    prefix + '/images/saas/portfolio_en.png',
    prefix + '/images/saas/landing_en.png',
    prefix + '/images/saas/desktop_illustration.png'
  ],
  logo: prefix + '/images/saas-logo.png'
};

export default imgAPI;
