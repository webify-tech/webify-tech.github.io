import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      overflowX: 'auto'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  },
  title: {
    margin: theme.spacing(5),
    color: theme.palette.primary.main,
    textAlign: 'center'
  }
}));

export default useStyles;
