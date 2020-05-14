import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import { aboutStyles } from "./About.styles";

export const About: React.FC = () => {
  const classes = aboutStyles();

  useEffect(() => {
    console.log("RENDERED: About section");
  });

  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "about-banner.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Grid container className={classes.wrapper}>
            <Grid item xs={12} md={8}>
              <Img
                fluid={data.desktop.childImageSharp.fluid}
                className={classes.mainImage}
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={4}
              justify={"space-between"}
              direction={"column"}
              className={classes.contentWrapper}
            >
              <Grid container item justify={"center"} direction={"column"}>
                <Typography variant="h2" color={"textPrimary"}>
                  Tradition and Quality built since 1976
                </Typography>
              </Grid>
              <Grid container item direction={"column"}>
                <Typography
                  variant="body1"
                  color={"textPrimary"}
                  style={{ marginTop: "25px" }}
                >
                  Our store is family owned and operated, and continues to offer
                  the same tireless efforts and dedication to give our customers
                  impeccable service and great tasting burgers.
                </Typography>
                <Typography
                  variant="body1"
                  color={"textPrimary"}
                  style={{ marginTop: "25px" }}
                >
                  We always meet the highest standards of quality and freshness.
                  Our very own creative seasoning combined with our traditional
                  style of cooking offer our customers unique tasting and
                  flavorful dishes that they come back to enjoy.
                </Typography>
              </Grid>
              <Grid
                container
                item
                justify={"space-around"}
                className={classes.socialWrapper}
              >
                <TwitterIcon className={classes.socialIcon} />
                <FacebookIcon className={classes.socialIcon} />
                <InstagramIcon className={classes.socialIcon} />
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    />
  );
};
