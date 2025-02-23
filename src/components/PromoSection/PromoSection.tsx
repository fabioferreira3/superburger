import React from "react";
import { Grid } from "@material-ui/core";

import { promoSectionStyles } from "./PromoSection.styles";
import { SectionTitle } from "../SectionTitle";
import { PromoItem } from "./PromoItem";
import { PromoImage1 } from "./PromoImage1";
import { PromoImage2 } from "./PromoImage2";
import { PromoImage3 } from "./PromoImage3";

export const PromoSection: React.FC = () => {
  const classes = promoSectionStyles();

  return (
    <Grid container className={classes.wrapper}>
      <SectionTitle
        title={"Don't miss the best promotions!"}
        subtitle={"special offers"}
        inversed={true}
      />
      <Grid
        container
        spacing={2}
        justify={"center"}
        className={classes.itemsWrapper}
      >
        <PromoItem
          title={
            "50% discount for all orders in the last hour of opening the restaurant"
          }
          subtitle={"Every day"}
          buttonText={"Read More"}
          img={PromoImage1}
        />
        <PromoItem
          title={
            "Join the loyalty program and get up to 25% discount on every order"
          }
          subtitle={"Loyalty Program"}
          buttonText={"Sign in"}
          img={PromoImage2}
        />
        <PromoItem
          title={
            "Join the loyalty program and get up to 25% discount on every order"
          }
          subtitle={"Loyalty Program"}
          buttonText={"Sign in"}
          img={PromoImage3}
        />
      </Grid>
    </Grid>
  );
};
