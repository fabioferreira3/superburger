import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { statsSectionStyles } from "./StatsSection.styles";
import { BaguetteIcon, BurgerIcon, ChefIcon, MeatIcon } from "../CustomIcons";

interface StatProps {
  statNumber: string;
  icon: any;
  color: string;
}

const Stat: React.FC<StatProps> = ({
  statNumber,
  icon: Icon,
  color,
  children,
}) => {
  const classes = statsSectionStyles();
  return (
    <Grid
      container
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
      className={classes.statItem}
    >
      <div className={classes.statItemIcon} style={{ background: color }}>
        <Icon style={{ fontSize: 70 }} />
      </div>
      <span className={classes.statItemNumber}>{statNumber}</span>
      <div className={classes.statItemContent}>
        <Typography variant={"body1"} component={"span"}>
          {children}
        </Typography>
      </div>
    </Grid>
  );
};

export const StatsSection: React.FC = () => {
  const classes = statsSectionStyles();

  return (
    <Grid container className={classes.mainWrapper}>
      <Grid item xs={12} md={10} className={classes.wrapper}>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"24H"} icon={BaguetteIcon} color={"#fff"}>
              Every day, suppliers supply us with fresh products
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"98Kg"} icon={MeatIcon} color={"#e80606"}>
              Our guests eat fresh meat every month
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"162"} icon={ChefIcon} color={"#42dd23"}>
              Tradition has been handed down for 162 years
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"2"} icon={ChefIcon} color={"#1b97f7"}>
              The current owners are the second generation
            </Stat>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
