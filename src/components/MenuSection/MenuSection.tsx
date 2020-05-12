import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { menuSectionStyles } from "./MenuSection.styles";
import {
  BurgerMealIcon,
  DoughnutIcon,
  FriesIcon,
  HamburgerIcon,
} from "../CustomIcons";

const MenuCategory: React.FC<any> = ({ icon: Icon, title }) => {
  const classes = menuSectionStyles();
  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Icon style={{ color: "white", fontSize: 80 }} />
      <Typography variant={"body1"} style={{ color: "white", marginLeft: 20 }}>
        {title}
      </Typography>
      <div className={classes.menuCategoryItemBar} />
    </Grid>
  );
};

export const MenuSection: React.FC = () => {
  const classes = menuSectionStyles();

  return (
    <Grid container justify={"center"} className={classes.wrapper}>
      <Typography variant={"h2"} className={classes.title}>
        What would you like to eat?
      </Typography>
      <Grid container style={{ marginTop: 50 }}>
        <Grid item xs={6} sm={3}>
          <MenuCategory icon={FriesIcon} title={"Starters"} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MenuCategory icon={BurgerMealIcon} title={"Meals"} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MenuCategory icon={HamburgerIcon} title={"Sandwiches"} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <MenuCategory icon={DoughnutIcon} title={"Deserts"} />
        </Grid>
      </Grid>
    </Grid>
  );
};
