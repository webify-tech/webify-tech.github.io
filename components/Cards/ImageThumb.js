import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Button, Hidden, Modal } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useText } from "~/theme/common";
import useStyles from "./img-thumb-style";
import Iframe from "./Iframe";

export default function ImageThumb(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const text = useText();
  const { img, title, link, size } = props;

  const { t } = useTranslation("common");
  const setSize = (sizePaper) => {
    switch (sizePaper) {
      case "short":
        return classes.short;
      case "long":
        return classes.long;
      default:
        return classes.medium;
    }
  };

  return (
    <Paper className={clsx(classes.imgThumb, setSize(size))}>
      <div className={classes.figure}>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <div className={classes.detail}>
        <Typography variant="h6" className={text.subtitle}>
          {title}
        </Typography>
        <Hidden mdUp>
          <Button
            size="small"
            className={classes.btn}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("saas-landing.view_project")}
          </Button>
        </Hidden>
        <Hidden smDown>
          <Button size="small" className={classes.btn} onClick={handleOpen}>
            {t("saas-landing.view_project")}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Iframe
              img={img}
              link={link}
              title={title}
              handleClose={handleClose}
            />
          </Modal>
        </Hidden>
      </div>
    </Paper>
  );
}

ImageThumb.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
