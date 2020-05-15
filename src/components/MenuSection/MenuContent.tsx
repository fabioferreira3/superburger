import React, { useEffect, useMemo, useState } from "react";
import { Fade, Grid, Typography } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import Img from "gatsby-image";

import { MenuCategoryItem } from "./MenuCategoryItem";
import { menuCategoryStyles } from "./MenuCategory.styles";
import { menuItemsData } from "./categoriesData";

export const MenuContent: React.FC<any> = props => {
  const { category, imagesMapping } = props;
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
            <Typography variant={"h3"} className={classes.itemImageLabel}>
              {selectedItem.title}
            </Typography>
            <Fade in={trigger} timeout={800}>
              <Img
                fluid={[
                  imagesMapping[selectedItem.imageId].childImageSharp.fluid,
                  {
                    ...imagesMapping[`${selectedItem.imageId}_s2`]
                      .childImageSharp.fluid,
                    media: `(max-width:1920px) and (min-width:1600px)`,
                  },
                  {
                    ...imagesMapping[`${selectedItem.imageId}_s3`]
                      .childImageSharp.fluid,
                    media: `(max-width:1599px) and (min-width:1366px)`,
                  },
                  {
                    ...imagesMapping[`${selectedItem.imageId}_s4`]
                      .childImageSharp.fluid,
                    media: `(max-width:1365px) and (min-width:1024px)`,
                  },
                  {
                    ...imagesMapping[`${selectedItem.imageId}_s5`]
                      .childImageSharp.fluid,
                    media: `(max-width:1023px) and (min-width:768px)`,
                  },
                  {
                    ...imagesMapping[`${selectedItem.imageId}_s6`]
                      .childImageSharp.fluid,
                    media: `(max-width:767px)`,
                  },
                ]}
                style={{ height: "100%" }}
              />
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
