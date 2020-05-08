import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";
import { PageLayout } from "../layouts/PageLayout";
import { App } from "../components/App";
import Logo from "../components/Logo";
import BackgroundSection from "../components/BackgroundSection";
import { makeStyles } from "@material-ui/core/styles";

import "../components/layout.css";

export const someStyles = () => {
  return makeStyles(theme => ({
    box: {
      marginTop: "70px",
      width: "75% !important",
      [theme.breakpoints.up("md")]: {
        width: "50% !important",
      },
    },
  }))();
};

const Section: React.FC = () => {
  const classes = someStyles();
  return (
    <BackgroundSection>
      <div className={classes.box}>
        <Logo />
      </div>
    </BackgroundSection>
  );
};

const IndexPage = () => {
  return (
    <App>
      <PageLayout>
        <Section />
        <div style={{ height: "500px", backgroundColor: "orange" }} />
        <SEO title="Home" />
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-3/">Go to page 3</Link>
      </PageLayout>
    </App>
  );
};

export default IndexPage;
