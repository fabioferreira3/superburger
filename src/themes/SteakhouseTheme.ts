import { createMuiTheme } from "@material-ui/core/styles";

type PreferenceT = "dark" | "light";

const SteakhouseTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#2b2b2b",
      },
      secondary: {
        main: "#FFA500",
      },
      text: {
        primary: "#fff",
        secondary: "#2b2b2b",
      },
      tonalOffset: 0.2,
    },
    typography: {
      fontFamily: ["CheddarGothicRough"].join(","),
      fontWeightLight: 300,
      fontWeightMedium: 400,
      fontWeightBold: 700,
      h1: {
        fontFamily: "OriginalBurger",
        fontSize: 50,
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      h2: {
        fontSize: 45,
      },
      body1: {
        fontFamily: "Fira Sans",
        fontWeight: 700,
        fontSize: 20,
      },
    },
  });
};

export default SteakhouseTheme;
