import { makeStyles } from "@material-ui/core/styles";

export const drawerNavMenuStyles = () => {
  return makeStyles(theme => ({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    itemWrapper: {
      "&:hover": {
        background: theme.palette.secondary.main,
      },
      "&:hover $itemText": {
        color: theme.palette.text.secondary,
      },
    },
    itemText: {
      fontFamily: theme.typography.fontFamily,
      textTransform: "uppercase",
      textAlign: "right",
    },
    headerWrapper: {
      background: theme.palette.primary.main,
      padding: 15,
    },
    headerText: {
      color: theme.palette.text.secondary,
    },
  }))();
};
