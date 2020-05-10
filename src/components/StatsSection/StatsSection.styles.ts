import { makeStyles } from "@material-ui/core/styles";

export const statsSectionStyles = () => {
  return makeStyles(theme => ({
    mainWrapper: {
      background: theme.palette.primary.main,
      position: "relative",
    },
    wrapper: {
      background: theme.palette.secondary.main,
    },
    statItem: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      height: 250,
    },
    statItemIcon: {
      position: "absolute",
      top: 0,
      left: 10,
      zIndex: 1,
    },
    statItemNumber: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 80,
      paddingLeft: 10,
      position: "absolute",
      top: 30,
      zIndex: 2,
    },
    statItemContent: {
      position: "absolute",
      top: 150,
    },
  }))();
};
