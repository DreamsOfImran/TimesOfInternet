import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/clint-mckoy.jpg";
import FooterContent from "components/FooterContent/FooterContent";

import errorPageStyle from "assets/jss/material-kit-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

const UnderConstructionPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        links={<HeaderLinks dropdownHoverColor="dark" />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>503</h1>
              <h2 className={classes.subTitle}>Under Construction</h2>
              <h4 className={classes.description}>Come back later :)</h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
      <FooterContent />
    </div>
  );
};

export default UnderConstructionPage;
