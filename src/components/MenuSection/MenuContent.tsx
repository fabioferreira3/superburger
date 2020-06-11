import React, { useEffect, useMemo, useState } from "react";
import { Fade, Grid, Typography } from "@material-ui/core";
import Img from "gatsby-image";
import LazyLoad from "react-lazyload";

import { MenuCategoryItem } from "./MenuCategoryItem";
import { menuCategoryStyles } from "./MenuCategory.styles";
import { menuItemsData } from "./categoriesData";

export const MenuContent: React.FC<any> = props => {
  const { category, imageSources } = props;
  const classes = menuCategoryStyles();
  const items = menuItemsData[category];
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [trigger, setTrigger] = useState(true);

  const triggerImageTransition = () => {
    setTrigger(false);
  };

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
            <Typography
              variant={"h3"}
              component={"span"}
              className={classes.itemImageLabel}
            >
              {selectedItem.title}
            </Typography>

            <Fade in={trigger} timeout={800}>
              <LazyLoad offset={100}>
                <Img
                  fluid={imageSources[selectedItem.imageId]}
                  style={{ height: "100%" }}
                />
              </LazyLoad>
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
