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
    },
    menuGridNav: {
      marginBottom: 70,
    },
    menuCategoryWrapper: {
      flexWrap: "nowrap",
      borderBottom: "3px solid #777777",
      paddingBottom: 15,
      [theme.breakpoints.down("sm")]: {
        paddingBottom: 25,
      },
      transition: "border-bottom 0.4s",
    },
    menuCategoryWrapperActive: {
      borderBottom: `3px solid ${theme.palette.secondary.main}`,
    },
    menuCategoryItem: {
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        marginTop: 25,
      },
    },
    menuCategoryTitle: {
      display: "block",
      color: "#777777",
      marginLeft: 20,
      padding: 10,
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
        marginLeft: 10,
      },
      transition: "color 0.4s, background 0.4s",
    },
    menuCategoryTitleActive: {
      color: theme.palette.primary.main,
      background: theme.palette.secondary.main,
      borderRadius: 10,
    },
    menuCategoryIcon: {
      fontSize: 80,
      opacity: "0.7",
      [theme.breakpoints.down("md")]: {
        fontSize: 55,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 45,
      },
      transition: "opacity 0.4s",
    },
    menuCategoryIconActive: {
      opacity: 1,
    },
    menuGridContent: {},
  }))();
};
