import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Typography } from "@material-ui/core";
import { aboutStyles } from "./About.styles";

export const About: React.FC = () => {
  const classes = aboutStyles();
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "burger2.jpg" }) {
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
          <div className={classes.wrapper}>
            <Img
              fluid={data.desktop.childImageSharp.fluid}
              className={classes.mainImage}
            />
            <div className={classes.contentWrapper}>
              <Typography variant="h2" color={"textPrimary"}>
                Tradition and Quality built since 1976
              </Typography>
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
            </div>
          </div>
        );
      }}
    />
  );
};
