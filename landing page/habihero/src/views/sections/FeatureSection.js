import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/featureStyle.js";

import temporary from "assets/img/image-holder-icon.png";

const useStyles = makeStyles(styles);

export default function FeatureSection() {
  const classes = useStyles();
  const prevIcon = "carousel-control-prev-icon " + classes.carousel
  const nextIcon = "carousel-control-next-icon " + classes.carousel

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Gameplay & Features</h2>
          <h4 className={classes.description}>
            <i className={classes.logo}>
              Section in progress
            </i>
          </h4>
        </GridItem>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={temporary} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={temporary} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={temporary} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className={prevIcon} aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className={nextIcon} aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </GridContainer>
    </div>
  );
}
