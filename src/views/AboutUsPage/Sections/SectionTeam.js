import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import FaceMarc from "assets/img/faces/marc.jpg";
// import FaceChristian from "assets/img/faces/christian.jpg";
// import FaceKendall from "assets/img/faces/kendall.jpg";
// import FaceAvatar from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>A Developer and Go-Getter </h2>
          <h5 className={classes.description}>
            I am a Developer who loves coding and finds it as easy as breathing. 
            I believe in making user oriented and efficient products which are 
            not only appealing to the eyes but also give an awesome user experience.
            Working with cutting edge technologies has been my thing ever since I started 
            my journey with coding. 
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer className = {classes.backgroundColor}>
        <GridItem md={6} sm={6}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={FaceMarc} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            </CardFooter>
            </Card>
            </GridItem>
            <GridItem md={4} sm={4}>
             
            <CardBody plain>
              <h4 className={classes.cardTitle}>Imran Basha</h4>
              <h6 className={classes.textMuted}>Developer</h6>
              <p className={classes.cardDescription}>
                And I love code like Kanye loves Kanye. Always trying to write my best
                code possible trying new technologies and using best practices.
              </p>
            </CardBody>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}
