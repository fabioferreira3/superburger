import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { backgroundSectionStyles } from "./BackgroundSection.styles";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection: React.FC<any> = props => {
  const classes = backgroundSectionStyles();

  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "burger1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <BackgroundImage
            Tag="section"
            className={classes.backgroundSquare}
            fluid={imageData}
          >
            <div className={classes.backgroundOverlay}/>
            {props.children}
          </BackgroundImage>
        );
      }}
    />
  );
};

export default BackgroundSection;
