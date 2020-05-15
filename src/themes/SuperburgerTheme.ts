import { createMuiTheme } from "@material-ui/core/styles";

type PreferenceT = "dark" | "light";

const SuperburgerTheme = (preference: PreferenceT) => {
  return createMuiTheme({
    palette: {
      type: preference,
      primary: {
        main: "#1e1e1e",
      },
      secondary: {
        main: "#ffc700",
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
        fontSize: 55,
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      h2: {
        fontSize: 50,
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
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': {
            fontDisplay: "swap",
          },
        },
      },
    },
  });
};

export default SuperburgerTheme;
