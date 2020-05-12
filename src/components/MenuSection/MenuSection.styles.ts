import { makeStyles } from "@material-ui/core/styles";

export const menuSectionStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      background: theme.palette.primary.main,
      padding: 40,
    },
    title: {
      color: "white",
    },
    menuCategoryItemBar: {
      width: "100%",
      height: 3,
      background: theme.palette.secondary.main,
      marginTop: 15,
    },
  }))();
};
