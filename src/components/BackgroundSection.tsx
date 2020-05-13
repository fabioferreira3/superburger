import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

import { backgroundSectionStyles } from "./BackgroundSection.styles";

const StyledBackgroundImage = styled(BackgroundImage)`
  background-attachment: fixed;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 70px 0 70px 0;
  position: relative;
`;

const BackgroundSection: React.FC<any> = props => {
  const classes = backgroundSectionStyles();

  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "main-banner.jpg" }) {
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
          <StyledBackgroundImage Tag="section" fluid={imageData}>
            <div className={classes.backgroundOverlay} />
            {props.children}
          </StyledBackgroundImage>
        );
      }}
    />
  );
};

export default BackgroundSection;
