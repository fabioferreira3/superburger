import { makeStyles } from "@material-ui/core/styles";

export const menuSectionStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      background: theme.palette.primary.main,
      padding: 40,
      [theme.breakpoints.down("sm")]: {
        padding: 20,
      },
    },
    title: {
      color: "white",
      textAlign: "center",
    },
    menuGridWrapper: {
      marginTop: 50,
      [theme.breakpoints.down("sm")]: {
        marginTop: 25,
      },
      [theme.breakpoints.down("xs")]: {
        height: "100%",
      },
    },
    menuGridNav: {
      marginBottom: 70,
    },
    menuCategoryWrapper: {
      cursor: "pointer",
      flexGrow: 1,
      marginTop: 25,
      flexWrap: "nowrap",
      borderBottom: "3px solid #777777",
      paddingBottom: 15,
      [theme.breakpoints.down("sm")]: {
        paddingBottom: 25,
      },
      transition: "border-bottom 0.3s",
    },
    menuCategoryWrapperActive: {
      borderBottom: `3px solid ${theme.palette.secondary.main}`,
    },
    menuCategoryItem: {
      cursor: "pointer",
      flexGrow: 1,
      marginTop: 25,
    },
    menuCategoryTitle: {
      color: "#777777",
      padding: 10,
      borderRadius: 10,
      textAlign: "center",
      transition: "color 0.3s, background 0.3s",
      [theme.breakpoints.down("xs")]: {
        fontSize: 30,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 18,
      },
    },
    menuCategoryTitleActive: {
      color: theme.palette.primary.main,
      background: theme.palette.secondary.main,
    },
    menuCategoryIconWrapper: {
      textAlign: "center",
    },
    menuCategoryIcon: {
      fontSize: 100,
      opacity: "0.7",
      [theme.breakpoints.down("md")]: {
        fontSize: 55,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 80,
      },
      transition: "opacity 0.3s",
    },
    menuCategoryIconActive: {
      opacity: 1,
    },
    menuGridContent: {
      height: 600,
      [theme.breakpoints.down("xs")]: {
        display: "block",
        height: "100%",
      },
    },
  }))();
};
