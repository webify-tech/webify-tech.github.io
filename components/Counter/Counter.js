import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import ArrowIcon from '@material-ui/icons/Reply';
import UsersIcon from '@material-ui/icons/SupervisorAccount';
import LayerIcon from '@material-ui/icons/Layers';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter() {
  const classes = useStyles();
  const text = useText();
  const [play, setPlay] = useState(false);
  const { t } = useTranslation('common');

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container>
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offset={-300}
          afterAnimatedIn={handlePlay}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.counterInner}
            spacing={6}
          >
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    {countup(10, play)}
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <ArrowIcon />
                    {t('saas-landing.counter_experience')}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    {countup(500, play)}
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <UsersIcon />
                    {t('saas-landing.counter_users')}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid md={4} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    {countup(1000, play)}
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <LayerIcon />
                    {t('saas-landing.counter_providers')}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

export default Counter;
