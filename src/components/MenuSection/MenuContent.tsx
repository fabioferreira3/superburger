import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Img from "gatsby-image";

import { MenuCategory } from "./MenuCategory/MenuCategory";
import { menuCategoryStyles } from "./MenuCategory/MenuCategory.styles";
import { menuItemsData } from "./categoriesData";

export const MenuContent: React.FC<any> = props => {
  const { category, imagesMapping } = props;
  const classes = menuCategoryStyles();
  const items = menuItemsData[category];
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    if (category) {
      setSelectedItem(items[0]);
    }
  }, [category]);

  useEffect(() => {
    console.log("RENDERED: Menu Content");
  });

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        style={{ height: "100%", position: "relative" }}
      >
        {selectedItem && (
          <>
            <Typography variant={"h3"} className={classes.itemImageLabel}>
              {selectedItem.title}
            </Typography>
            <Img
              fluid={imagesMapping[selectedItem.imageId].childImageSharp.fluid}
              style={{ height: "100%" }}
            />
          </>
        )}
      </Grid>
      <Grid item xs={12} sm={6} style={{ height: "100%" }}>
        <Grid container className={classes.wrapper}>
          <MenuCategory items={items} setSelectedItem={setSelectedItem} />
        </Grid>
      </Grid>
    </>
  );
};
