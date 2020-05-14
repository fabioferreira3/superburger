import React from "react";
import { Grid, Typography } from "@material-ui/core";
import classnames from "classnames";
import { sectionTitleStyles } from "./SectionTitle.styles";

export const SectionTitle: React.FC<any> = ({
  title,
  subtitle,
  inversed = false,
}) => {
  const classes = sectionTitleStyles();
  const fontColor = !inversed ? "textPrimary" : "textSecondary";

  return (
    <Grid container justify={"center"} direction={"column"}>
      <Typography
        component={"span"}
        color={fontColor}
        className={classnames(classes.title, classes.subtitle)}
      >
        {subtitle}
      </Typography>
      <Typography variant={"h2"} color={fontColor} className={classes.title}>
        {title}
      </Typography>
    </Grid>
  );
};
