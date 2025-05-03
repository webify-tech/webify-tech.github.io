import React, { useEffect, useRef } from 'react';
import { CircularProgress, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './img-thumb-style';
function Iframe(props) {
    const {
 link, title, handleClose, img
} = props;
    const classes = useStyles();
    const frame = useRef(null);
    const [loading, setLoading] = React.useState(false);
    useEffect(() => {
        setLoading(true);
        frame.current.addEventListener('load', () => {
            setLoading(false);
      });
      }, []);
    return (
      <div className={classes.dialog}>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        {loading && (
        <div style={{ backgroundImage: `url(${img})` }} className={classes.loading}>
          <CircularProgress />
        </div>
        )}
        <iframe id="iframe" ref={frame} className={clsx(classes.iframe, loading && classes.hide)} src={link} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    );
}

Iframe.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired
};
export default Iframe;
