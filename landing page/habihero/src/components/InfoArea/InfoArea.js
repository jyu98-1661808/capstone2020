import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// emoji library 
import Emoji from "react-emoji-render";

import styles from "assets/jss/material-kit-react/components/infoStyle.js";

const useStyles = makeStyles(styles);


export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, vertical, icon } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper} >
        <Emoji className={iconClasses} text={icon} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};
