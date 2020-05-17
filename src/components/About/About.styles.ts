import { makeStyles } from "@material-ui/core/styles";

export const aboutStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      display: "flex",
      background: theme.palette.secondary.main,
    },
    mainImage: {
      height: "100%",
      [theme.breakpoints.up("md")]: {
        maxHeight: "90%",
      },
    },
    contentWrapper: {
      padding: "40px",
      background: theme.palette.primary.main,
    },
    socialWrapper: {
      marginTop: 30,
    },
    socialIcon: {
      color: theme.palette.text.primary,
    },
  }))();
};
