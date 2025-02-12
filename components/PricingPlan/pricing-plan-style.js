import { makeStyles } from '@material-ui/core/styles';

const pricingStyles = makeStyles(theme => ({
  subtitle: {
    marginBottom: theme.spacing(5)
  },
  decoration: {
    position: 'absolute',
    width: 1280,
    height: 960,
    '& svg': {
      width: 1280,
      height: '100%',
      fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      [theme.breakpoints.up('lg')]: {
        transform: 'scale(1.7, 1)',
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  item: {
    '&:hover': {
      zIndex: '21 !important'
    }
  },
  pricingWrap: {
    alignItems: 'center',
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      '& > div': {
        flexGrow: 1
      }
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 5),
    },
    '& > *': {
      margin: theme.spacing(0, 1)
    },
    '& > *:first-child, & > *:last-child': {
      zIndex: 1,
    }
  },
  currency: {
    '& img': {
      margin: '0 5px'
    },
    '& button': {
      padding: '5px 15px'
    },
    // [theme.breakpoints.down('xs')]: {
    //   '& > div': {
    //     padding: '1px'
    //   },
    //   '& button': {
    //     padding: '5px 5px'
    //   }
    // }
  }
}));

export default pricingStyles;
