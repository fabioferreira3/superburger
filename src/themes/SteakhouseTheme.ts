import { createMuiTheme } from "@material-ui/core/styles";

type PreferenceT = "dark" | "light";

const SteakhouseTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#1e1e1e",
      },
      secondary: {
        main: "#ffd400",
      },
      text: {
        primary: "#fff",
        secondary: "#2b2b2b",
      },
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: "CheddarGothicRough",
      fontWeightLight: 300,
      fontWeightMedium: 400,
      fontWeightBold: 700,
      h1: {
        letterSpacing: "1px",
        fontSize: 50,
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      h2: {
        fontSize: 45,
        letterSpacing: "1px",
      },
      body1: {
        fontFamily: "Fira Sans",
        fontWeight: 700,
        fontSize: 20,
      },
      button: {
        letterSpacing: "1px",
      },
    },
  });
};

export default SteakhouseTheme;
