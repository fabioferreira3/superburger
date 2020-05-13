import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Img from "gatsby-image";
import classnames from "classnames";

import { menuSectionStyles } from "./MenuSection.styles";

import {
  BurgerMealIcon,
  DoughnutIcon,
  FriesIcon,
  HamburgerIcon,
} from "../CustomIcons";
import { MenuItemsImagesData } from "./MenuImages";

export const MenuCategoryNavItem: React.FC<any> = props => {
  const { icon: Icon, title, slug, activeCategory, setActiveCategory } = props;
  const classes = menuSectionStyles();

  const isActive = activeCategory === slug;

  return (
    <Grid
      item
      xs={6}
      sm={3}
      className={classes.menuCategoryItem}
      onClick={() => setActiveCategory(slug)}
    >
      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        className={classnames(
          classes.menuCategoryWrapper,
          activeCategory === slug ? classes.menuCategoryWrapperActive : ""
        )}
      >
        <Icon
          className={classnames(
            classes.menuCategoryIcon,
            isActive ? classes.menuCategoryIconActive : ""
          )}
        />
        <Typography
          variant={"body1"}
          className={classnames(
            classes.menuCategoryTitle,
            isActive ? classes.menuCategoryTitleActive : ""
          )}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

const MenuCategory: React.FC = () => {

  return (
    <>
      {/*<Grid item sm={6}>*/}
      {/*  <Img fluid={imagesData["burgerItem3"].childImageSharp.fluid} />*/}
      {/*</Grid>*/}
      {/*<Grid item sm={6}>*/}
      {/*  2*/}
      {/*</Grid>*/}
    </>
  )
}

export const MenuContent: React.FC = () => {
  const imagesData = MenuItemsImagesData();
  console.log(imagesData);
  return (
    <>
      <MenuCategory/>
    </>
  );
};

export const MenuGrid: React.FC = () => {
  const classes = menuSectionStyles();
  const [activeCategory, setActiveCategory] = useState("meals");
  const categories = {
    STARTERS: "starters",
    MEALS: "meals",
    SANDWICHES: "sandwiches",
    DESERTS: "deserts",
  };

  return (
    <Grid container className={classes.menuGridWrapper}>
      <Grid container className={classes.menuGridNav}>
        <MenuCategoryNavItem
          icon={FriesIcon}
          title={"Starters"}
          slug={categories.STARTERS}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <MenuCategoryNavItem
          icon={BurgerMealIcon}
          title={"Meals"}
          slug={categories.MEALS}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <MenuCategoryNavItem
          icon={HamburgerIcon}
          title={"Sandwiches"}
          slug={categories.SANDWICHES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <MenuCategoryNavItem
          icon={DoughnutIcon}
          title={"Deserts"}
          slug={categories.DESERTS}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </Grid>
      <Grid container className={classes.menuGridContent}>
        <MenuContent />
      </Grid>
    </Grid>
  );
};
