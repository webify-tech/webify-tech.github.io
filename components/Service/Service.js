import React, { useState } from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import ParallaxLarge from '../Parallax/Large';
import Title from '../Title';
import useStyles from './service-style';

function Feature() {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();

  const [value, setValue] = useState(0);
  const { t, i18n: { language: locale } } = useTranslation('common');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={clsx(classes.item, classes.last)}>
      <Title align="center">
        {t('saas-landing.feature_title3')}
      </Title>
      <div className={classes.tab} id="service">
        <Grid container spacing={6}>
          {!isMobile && <Grid item md={1} xs={12} />}
          <Grid item md={10} xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab classes={{ root: classes.tabLabel, selected: classes.selected }} label={t('saas-landing.store')} />
              <Tab classes={{ root: classes.tabLabel, selected: classes.selected }} label={t('saas-landing.portfolio')} />
              <Tab classes={{ root: classes.tabLabel, selected: classes.selected }} label={t('saas-landing.landing_page')} />
            </Tabs>
            <div className={classes.tabContent}>
              {value === 0 && (
                <section>
                  <Typography component="h6" display="block" align="center" className={text.subtitle2}>
                    {t('saas-landing.feature_desc1')}
                  </Typography>
                  <div className={classes.illustrationCenter}>
                    <figure className={clsx(classes.figure, classes.screen)}>
                      <img src={locale === 'ar' ? imgAPI.saas[4] : imgAPI.saas_en[4]} alt="screen" />
                    </figure>
                  </div>
                </section>
              )}
              {value === 1 && (
                <section>
                  <Typography component="h6" display="block" align="center" className={text.subtitle2}>
                    {t('saas-landing.feature_desc2')}
                  </Typography>
                  <div className={classes.illustrationCenter}>
                    <figure className={clsx(classes.figure, classes.screen)}>
                      <img src={locale === 'ar' ? imgAPI.saas[5] : imgAPI.saas_en[5]} alt="screen" />
                    </figure>
                  </div>
                </section>
              )}
              {value === 2 && (
                <section>
                  <Typography component="h6" display="block" align="center" className={text.subtitle2}>
                    {t('saas-landing.feature_desc3')}
                  </Typography>
                  <div className={classes.illustrationCenter}>
                    <figure className={clsx(classes.figure, classes.screen)}>
                      <img src={locale === 'ar' ? imgAPI.saas[6] : imgAPI.saas_en[6]} alt="screen" />
                    </figure>
                  </div>
                </section>
              )}
              <ParallaxLarge />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Feature;
