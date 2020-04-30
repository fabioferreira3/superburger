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
    navMenu: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      backgroundColor: 'black',
      color: 'white'
    }
  }))();
};
