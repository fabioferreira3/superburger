import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Grid, Typography } from "@material-ui/core";

import { statsSectionStyles } from "./StatsSection.styles";
import {
  BaguetteIcon,
  ChefHatIcon,
  MeatIcon,
  SoftdrinkIcon,
} from "../CustomIcons";

interface StatProps {
  statNumber: number;
  suffix?: string;
  icon: any;
}

const StatItem: React.FC<StatProps> = ({
  statNumber,
  suffix = "",
  icon: Icon,
  children,
}) => {
  const classes = statsSectionStyles();

  useEffect(() => {
    console.log("RENDERED: Stat item");
  });

  return (
    <Grid
      container
      direction={"column"}
      justify={"space-around"}
      alignItems={"center"}
      className={classes.statItem}
    >
      <Grid container alignItems={"center"} justify={"space-around"}>
        <Icon className={classes.statItemIcon} />
        <Typography
          variant={"h2"}
          component={"span"}
          className={classes.statItemNumber}
        >
          <CountUp end={statNumber} suffix={suffix} duration={10} />
        </Typography>
      </Grid>
      <Typography
        variant={"body1"}
        component={"div"}
        className={classes.statItemContent}
      >
        {children}
      </Typography>
    </Grid>
  );
};

export const StatsSection: React.FC = () => {
  const classes = statsSectionStyles();

  useEffect(() => {
    console.log("RENDERED: Stats section");
  });

  return (
    <Grid container className={classes.mainWrapper}>
      <Grid item xs={12} md={10} className={classes.wrapper}>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <StatItem statNumber={24} suffix={"H"} icon={BaguetteIcon}>
              Every day, supplied with fresh products
            </StatItem>
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatItem statNumber={98} suffix={"Kg"} icon={MeatIcon}>
              Our guests eat fresh meat every month
            </StatItem>
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatItem statNumber={3542} icon={SoftdrinkIcon}>
              Beverages served to our guests every month
            </StatItem>
          </Grid>
          <Grid item xs={6} sm={3}>
            <StatItem statNumber={2} icon={ChefHatIcon}>
              Current owners are the second generation
            </StatItem>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
