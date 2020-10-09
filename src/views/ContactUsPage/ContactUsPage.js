import React from "react";
// nodejs library that concatenates classes
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
import './ContactUsPage.css'; 
import * as emailjs from "emailjs-com";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);



export default function ContactUsPage() {

  
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();



function sendEmail(e){
  e.preventDefault();


    emailjs.sendForm("gmail",
      "template_7wyi0py",
      e.target,
      "user_PD3dfcHmEBn6KzJWnAcNm"
      )
      .then((result) => {

          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }






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

         <form className="contact-form" onSubmit={sendEmail}>
     
      <label>Name</label>
      <input type="text" name="name" />
       <label>Phone number</label>
      <input type="text" name="phone" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />

      <input type="submit" value="Send" />
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

