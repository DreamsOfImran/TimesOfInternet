/*eslint-disable*/ import React, { useEffect, useState } from "react";
// nodejs library to set properties for components
import alanBtn from "@alan-ai/alan-sdk-web";
import wordToNumbers from "words-to-numbers";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import FooterContent from "components/FooterContent/FooterContent.js";
// sections for this page
import SectionSimilarStories from "./Sections/SectionSimilarStories.js";

import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";

const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  const alanKey = process.env.REACT_APP_ALAN_KEY;

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2 ? wordToNumbers(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
  }, [alanKey]);
  const classes = useStyles();
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "light",
        }}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4 className={classes.subtitle}>
                Voice controlled web application created using ReactJs, styled
                with Material-UI and integerated with Alan-AI for your voice
                commands. Get the latest news around the world. All you need to
                do is,
              </h4>
              <br />
              <Button color="danger" size="lg">
                <i className="fas fa-play" />
                Just Ask
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionSimilarStories
            articles={newsArticles}
            activeArticle={activeArticle}
          />
        </div>
      </div>
      <FooterContent />
    </div>
  );
}
