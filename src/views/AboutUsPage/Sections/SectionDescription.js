import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            Our product is made to help people get all the latest information from all
            around the world. It is made using Alan-AI system , hence making it very easy 
            to use. People of all ages can easily wrap their heads around this as all they 
            have to do is , speak a sentence and rest of the work will be done by the product
            automatically. It is made using new age technologies , is fast and works very 
            efficiently.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
