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
        <GridItem xs={12} sm={12} md={10}>
          <h2 className={classes.title}>About HabiHero</h2>
          <h4 className={classes.description}> 
            <i className={classes.logo}> 
              Habihero is an android application dedicated in helping 1st graders overcome their numeracy difficulties with embedded conservational and environmental values. 
            </i>
          </h4>
          <h5 className={classes.description}>
            <br></br><br></br>
            From basic addition to subtraction, the application utilizes game-based learning through a focus on saving endangered animals. 
            Each endangered species represents a topic in the math curricula. Users must solve a variety of math problems pertaining to 
            that topic in order to clean up the animal's terrible environment. We aim to help students get the practice they need to 
            improve their math skills through a fun and more meaningful way.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Unlock New Animals"
              description="From orcas to pandas, progress through each level of the game to encounter a variety of endangered animals. 
                           Explore their habitat and help save them from dangers."
              icon=':tiger_face:'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Solve Interactive Problems"
              description="Our gameplay allows students to solve relevant math problems that relate to the environment. 
                           Correct answers give them the opportunity to be a hero!"
              icon=':panda_face:'
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Make A Difference"
              description=" By instilling conservational values at an early age, future generations can challenge the environmental issues that affect our beloved animals."
              icon=':koala:'
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
