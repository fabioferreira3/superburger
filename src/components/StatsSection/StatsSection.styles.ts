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
      borderRadius: 70,
      position: "absolute",
      padding: 15,
      top: 0,
      left: 0,
      zIndex: 1,
    },
    statItemNumber: {
      color: theme.typography.h2.color,
      fontFamily: theme.typography.fontFamily,
      fontSize: 70,
      paddingLeft: 10,
      position: "absolute",
      top: 0,
      zIndex: 2,
    },
    statItemContent: {
      position: "absolute",
      padding: 10,
      top: 110,
      [theme.breakpoints.down("xs")]: {
        padding: 0,
      },
    },
  }))();
};
