import React from "react";
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

const BackgroundSection: React.FC<any> = ({ imageSource, children }) => {
  const classes = backgroundSectionStyles();

  return (
    <StyledBackgroundImage Tag="section" fluid={imageSource}>
      <div className={classes.backgroundOverlay} />
      {children}
    </StyledBackgroundImage>
  );
};

export default BackgroundSection;
