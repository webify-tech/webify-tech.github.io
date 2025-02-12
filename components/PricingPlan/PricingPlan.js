import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'next-i18next';
import { Button, Grid } from '@material-ui/core';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';
import useStyles from './pricing-plan-style';
import egypt from '~/public/images/egypt.png';
import saudiArabia from '~/public/images/saudi-arabia.png';
import unitedState from '~/public/images/united-states-of-america.png';

const feature = {
  main: {
    prices: {
      us: '50 $',
      eg: '2500 جنية',
      sd: '190 ريال'
    },
    renew: {
      us: '25 $',
      eg: '1250 جنية',
      sd: '95 ريال'
    },
    subscribText: {
      ar: '(ويبيفاي)  اشتراك في تصميم موقع الباقة الاساسية ',
      en: '(Webify) Subscribe to Basic Package Design'
    },
    data: [
      {
        ar: ' رابط خاص (دومين .COM)',
        en: 'Special Link (Domain .COM)'
      },
      {
        ar: ' شهادة أمان HTTPs - SSL',
        en: 'HTTPs - SSL Certificate'
      },
      {
        ar: ' منتجات و طلبات لا محدودة',
        en: 'Unlimited Products and Orders'
      },
      {
        ar: ' خيارات اللون والمقاس للمنتج',
        en: 'Color and Size Options for Products'
      },
      {
        ar: ' القسائم و كوبونات التخفيض',
        en: 'Discount Coupons and Vouchers'
      },
      {
        ar: 'تصميم متجاوب مع الأجهزة المحمولة',
        en: 'Responsive Design for Mobile Devices'
      },
      {
        ar: 'الدعم الفني على مدار الساعة',
        en: '24/7 Technical Support'
      },
      {
        ar: 'التحكم بالمخزون والمبيعات',
        en: 'Inventory and Sales Control'
      },
      {
        ar: ' الموقع 4 صفحات',
        en: '4 Pages Website',
      },
      {
        ar: 'لغة واحدة',
        en: 'One Language',
      }
    ]
  },
  pro: {
    prices: {
      us: '100 $',
      eg: '5000 جنية',
      sd: '380 ريال'
    },
    renew: {
      us: '50 $',
      eg: '2500 جنية',
      sd: '190 ريال'
    },
    subscribText: {
      ar: '(ويبيفاي) اشتراك في تصميم موقع الباقة البرو ',
      en: '(Webify) Subscribe to Pro Package Design'
    },
    data: [
      {
        ar: ' رابط خاص (دومين .COM)',
        en: 'Special Link (Domain .COM)'
      },
      {
        ar: ' شهادة أمان HTTPs - SSL',
        en: 'HTTPs - SSL Certificate'
      },
      {
        ar: ' منتجات و طلبات لا محدودة',
        en: 'Unlimited Products and Orders'
      },
      {
        ar: 'الربط مع بوابات الدفع',
        en: 'Payment Services'
      },
      {
        ar: ' خيارات اللون والمقاس للمنتج',
        en: 'Color and Size Options for Products'
      },
      {
        ar: ' القسائم و كوبونات التخفيض',
        en: 'Discount Coupons and Vouchers'
      },
      {
        ar: 'تصميم متجاوب مع الأجهزة المحمولة',
        en: 'Responsive Design for Mobile Devices'
      },
      {
        ar: 'الدعم الفني على مدار الساعة',
        en: '24/7 Technical Support'
      },
      {
        ar: 'التحكم بالمخزون والمبيعات',
        en: 'Inventory and Sales Control'
      },
      {
        ar: ' عدد الصفحات غير محدود',
        en: 'Unlimited Pages',
      },
      {
        ar: 'لغتين',
        en: 'Two Languages',
      },
      {
        ar: 'ايملات رسمية باسم الشركة',
        en: 'Company Brand Emails',
      }
    ]
  },
  vip: {
    prices: {
      us: '!',
      eg: '!',
      sd: '!'
    },
    renew: {
      us: '!',
      eg: '!',
      sd: '!'
    },
    subscribText: {
      ar: '(ويبيفاي) VIP اشتراك في تصميم موقع الباقة',
      en: '(Webify) Subscribe to VIP Package Design'
    },
    data: [
      {
        ar: 'مميزات الباقة الاحترافية',
        en: 'Pro Package Features',
      },
      {
        ar: 'دعم تطبيق Android',
        en: 'Android App Support',
      },
      {
        ar: 'دعم تعدد العملات',
        en: 'Multiple Currencies Support',
      },
      {
        ar: 'دعم تعدد اللغات',
        en: 'Multiple Languages Support',
      },
      {
        ar: 'دعم نظام التسويق بالعمولة',
        en: 'Affiliate Marketing Support',
      },
      {
        ar: 'دعم خاصية تعدد التجار',
        en: 'Multiple Stores Support',
      },
      {
        ar: 'دعم انظمة الحجز المتقدم',
        en: 'Advanced Booking System Support',
      },
      {
        ar: 'دعم انظمة الجملة والقطاعي',
        en: 'Sentence and Paragraph System Support',
      },
      {
        ar: 'دعم فني خاص VIP',
        en: 'Special VIP Support',
      },
      {
        ar: 'واكثر حسب طلبك .....!',
        en: 'And More According to Your Needs .....!',
      }
    ]
  }
};

function PricingPlan() {
  const classes = useStyles();
  const theme = useTheme();
  const { t, i18n: { language: locale } } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [currentcy, setCurrentcy] = React.useState('eg');
  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg
          fill="#cccccc"
        >
          <use xlinkHref="/images/saas/deco-med-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Title align="center">
            <strong>
              {t('saas-landing.pricing_title')}
            </strong>
          </Title>
        </div>
        <Grid container spacing={1} justify="center" className={classes.currency}>
          <Grid item>
            <Button variant={currentcy === 'eg' ? 'contained' : 'outlined'} onClick={() => setCurrentcy('eg')} color="primary">
              <img width="20px" src={egypt} alt="eg" />
              {t('saas-landing.egypt_pound')}
            </Button>
          </Grid>
          <Grid item>
            <Button variant={currentcy === 'sd' ? 'contained' : 'outlined'} onClick={() => setCurrentcy('sd')} color="primary">
              <img width="20px" src={saudiArabia} alt="sd" />
              {t('saas-landing.saudia_rial')}
            </Button>
          </Grid>
          <Grid item>
            <Button variant={currentcy === 'us' ? 'contained' : 'outlined'} onClick={() => setCurrentcy('us')} color="primary">
              <img width="20px" src={unitedState} alt="us" />
              {t('saas-landing.us_dollar')}
            </Button>
          </Grid>
        </Grid>

        <div className={classes.pricingWrap}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={600}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                text={feature.main.subscribText[locale]}
                title={t('saas-landing.main')}
                price={feature.main.prices[currentcy]}
                featureList={feature.main.data}
                desc={`${t('saas-landing.annual_renew', { price: feature.main.renew[currentcy] })}`}
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={400}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                text={feature.pro.subscribText[locale]}
                title={t('saas-landing.pro')}
                price={feature.pro.prices[currentcy]}
                featureList={feature.pro.data}
                desc={`${t('saas-landing.annual_renew', { price: feature.pro.renew[currentcy] })}`}
                type="value"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={800}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                text={feature.vip.subscribText[locale]}
                title={t('saas-landing.vip')}
                price={feature.vip.prices[currentcy]}
                featureList={feature.vip.data}
                desc={t('saas-landing.dont_heditate_contact_us')}
              />
            </div>
          </ScrollAnimation>
        </div>
      </Container>
    </div>
  );
}

export default PricingPlan;
