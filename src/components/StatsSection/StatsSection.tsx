import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { statsSectionStyles } from "./StatsSection.styles";
import {
  BaguetteIcon,
  ChefHatIcon,
  MeatIcon,
  SoftdrinkIcon,
} from "../CustomIcons";

interface StatProps {
  statNumber: string;
  icon: any;
}

const Stat: React.FC<StatProps> = ({ statNumber, icon: Icon, children }) => {
  const classes = statsSectionStyles();
  return (
    <Grid
      container
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
      className={classes.statItem}
    >
      <div className={classes.statItemIcon} style={{ background: "#fff" }}>
        <Icon style={{ fontSize: 50 }} />
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
            <Stat statNumber={"24H"} icon={BaguetteIcon}>
              Every day, suppliers supply us with fresh products
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"98Kg"} icon={MeatIcon}>
              Our guests eat fresh meat every month
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"3542"} icon={SoftdrinkIcon}>
              Beverages served to our guests every month
            </Stat>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Stat statNumber={"2"} icon={ChefHatIcon}>
              The current owners are the second generation
            </Stat>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
