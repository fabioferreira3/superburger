import React, { useEffect, useMemo } from "react";
import { Grid, Typography } from "@material-ui/core";
import { menuCategoryStyles } from "./MenuCategory.styles";

export const MenuCategoryItem: React.FC<any> = props => {
  const { title, description, price, onClickCallback } = props;
  const classes = menuCategoryStyles();

  useEffect(() => {
    console.log("RENDERED:  Menu Category Item");
  });

  return (
    <div className={classes.itemWrapper} onClick={onClickCallback}>
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

export const MenuCategory: React.FC<any> = props => {
  const { items, setSelectedItem } = props;
  const classes = menuCategoryStyles();

  useEffect(() => {
    console.log("RENDERED: Menu Category");
  });

  const itemsComp = useMemo(() => {
    return items.map((item: any, idx: number) => (
      <MenuCategoryItem
        {...item}
        key={idx}
        onClickCallback={() => setSelectedItem(item)}
      />
    ));
  }, [items]);

  return <div className={classes.subWrapper}>{itemsComp}</div>;
};
