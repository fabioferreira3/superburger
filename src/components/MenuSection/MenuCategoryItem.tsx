import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

import { menuCategoryStyles } from "./MenuCategory.styles";

export const MenuCategoryItem: React.FC<any> = props => {
  const { setSelectedItem, triggerImageTransition } = props;
  const { title, description, price } = props.item;
  const classes = menuCategoryStyles();

  return (
    <div
      className={classes.itemWrapper}
      onClick={() => {
        setSelectedItem(props.item);
        triggerImageTransition();
      }}
    >
      <Grid
        container
        justify={"space-between"}
        className={classes.itemTitleWrapper}
      >
        <Typography className={classes.itemTitle}>{title}</Typography>
        <Typography className={classes.itemPrice}>{price}</Typography>
      </Grid>
      <Grid container>
        <Typography className={classes.itemDescription}>
          {description}
        </Typography>
      </Grid>
    </div>
  );
};
