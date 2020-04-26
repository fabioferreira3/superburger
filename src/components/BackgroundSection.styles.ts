import { makeStyles } from "@material-ui/core/styles";

export const backgroundSectionStyles = () => {
  return makeStyles(theme => ({
    backgroundSquare: {
      backgroundAttachment: "fixed",
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      padding: "70px 0 70px 0",
    },
    backgroundOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      opacity: "0.5",
    },
  }))();
};
