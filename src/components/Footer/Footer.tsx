import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import { footerStyles } from "./Footer.styles";

export const Footer: React.FC = () => {
  const classes = footerStyles();

  return (
    <Grid container>
      <Grid container item className={classes.wrapper}>
        <Grid item xs={12} sm={6} className={classes.contentWrapper}>
          <Typography variant={"h4"} color={"textPrimary"}>
            Book a table
          </Typography>
          <Typography className={classes.contactPhone} color={"textPrimary"}>
            +55-11-12345678
          </Typography>
          <Typography className={classes.contactEmail} color={"textPrimary"}>
            reservations@superburger.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.contentWrapper}>
          <Typography variant={"h4"} color={"textPrimary"}>
            Our Address
          </Typography>
          <Box className={classes.columnContent}>
            <Typography color={"textPrimary"}>150 Next Gen Street</Typography>
            <Typography color={"textPrimary"}>New York, NY 10002</Typography>
            <Typography color={"textPrimary"}>USA</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.contentWrapper}>
          <Typography variant={"h4"} color={"textPrimary"}>
            Opening Hours
          </Typography>
          <Box className={classes.columnContent}>
            <Typography className={classes.weekDays} color={"textPrimary"}>
              Monday - Saturday
            </Typography>
            <Typography className={classes.hours} color={"textPrimary"}>
              11:00 AM - 11:59PM
            </Typography>
            <Typography className={classes.weekDays} color={"textPrimary"}>
              Sunday
            </Typography>
            <Typography className={classes.hours} color={"textPrimary"}>
              11:00 AM - 09:00PM
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container item className={classes.wrapper}>
        <Grid item xs={12} className={classes.copyrightWrapper}>
          <Typography color={"textSecondary"} className={classes.copyrightText}>
            {new Date().getFullYear()} Super Burger - All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
