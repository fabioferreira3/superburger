import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Img from "gatsby-image";
import classnames from "classnames";
import { categories } from "./categoriesData";

import { menuSectionStyles } from "./MenuSection.styles";
import { getMenuItemsImagesData } from "./MenuImages";

export const MenuCategoryNavItem: React.FC<any> = props => {
  const { icon: Icon, title, slug, activeCategory, setActiveCategory } = props;
  const classes = menuSectionStyles();

  const isActive = activeCategory === slug;

  return (
    <Grid
      container
      item
      xs={12}
      sm={3}
      alignItems={"center"}
      justify={"space-evenly"}
      className={classnames(
        classes.menuCategoryWrapper,
        activeCategory === slug ? classes.menuCategoryWrapperActive : ""
      )}
      onClick={() => setActiveCategory(slug)}
    >
      <Grid item xs={6} className={classes.menuCategoryIconWrapper}>
        <Icon
          className={classnames(
            classes.menuCategoryIcon,
            isActive ? classes.menuCategoryIconActive : ""
          )}
        />
      </Grid>
      <Grid item xs>
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
  );
};

export const MenuContent: React.FC<any> = props => {
  const { imagesMapping } = props;
  return (
    <>
      <MenuCategory />
    </>
  );
};

export const MenuGrid: React.FC = () => {
  const classes = menuSectionStyles();
  const menuItemsImages = getMenuItemsImagesData();
  const [activeCategory, setActiveCategory] = useState("meals");

  return (
    <Grid container className={classes.menuGridWrapper}>
      <Grid container className={classes.menuGridNav}>
        {categories.map((category: any) => (
          <MenuCategoryNavItem
            key={category.slug}
            icon={category.icon}
            title={category.title}
            slug={category.slug}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </Grid>
      <Grid container className={classes.menuGridContent}>
        <MenuContent imagesMapping={menuItemsImages} />
      </Grid>
    </Grid>
  );
};
