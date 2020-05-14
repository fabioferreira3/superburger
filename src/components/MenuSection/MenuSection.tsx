import React from "react";
import { Grid } from "@material-ui/core";

import { menuSectionStyles } from "./MenuSection.styles";
import { MenuGrid } from "./MenuGrid";
import { SectionTitle } from "../SectionTitle";

export const MenuSection: React.FC = () => {
  const classes = menuSectionStyles();

  return (
    <Grid container justify={"center"} className={classes.wrapper}>
      <SectionTitle
        title={"What would you like to eat?"}
        subtitle={"our delicious menu"}
      />
      <MenuGrid />
    </Grid>
  );
};
