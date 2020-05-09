import { makeStyles } from "@material-ui/core/styles";

export const bannerSectionStyles = () => {
  return makeStyles(theme => ({
    box: {
      marginTop: "70px",
      width: "75% !important",
      [theme.breakpoints.up("md")]: {
        width: "50% !important",
      },
    },
    actionButtons: {
      position: "absolute",
      bottom: "50px",
      left: "50px",
    },
    actionButton: {
      padding: "15px",
      width: "150px",
      marginRight: "10px",
      border: 0,
    },
    primaryButton: {},
    secondaryButton: {},
  }))();
};
