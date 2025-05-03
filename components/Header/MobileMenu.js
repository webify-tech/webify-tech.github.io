import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'next-i18next';
import routeLink from '~/public/text/link';
import useStyles from './header-style';
import navMenu from './menu';
const offset = [50, 100, 100, 100];
function MobileMenu(props) {
  const classes = useStyles();
  const { toggleDrawer, open } = props;
  const { t } = useTranslation('common');

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={clsx(classes.menu, open && classes.menuOpen)}>
        <List component="nav">
          {navMenu.map((item, index) => (
            <AnchorLink className={classes.anchorlink} href={`#${item}`} offset={offset[index] || 100}>
              <ListItem
                button
                component="a"
                key={index.toString()}
                style={{ animationDuration: index * 0.15 + 's' }}
              >
                <ListItemText primary={t('saas-landing.header_' + item)} className={classes.menuList} />
              </ListItem>
            </AnchorLink>
          ))}
          <ListItem
            button
            component="a"
            href={routeLink.saas.contact}
            style={{ animationDuration: navMenu.length * 0.15 + 's' }}
          >
            <ListItemText primary={t('saas-landing.header_contact')} className={classes.menuList} />
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
