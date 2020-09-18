import React from "react";
import Footer from "components/Footer/Footer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Favorite from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core";
import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";

const useStyles = makeStyles(blogPostPageStyle);

const FooterContent = () => {
  const classes = useStyles();
  return (
    <Footer
      content={
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://twitter.com/DreamsOfImran"
                  target="_blank"
                  className={classes.block}
                  rel="noopener noreferrer"
                >
                  <i className="MuiSvgIcon-root fab fa-twitter" />
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://facebook.com/DreamsOfImran"
                  target="_blank"
                  className={classes.block}
                  rel="noopener noreferrer"
                >
                  <i className="MuiSvgIcon-root fab fa-facebook" />
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://instagram.com/dreamsofimran"
                  target="_blank"
                  className={classes.block}
                  rel="noopener noreferrer"
                >
                  <i className="MuiSvgIcon-root fab fa-instagram" />
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://github.com/DreamsOfImran"
                  target="_blank"
                  className={classes.block}
                  rel="noopener noreferrer"
                >
                  <i className="MuiSvgIcon-root fab fa-github" />
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a
              href="https://dreamsofimran.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              DreamsOfImran
            </a>
            .
          </div>
        </div>
      }
    />
  );
};

export default FooterContent;
