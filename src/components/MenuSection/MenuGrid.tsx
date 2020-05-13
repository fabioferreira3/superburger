import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { categories } from "./categoriesData";

import { menuSectionStyles } from "./MenuSection.styles";
import { getMenuItemsImagesData } from "./MenuImages";
import { MenuContent } from "./MenuContent";
import { MenuCategoryNavItem } from "./MenuCategoryNavItem";

export const MenuGrid: React.FC = () => {
  const classes = menuSectionStyles();
  const menuItemsImages = getMenuItemsImagesData();
  const [activeCategory, setActiveCategory] = useState("meals");

  useEffect(() => {
    console.log("RENDERED: Menu Grid");
  });

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
        <MenuContent
          imagesMapping={menuItemsImages}
          category={activeCategory}
        />
      </Grid>
    </Grid>
  );
};
