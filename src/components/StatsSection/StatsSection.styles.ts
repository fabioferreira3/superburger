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
      background: theme.palette.primary.main,
      position: "relative",
      height: 250,
      padding: 10,
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
    },
    statItemIcon: {
      fontSize: 80,
      [theme.breakpoints.down("sm")]: {
        fontSize: 50,
      },
      [theme.breakpoints.only("md")]: {
        fontSize: 70,
      },
    },
    statItemWrapper: {
      flexWrap: "nowrap",
    },
    statItemNumber: {
      color: "#fff",
      fontFamily: theme.typography.fontFamily,
      fontSize: 70,
      [theme.breakpoints.down("sm")]: {
        fontSize: 50,
      },
      [theme.breakpoints.only("md")]: {
        fontSize: 60,
      },
    },
    statItemContent: {
      color: "#fff",
      textAlign: "center",
      marginTop: 20,
      [theme.breakpoints.between("xs", "sm")]: {
        marginTop: 10,
        fontSize: 15,
      },
    },
  }))();
};
