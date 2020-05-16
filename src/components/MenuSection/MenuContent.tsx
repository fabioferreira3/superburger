import React, { useEffect, useMemo, useState } from "react";
import { Fade, Grid, Typography } from "@material-ui/core";
import Img from "gatsby-image";

import { MenuCategoryItem } from "./MenuCategoryItem";
import { menuCategoryStyles } from "./MenuCategory.styles";
import { menuItemsData } from "./categoriesData";
import { generateImageSources } from "../../helpers/generateImageSources";

export const MenuContent: React.FC<any> = props => {
  const { category, imagesMapping } = props;
  const classes = menuCategoryStyles();
  const items = menuItemsData[category];
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [trigger, setTrigger] = useState(true);

  const imageSources = generateImageSources(imagesMapping);
  console.log(imageSources);

  useEffect(() => {
    console.log(selectedItem, "selItem");
  }, [selectedItem]);

  const triggerImageTransition = () => {
    setTrigger(false);
  };

  const imagesList = () => {};

  const itemsComp = useMemo(() => {
    return items.map((item: any, idx: number) => (
      <MenuCategoryItem
        key={idx}
        item={item}
        setSelectedItem={setSelectedItem}
        triggerImageTransition={triggerImageTransition}
      />
    ));
  }, [items]);

  useEffect(() => {
    if (category) {
      setSelectedItem(items[0]);
      triggerImageTransition();
    }
  }, [category]);

  useEffect(() => {
    if (!trigger) {
      setTrigger(true);
    }
  }, [trigger]);

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
            <Fade in={trigger} timeout={800}>
              <Img fluid={imageSources} style={{ height: "100%" }} />
            </Fade>
          </>
        )}
      </Grid>
      <Grid item xs={12} sm={6} style={{ height: "100%" }}>
        <Grid container className={classes.wrapper}>
          <div className={classes.subWrapper}>{itemsComp}</div>
        </Grid>
      </Grid>
    </>
  );
};
