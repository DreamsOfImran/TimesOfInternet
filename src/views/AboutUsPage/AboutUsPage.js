import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import FooterContent from "components/FooterContent/FooterContent";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.js";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.js";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.js";
import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.js";
import SectionContact from "views/AboutUsPage/Sections/SectionContact.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }); 
  const classes = useStyles();
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
      />
      <Parallax image={require("assets/img/bg13.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>About Us</h1>
              <h4 style = {{
                fontWeight: '500'
              }}>
                Meet the amazing team behind this project and find out more
                about how we work.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          <SectionServices />
          {/* <SectionOffice /> */}
          <SectionContact />
        </div>
      </div>
      <FooterContent />
    </div>
  );
}
