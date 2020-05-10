import { makeStyles } from "@material-ui/core/styles";

export const menuSectionStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      background: theme.palette.primary.main,
      padding: "20px",
    },
    title: {
      textAlign: "center",
    },
  }))();
};
