import { makeStyles } from "@material-ui/core/styles";

export const navBarStyles = () => {
  return makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: "none",
      paddingRight: "15px !important",
    },
    navMenu: {
      position: "absolute",
      width: "100%",
      height: "70px",
      zIndex: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      color: "white",
      backgroundColor: "transparent",
    },
    backgroundOverlay: {
      position: "absolute",
      height: "70px",
      width: "100%",
      top: "0px",
      backgroundColor: "black",
      opacity: "0.7",
      zIndex: 5,
    },
  }))();
};
