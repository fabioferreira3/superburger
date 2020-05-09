import React from "react";
import classnames from "classnames";

import BackgroundSection from "../BackgroundSection";
import Logo from "../Logo";
import { bannerSectionStyles } from "./BannerSection.styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const StyledButton = withStyles(theme => ({
  root: {
    fontSize: "1.5em",
    width: "150px",
    padding: "10px",
    marginRight: "10px",
    "&:hover": {
      color: theme.palette.text.primary,
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  primary: {
    background: theme.palette.primary.main,
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
  return (
    <BackgroundSection>
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
