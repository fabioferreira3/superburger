import { makeStyles } from "@material-ui/core/styles";

export const statsSectionStyles = () => {
  return makeStyles(theme => ({
    mainWrapper: {
      background: theme.palette.primary.main,
      position: "relative",
    },
    wrapper: {
      background: theme.palette.secondary.main,
      padding: 20,
    },
    statItem: {
      position: "relative",
      height: 250,
      padding: 10,
    },
    statItemIcon: {
      display: "flex",
      borderRadius: 60,
      position: "absolute",
      padding: 15,
      top: 0,
      left: 0,
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
