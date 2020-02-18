import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>About HabiHero</h2>
          <h4 className={classes.description}> 
            <i className={classes.logo}> 
              HabiHero is an android-based game helping 1st graders overcome their numeracy challenges by saving our virtual endangered animals.
            </i>
          </h4>
          <h5 className={classes.description}>
            <br></br><br></br>
            From basic addition to subtraction, the application utilizes gamification with a focus on saving endangered animals and their habitats. 
            Each animal represents a topic in the math curricula that is based on the common core standards. 
            Players must solve a variety of math problems pertaining to that topic in order to restore the animal's threatened environment. 
            We aim to motivate students to get the practice they need to improve their math skills through a fun and meaningful way. 
            From tigers to pandas, students can progress through each level of the game as they encounter a variety of endangered animals. 
            Our gameplay allows students to solve relevant math problems that relate to the environment. 
            By eliminating the threats in the game environment, correct answers give the student the opportunity to be a hero! 
            Habihero aims to instill conservational values at an early age, so future generations can challenge the environmental issues that affect our beloved animals.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Unlock New Animals"
              description="Encounter a variety of endangered animals. 
                           Explore their habitat and help save them from threats."
              icon=':tiger_face:'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Solve Interactive Problems"
              description="Solve math problems that relate to the environment. 
                           Correct answers give you the opportunity to be a hero!"
              icon=':panda_face:'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Make A Difference"
              description="Instilling conservational values and challenge the environmental issues that affect our animals."
              icon=':koala:'
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
