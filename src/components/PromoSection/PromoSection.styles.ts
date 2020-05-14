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
      fontWeight: 100,
      fontSize: 30,
    },
    itemSubtitle: {
      fontSize: 15,
      textTransform: "uppercase",
    },
  }))();
};
