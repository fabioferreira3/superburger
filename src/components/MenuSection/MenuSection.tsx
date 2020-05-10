import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { menuSectionStyles } from "./MenuSection.styles";

export const MenuSection: React.FC = () => {
  const classes = menuSectionStyles();

  return (
    <Grid container className={classes.wrapper}>
      <Typography variant={"h2"}>Teste</Typography>
    </Grid>
  );
};
