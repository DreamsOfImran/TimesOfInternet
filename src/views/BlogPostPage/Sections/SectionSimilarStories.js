import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import office2 from "assets/img/examples/office2.jpg";
import NewsCard from "components/NewsCard/NewsCard";

import { animateScroll } from "react-scroll";

import sectionSimilarStoriesStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle.js";

const useStyles = makeStyles(sectionSimilarStoriesStyle);

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

export default function SectionSimilarStories({ articles, activeArticle }) {
  const classes = useStyles();

  useEffect(() => {
    if (articles.length) animateScroll.scrollTo(850);
  }, [articles]);

  if (!articles.length) {
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem md={12}>
              <h2 className={classes.title + " " + classes.textCenter}>
                Few examples to ask for
              </h2>
              <br />
              <GridContainer>
                {infoCards.map((infoCard) => (
                  <GridItem xs={12} sm={6} md={6}>
                    <Card
                      raised
                      background
                      style={{ backgroundImage: "url(" + office2 + ")" }}
                    >
                      <CardBody background>
                        <h3 className={classes.cardTitle}>{infoCard.title}</h3>
                        {infoCard.info ? (
                          <h5>
                            {infoCard.title.split(" ")[2]}: {infoCard.info}
                          </h5>
                        ) : null}
                        <h4 className={classes.category}>
                          <b style={{ fontWeight: 400 }}>Try saying:</b>{" "}
                          {infoCard.text}
                        </h4>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
              The News you asked for
            </h2>
            <br />
            <GridContainer>
              {articles.map((article, i) => (
                <GridItem xs={12} sm={4} md={4}>
                  <NewsCard
                    article={article}
                    i={i}
                    activeArticle={activeArticle}
                  />
                </GridItem>
              ))}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
