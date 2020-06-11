import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import classnames from "classnames";

import BackgroundSection from "../BackgroundSection/BackgroundSection";
import Logo from "../Logo";
import { bannerSectionStyles } from "./BannerSection.styles";
import { getBannerImage } from "./Image";

export const StyledButton = withStyles(theme => ({
  root: {
    width: 150,
    padding: 10,
    marginRight: 10,
    "&:hover": {
      color: theme.palette.text.primary,
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  primary: {
    background: theme.palette.primary.main,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  secondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
  },
}))(({ classes, type, children }: any) => (
  <Button className={classnames(classes.root, classes[type])}>
    {children}
  </Button>
));

export const BannerSection: React.FC = () => {
  const classes = bannerSectionStyles();
  const bannerImage = getBannerImage();
  return (
    <BackgroundSection imageSource={bannerImage.banner_.childImageSharp.fluid}>
      <div className={classes.box}>
        <Logo />
      </div>
      <div className={classes.actionButtons}>
        <StyledButton type={"secondary"}>Our Menu</StyledButton>
        <StyledButton type={"primary"}>About us</StyledButton>
      </div>
    </BackgroundSection>
  );
};
