import { makeStyles } from "@material-ui/core/styles";

export const footerStyles = () => {
  return makeStyles(theme => ({
    wrapper: {
      display: "flex",
      background: theme.palette.primary.main,
    },
    contentWrapper: {
      padding: 40,
    },
    copyrightWrapper: {
      background: theme.palette.secondary.main,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 10,
      paddingTop: 10,
    },
    copyrightText: {
      fontSize: 14,
    },
    columnContent: {
      paddingTop: 20,
    },
    contactPhone: {
      fontSize: 70,
    },
    contactEmail: {
      fontSize: 20,
    },
    weekDays: {
      fontWeight: "bold",
      fontSize: 20,
    },
    hours: {
      fontSize: 16,
      fontWeight: 500,
    },
  }))();
};
