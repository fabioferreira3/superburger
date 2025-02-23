import { makeStyles } from "@material-ui/core/styles";

export const menuCategoryStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      background: theme.palette.secondary.main,
      height: "100%",
      overflow: "auto",
      padding: 30,
    },
    subWrapper: {
      width: "100%",
      maxHeight: "100%",
      overflow: "auto",
      background: theme.palette.primary.main,
    },
    itemImageLabel: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      padding: 20,
      color: "#fff",
      background: "#0a0a0a",
      opacity: 0.85,
    },
    itemWrapper: {
      padding: 20,
      background: "#0a0a0a",
      marginBottom: 20,
      width: "100%",
      cursor: "pointer",
      "&:hover": {
        background: theme.palette.secondary.main,
        "& $itemTitle, $itemPrice, $itemDescription": {
          color: theme.palette.text.secondary,
        },
      },
    },
    itemTitleWrapper: {
      marginBottom: 10,
    },
    itemTitle: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 30,
      color: "#fff",
    },
    itemPrice: {
      fontSize: 25,
      fontFamily: theme.typography.fontFamily,
      color: "#fff",
    },
    itemDescription: {
      fontSize: 15,
      color: "#fff",
    },
  }))();
};
