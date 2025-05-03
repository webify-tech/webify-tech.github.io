import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import LangIcon from '@material-ui/icons/Language';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroid from '@material-ui/icons/Phone';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './footer-style';
import languageDetector from '../../lib/languageDetector';
import i18nextConfig from '../../next-i18next.config';

function Copyright() {
  const { t } = useTranslation('common');
  return (
    <Typography variant="body2" display="block" align="center" color="textSecondary">
      &copy;&nbsp;
      {t('saas-landing.copyright', { year: new Date().getFullYear() })}
    </Typography>
  );
}

const Phone = () => (
  <Grid container alignItems="center">
    <PhoneAndroid />
    <span style={{ direction: 'ltr', textAlign: 'left' }}>+20 128 594 9513</span>
  </Grid>
);
const Mail = () => (
  <Grid container alignItems="center">
    <MailIcon />
    <span>webify.tech.eg@gmail.com</span>
  </Grid>
);

function Footer(props) {
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();
  const { invert } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Translation Function
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const [values, setValues] = useState({
    lang: i18n.language
  });

  const footers = [
    {
      title: t('saas-landing.fast_links'),
      isLinks: true,
      description: [t('saas-landing.header_about_us'), t('saas-landing.header_service'), t('saas-landing.header_our_work'), t('saas-landing.header_pricing')],
      link: ['#about_us', '#service', '#our_work', '#pricing'],
    },
    {
      title: t('saas-landing.contact_us'),
      description: [<Phone />, <Mail />],
      link: ['https://wa.me/+201285949513', 'mailto:webify.tech.eg@gmail.com', '', ''],
    },
  ];
  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    const lang = event.target.value;
    let href = router.asPath;
    let pName = router.pathname;
    Object.keys(router.query).forEach((k) => {
      if (k === 'locale') {
        pName = pName.replace(`[${k}]`, lang);
        return;
      }
      pName = pName.replace(`[${k}]`, router.query[k]);
    });
    if (lang) {
      href = pName;
    }

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: lang,
    }));

    router.push(href);
    languageDetector.cache(lang);
    if (lang === 'ar') {
      props.toggleDir('rtl');
    } else {
      props.toggleDir('ltr');
    }
  }

  return (
    <Container
      maxWidth="lg"
      component="footer"
      className={clsx(classes.footer, invert && classes.invert)}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <div className={classes.logo}>
            <img src={imgAPI.logo} alt="logo" />
            <Typography variant="h6" color="textPrimary">
              {t('saas-landing.banner_titlestrong')}
            </Typography>
          </div>
          <Copyright />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent="space-evenly">
            {footers.map(footer => (
              <Grid item xs={12} md={5} key={footer.title} className={classes.siteMapItem}>
                {isDesktop && (
                  <div>
                    <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                      {footer.title}
                    </Typography>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li key={item}>
                          {
                            footer?.isLinks ? (
                              <AnchorLink offset={100} href={footer.link[index]} variant="subtitle1" color="textSecondary">
                                {item}
                              </AnchorLink>
                            )
                              : (
                                <Link target="_blank" href={footer.link[index]} variant="subtitle1" color="textSecondary">
                                  {item}
                                </Link>
                            )
                          }

                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isMobile && (
                  <ExpansionPanel
                    square
                    classes={{
                      root: classes.accordionRoot,
                    }}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.accordionIcon} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      classes={{
                        content: classes.accordionContent,
                      }}
                    >
                      <strong>
                        {footer.title}
                      </strong>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <ul>
                      {footer.description.map((item, index) => (
                        <li key={item}>
                          {
                            footer?.isLinks ? (
                              <AnchorLink offset={100} href={footer.link[index]} variant="subtitle1" color="textSecondary">
                                {item}
                              </AnchorLink>
                            )
                              : (
                                <Link target="_blank" href={footer.link[index]} variant="subtitle1" color="textSecondary">
                                  {item}
                                </Link>
                            )
                          }

                        </li>
                      ))}
                    </ul>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=61564405365963">
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-logo-facebook" />
              </IconButton>
            </Link>
            {/* <IconButton aria-label="TW" className={classes.margin} size="small">
              <i className="ion-logo-twitter" />
            </IconButton>
            <IconButton aria-label="IG" className={classes.margin} size="small">
              <i className="ion-logo-instagram" />
            </IconButton>
            <IconButton aria-label="LI" className={classes.margin} size="small">
              <i className="ion-logo-linkedin" />
            </IconButton> */}
          </div>
          <Select
            value={values.lang}
            onChange={handleChange}
            MenuProps={{
              container: ctn
            }}
            startAdornment={(
              <InputAdornment className={classes.icon} position="start">
                <LangIcon />
              </InputAdornment>
            )}
            className={classes.selectLang}
            input={<OutlinedInput labelWidth={200} name="lang" id="outlined-lang-simple" />}
          >
            {i18nextConfig.i18n.locales.map((locale) => (
              <MenuItem key={locale} value={locale}>{t(locale)}</MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Container>
  );
}

Footer.propTypes = {
  invert: PropTypes.bool,
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  invert: false,
  toggleDir: () => { },
};

export default Footer;
