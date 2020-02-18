import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/jiyun.png";
import team2 from "assets/img/faces/chad.png";
import team3 from "assets/img/faces/andre.png";
import team4 from "assets/img/faces/adam.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Team</h2>
      <br />
      <h4 className={classes.description}>
        <i>
          We are a team of Informatics students, attending the University of Washington in Seattle. <br />
          HabiHero is our capstone project that we have dedicated nearly 6 months to, and we can't wait to release our app. 
        </i>
      </h4>
      <br />
      <div>
        <GridContainer>     
          <TeamMember classes={classes} imageClasses={imageClasses} teamName='Jiyun Yu' teamJob='front-end developer' 
            teamImage={team1} teamDescription='jyu98@uw.edu' />
          <TeamMember classes={classes} imageClasses={imageClasses} teamName='Chad Ohta' teamJob='back-end developer' 
            teamImage={team2} teamDescription='chadohta@gmail.com' />
          <TeamMember classes={classes} imageClasses={imageClasses} teamName='Andre Magallanes' teamJob='UX/UI designer' 
            teamImage={team3} teamDescription='magalj@uw.edu' />
          <TeamMember classes={classes} imageClasses={imageClasses} teamName='Adam Pumputis' teamJob='graphic designer' 
            teamImage={team4} teamDescription='akyp@uw.edu' />
        </GridContainer>
      </div>
    </div>
  );
}

class TeamMember extends Component {
  render() {
    let classes = this.props.classes;
    let imageClasses = this.props.imageClasses;
    let teamName = this.props.teamName;
    let teamJob = this.props.teamJob;
    let teamDescription = this.props.teamDescription;
    let teamImage = this.props.teamImage;

    return (
      <GridItem xs={6} sm={6} md={3}>
        <Card plain>
          <GridItem xs={12} sm={12} md={10} className={classes.itemGrid}>
            <img src={teamImage} alt={teamName} className={imageClasses} />
          </GridItem>
          <h4 className={classes.cardTitle}>
            {teamName}
          <br />
            <small className={classes.smallTitle}>{teamJob}</small>
          </h4>
          <CardBody>
            <p className={classes.description}>
              {teamDescription}
            </p>
          </CardBody>
          <CardFooter className={classes.justifyCenter}>
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
            >
              <i className={classes.socials + " fab fa-twitter"} />
            </Button>
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
            >
              <i className={classes.socials + " fab fa-instagram"} />
            </Button>
            <Button
              justIcon
              color="transparent"
              className={classes.margin5}
            >
              <i className={classes.socials + " fab fa-facebook"} />
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    );
  }
}