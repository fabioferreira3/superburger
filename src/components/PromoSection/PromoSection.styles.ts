import { makeStyles } from "@material-ui/core/styles";

export const promoSectionStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      background: theme.palette.secondary.main,
      padding: 40,
      [theme.breakpoints.down("sm")]: {
        padding: 20,
      },
    },
    itemsWrapper: {
      marginTop: 60,
    },
    itemWrapper: {},
    cardWrapper: {
      background: theme.palette.primary.main,
    },
    cardContent: {
      padding: 20,
    },
    icon: {
      fontSize: 80,
      marginBottom: 20,
    },
    itemTitle: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 25,
      marginTop: 5,
    },
    itemSubtitle: {
      textTransform: "uppercase",
      fontWeight: 500,
    },
  }))();
};
