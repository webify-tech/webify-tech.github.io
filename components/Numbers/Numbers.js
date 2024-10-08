import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import useStyles from './numbers-style';
import { useText } from '~/theme/common';

function Numbers() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant="h3" className={clsx(text.title, classes.title)}>
          {t('saas-landing.numbers_talks')}
        </Typography>
      </div>
    </Container>
  );
}

export default Numbers;
