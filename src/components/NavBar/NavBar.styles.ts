import { makeStyles } from "@material-ui/core/styles";

export const navBarStyles = () => {
  return makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: "none",
      paddingRight: "15px !important",
      height: "70px",
      background: "none",
    },
    navMenu: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      color: "white",
      backgroundColor: "transparent",
      paddingRight: "20px",
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
