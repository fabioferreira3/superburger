import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { menuSectionStyles } from "./MenuSection.styles";
import { MenuGrid } from "./MenuGrid";

export const MenuSection: React.FC = () => {
  const classes = menuSectionStyles();

  return (
    <Grid container justify={"center"} className={classes.wrapper}>
      <Typography variant={"h2"} className={classes.title}>
        What would you like to eat?
      </Typography>
      <MenuGrid />
    </Grid>
  );
};
