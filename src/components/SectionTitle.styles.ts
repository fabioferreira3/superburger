import { makeStyles } from "@material-ui/core/styles";

export const sectionTitleStyles = () => {
  return makeStyles(theme => ({
    title: {
      textAlign: "center",
    },
    subtitle: {
      fontSize: 15,
    },
  }))();
};
