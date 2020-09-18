import React, { useState, useEffect, createRef } from "react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Info from "components/Typography/Info";
import sectionSimilarStoriesStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle.js";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(sectionSimilarStoriesStyle);

const NewsCard = ({ article, i, activeArticle }) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) =>
    window.scroll(0, ref.current.offsetParent.offsetTop + 850);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  return (
    <Card
      blog
      style={activeArticle === i ? { borderBottom: "10px solid #22289a" } : {}}
      ref={elRefs[i]}
    >
      <CardHeader image>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img
            src={
              article.urlToImage ||
              "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
            }
            alt="..."
            height="200"
          />
        </a>
      </CardHeader>
      <CardBody
        style={{ height: "300px", minHeight: "250px", overflow: "hidden" }}
      >
        <Info>
          <h6>{article.source.name}</h6>
        </Info>
        <h4 className={classes.cardTitle}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h4>
        <p className={classes.description}>
          {article.description
            ? article.description.slice(0, 150) + "..."
            : " "}
        </p>
      </CardBody>
      <CardFooter>
        <div
          style={{
            display: "flex",
            flex: "auto",
            justifyContent: "space-between",
          }}
        >
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="MuiListItem-root"
          >
            Learn more
          </a>
          <h3>{i + 1}</h3>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
