import React from "react";
import { menuSectionStyles } from "./MenuSection.styles";
import { Grid, Typography } from "@material-ui/core";
import classnames from "classnames";

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
