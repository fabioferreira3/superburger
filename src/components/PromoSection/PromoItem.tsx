import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { promoSectionStyles } from "./PromoSection.styles";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const StyledButton = withStyles(theme => ({
  root: {
    width: 150,
    padding: 10,
    marginRight: 10,
    "&:hover": {
      background: "#c62f09",
      color: theme.palette.text.primary,
    },
    background: "#ed3709",
    color: theme.palette.text.primary,
  },
}))(Button);

export const PromoItem: React.FC<any> = props => {
  const { title, img: Img, subtitle, buttonText, onClickCallback } = props;
  const classes = promoSectionStyles();

  return (
    <Grid item xs={12} sm={4} md={3} className={classes.itemWrapper}>
      <Card className={classes.cardWrapper}>
        <CardActionArea>
          <Img />
          <CardContent className={classes.cardContent}>
            <Typography
              variant={"body2"}
              color={"textPrimary"}
              className={classes.itemSubtitle}
            >
              {subtitle}
            </Typography>
            <Typography
              variant={"body1"}
              color={"textPrimary"}
              className={classes.itemTitle}
              onClick={onClickCallback}
            >
              {title}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardContent}>
            <StyledButton
              endIcon={
                <DoubleArrowIcon
                  style={{ fontSize: 20 }}
                  onClick={onClickCallback}
                />
              }
            >
              {buttonText}
            </StyledButton>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
