import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
// import UnderConstructionPage from "views/UnderConstructionPage/UnderConstructionPage";
// import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
// import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage";
import AboutUsPage from "views/AboutUsPage/AboutUsPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={BlogPostPage} />
      <Route path="/about" component={AboutUsPage} />
      <Route path="/contact" component={ContactUsPage} />
      <Route component={ErrorPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
