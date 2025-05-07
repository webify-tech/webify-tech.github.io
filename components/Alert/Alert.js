import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

// Define severity variants and their corresponding icons
const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
  loading: CircularProgress, // New loading variant
};

// Define styles for the Alert component
const useStyles = makeStyles((theme) => ({
  root: {
    '&.success': {
      backgroundColor: theme.palette.success?.main || '#4caf50',
    },
    '&.error': {
      backgroundColor: theme.palette.error?.main || '#f44336',
    },
    '&.warning': {
      backgroundColor: theme.palette.warning?.main || '#ff9800',
    },
    '&.info': {
      backgroundColor: theme.palette.info?.main || '#2196f3',
    },
    '&.loading': {
      backgroundColor: theme.palette.info?.main || '#9e9e9e', // Neutral background
    },
    ...theme.overrides?.MuiSnackbarContent?.root,
  },
  icon: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },
  action: {
    paddingLeft: theme.spacing(1),
  },
  loadingIcon: {
    color: '#fff', // White color for the loader
  },
}));

// Custom Alert component
function Alert(props) {
  const { className, message, onClose, severity, autoHideDuration, anchorOrigin, ...other } = props;
  const classes = useStyles();
  const Icon = variantIcon[severity];

  return (
    <Snackbar
      anchorOrigin={anchorOrigin || { vertical: 'bottom', horizontal: 'left' }}
      open={!!message}
      autoHideDuration={autoHideDuration || 3000}
      onClose={onClose}
      {...other}
    >
      <SnackbarContent
        className={clsx(classes.root, severity, className)}
        aria-describedby="client-snackbar"
        message={(
          <span id="client-snackbar" className={classes.message}>
            {severity === 'loading' ? (
              <CircularProgress size={20} className={classes.loadingIcon} />
            ) : (
              <Icon className={classes.icon} />
            )}
            {message}
          </span>
        )}
        action={severity === 'loading' ? null : [
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
            className={classes.action}
          >
            <CloseIcon fontSize="small" />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}

Alert.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning', 'loading']).isRequired,
  autoHideDuration: PropTypes.number,
  anchorOrigin: PropTypes.object,
};

Alert.defaultProps = {
  onClose: () => {},
  className: '',
  message: '',
  autoHideDuration: 6000,
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
};

export default Alert;
