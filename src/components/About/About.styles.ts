import { makeStyles } from "@material-ui/core/styles";

export const aboutStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      display: "flex",
      background: theme.palette.secondary.main,
    },
    mainImage: { flexGrow: 3, maxWidth: "60%" },
    contentWrapper: {
      padding: "40px",
      background: "black",
    },
  }))();
};
