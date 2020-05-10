import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { statsSectionStyles } from "./StatsSection.styles";
import { BreadIcon, BurgerIcon, FoodBoxIcon, MealIcon } from "../CustomIcons";

const Stat: React.FC<any> = ({ statNumber, icon: Icon, children }) => {
  const classes = statsSectionStyles();
  return (
    <div className={classes.statItem}>
      <div className={classes.statItemIcon}>
        <Icon style={{ fontSize: 90, color: "white" }} />
      </div>
      <span className={classes.statItemNumber}>{statNumber}</span>
      <div className={classes.statItemContent}>
        <Typography variant={"body1"} component={"span"}>
          {children}
        </Typography>
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const classes = statsSectionStyles();

  return (
    <Grid container className={classes.mainWrapper}>
      <Grid item xs={12} md={10} className={classes.wrapper}>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"24H"} icon={BreadIcon}>
              Every day, suppliers supply us with fresh products
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"98Kg"} icon={MealIcon}>
              Our guests eat fresh meat every month
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"162"} icon={FoodBoxIcon}>
              Tradition has been handed down for 162 years
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"2"} icon={BurgerIcon}>
              The current owners are the second generation
            </Stat>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
