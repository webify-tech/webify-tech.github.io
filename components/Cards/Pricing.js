import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import useStyles from './cards-style';

export default function Pricing(props) {
  const classes = useStyles();
  const {
    title,
    price,
    featureList,
    desc,
    type,
  } = props;
  const { i18n: { language: locale } } = useTranslation('common');
  const setType = cardType => {
    switch (cardType) {
      case 'basic':
        return classes.basic;
      case 'value':
        return classes.value;
      default:
        return '';
    }
  };
  return (
    <Paper className={clsx(classes.pricing, setType(type))}>
      <div className={classes.title}>
        <Typography>{title}</Typography>
        <Typography variant="h4">
          {price}
        </Typography>
      </div>
      <ul>
        {featureList.map((item, index) => (
          <li key={index.toString()}>
            {locale === 'ar' ? item.ar : item.en}
          </li>
        ))}
      </ul>
      <div className={classes.btnArea}>
        <Typography display="block" className={classes.desc}>{desc}</Typography>
        <Button
          variant="contained"
          color={type === 'basic' ? 'secondary' : 'primary'}
          className={classes.button}
          size="large"
        >
          Choose Plan
        </Button>
      </div>
    </Paper>
  );
}

Pricing.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  featureList: PropTypes.array.isRequired,
  desc: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Pricing.defaultProps = {
  type: ''
};
