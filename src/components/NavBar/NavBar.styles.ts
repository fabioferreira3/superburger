import { makeStyles } from "@material-ui/core/styles";

export const navBarStyles = () => {
  return makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: "none",
      background: "black",
      opacity: "0.8",
      minHeight: "70px",
      paddingRight: "15px !important",
    },
    menuItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginRight: "10px",
    },
  }))();
};
