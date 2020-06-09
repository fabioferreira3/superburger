import { makeStyles } from "@material-ui/core/styles";

export const contactFormStyles = () => {
  return makeStyles(theme => ({
    root: {
      background: theme.palette.primary.main,
      margin: 0,
      padding: 40,
    },
    wrapper: {
      padding: 40,
      background: theme.palette.secondary.main,
    },
    formWrapper: {
      marginTop: 30,
    },
    formControl: {
      background: "#fff",
      borderRadius: 5,
      width: "100%",
    },
    formColumnWrapper: {
      padding: 20,
    },
    outlinedInput: {
      borderRadius: 5,
    },
    spaceAround: {
      marginBottom: 20,
    },
    submitButton: {
      marginTop: 20,
      background: theme.palette.info.main,
      "&:hover": {
        background: theme.palette.info.dark,
      },
    },
  }))();
};
