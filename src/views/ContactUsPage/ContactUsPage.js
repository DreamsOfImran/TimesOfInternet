import React from "react";
// nodejs library that concatenates classes
import emailjs from "emailjs-com";
import classNames from "classnames";
// react components used to create a google map
import Iframe from "react-iframe";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import FooterContent from "components/FooterContent/FooterContent";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);



export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  let form__submit = e => {
    e.preventDefault();
    let name = document.getElementsByTagName("input")[0].value;
    let email = document.getElementsByTagName("input")[1].value;
    let phone = document.getElementsByTagName("input")[2].value;
    let message = document.getElementsByTagName("textarea")[0].value;



    emailjs
      .send(
        "gmail",
        "template_tti5ggf",
        {
          name: name,
          email: email,
          phone: phone,
          message: message
        },
        "user_Nt7a8y0jcNG9gbNEjcvXW"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    e.target.reset();

    console.log(name, email, phone, message);
  };
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="dark"
      />
      <div className={classes.bigMap}>
        <Iframe
          className={classes.bigMap}
          url="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvuqxXx8Nuss5LFseAz2AIfSnivJmKAug&q=Marina Beach,Chennai,India&maptype=satellite"
        ></Iframe>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Send us a message</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p>
                  You can contact us with anything related to our Products. We
                  {"'"}ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <form onSubmit={form__submit}>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    type="text"
                    required="true"
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    type="email"
                    required="true"
                  />
                  <CustomInput
                    labelText="Phone"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    type="number"
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                    type="text"
                    required="true"
                  />
                  <div className={classes.textCenter}>
                    <Button type="submit" color="primary" round>
                      Contact us
                    </Button>
                  </div>
                </form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title="Find us at the office"
                  description={
                    <p>
                      Bld Mihail Kogalniceanu, nr. 8, <br /> 7652 Bucharest,{" "}
                      <br /> Romania
                    </p>
                  }
                  icon={PinDrop}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Give us a ring"
                  description={
                    <p>
                      Michael Jordan <br /> +40 762 321 762 <br /> Mon - Fri,
                      8:00-22:00
                    </p>
                  }
                  icon={Phone}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Legal Information"
                  description={
                    <p>
                      Creative Tim Ltd. <br /> VAT · EN2341241 <br /> IBAN ·
                      EN8732ENGB2300099123 <br /> Bank · Great Britain Bank
                    </p>
                  }
                  icon={BusinessCenter}
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <FooterContent />
    </div>
  );
}
