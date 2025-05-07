import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import emailjs from "@emailjs/browser";
import brand from '~/public/text/brand';
import imgAPI from '~/public/images/imgAPI';
import routeLink from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './form-style';
import Alert from '../Alert';

const YOUR_SERVICE_ID = 'service_vz13hv1'
const YOUR_TEMPLATE_ID = 'template_7mm0o8h'
const YOUR_PUBLIC_KEY = 'f-9SjXE9tHqkyvmJU'

function Contact() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [notif, setNotif] = useState({
    open: false,
    type: 'success',
    message: ''
  });


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  const handleSubmit = async() => {
    try{
      setNotif({
        open: true,
        type: 'loading',
        message: t('saas-landing.sending')
      });
      const templateParams = {
        sender_name: values.name,
        sender_email: values.email,
        sender_phone: values.phone,
        sender_company: values.company,
        message: values.message
      };
      await emailjs
        .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, {
          publicKey: YOUR_PUBLIC_KEY,
        })
        setNotif({
          open: true,
          type: 'success',
          message: t('saas-landing.message.sent')
        });
    }catch(err){
      console.log('FAILED...', err);
      setNotif({
        open: true,
        type: 'error',
        message: t('saas-landing.message.error')
      })
    }
  };


  const handleClose = () => {
    setNotif({
      open: false,
      type: 'success',
      message: ''
    });
  };

  return (
    <div className={classes.pageWrap}>

      <Alert autoHideDuration={3000} severity={notif?.type} message={notif?.message} open={notif?.open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} />
            
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routeLink.saas.home}>
            <img src={imgAPI.logo} alt="logo" />
            <Typography component="span" className={text.title}>
              {brand.saas.projectName}
            </Typography>
          </a>
        </div>
      </Hidden>
      <Container maxWidth="md" className={classes.innerWrap}>
        <IconButton href={routeLink.saas.home} className={classes.backtohome}>
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-round-back" />
        </IconButton>
        <div className={classes.decoration}>
          <svg
            className={classes.leftDeco}
          >
            <use xlinkHref="/images/saas/deco-bg-left.svg#main" />
          </svg>
          <svg
            className={classes.rightDeco}
          >
            <use xlinkHref="/images/saas/deco-bg-right.svg#main" />
          </svg>
        </div>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h3"
              align="center"
              className={clsx(classes.title, text.title)}
              gutterBottom
            >
              {t('contact_title2')}
            </Typography>
            <Typography className={clsx(classes.desc, text.subtitle2)}>
              {t('contact_subtitle')}
            </Typography>
            <div className={classes.form}>
              <ValidatorForm
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
              >
                <Grid container spacing={6}>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={clsx(classes.input, classes.light)}
                      label={t('form_name')}
                      onChange={handleChange('name')}
                      name="Name"
                      value={values.name}
                      validators={['required']}
                      errorMessages={[t('saas-landing.this.field.is.required')]}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={clsx(classes.input, classes.light, classes.email)}
                      label={t('form_email')}
                      onChange={handleChange('email')}
                      name="Email"
                      value={values.email}
                      validators={['required', 'isEmail']}
                      errorMessages={[t('saas-landing.this.field.is.required'), t('saas-landing.email.is.not.valid')]}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={clsx(classes.input, classes.light)}
                      label={t('form_phone')}
                      onChange={handleChange('phone')}
                      name="Phone"
                      value={values.phone}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextValidator
                      variant="filled"
                      className={clsx(classes.input, classes.light)}
                      label={t('form_company')}
                      onChange={handleChange('company')}
                      name="Company"
                      value={values.company}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="filled"
                      multiline
                      rows="6"
                      className={clsx(classes.input, classes.light)}
                      label={t('form_message')}
                      onChange={handleChange('message')}
                      name="Message"
                      value={values.message}
                    />
                  </Grid>
                </Grid>
                <div className={clsx(classes.btnArea, classes.flex)}>
                  <Button disabled={notif.type === 'loading'} variant="contained" fullWidth={isMobile} type="submit" color="secondary" size="large">
                    {t('form_send')}
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;
