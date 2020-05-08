import { createMuiTheme } from "@material-ui/core/styles";
import WebFont from "webfontloader";

type PreferenceT = "dark" | "light";

// WebFont.load({
//   google: {
//     families: ["Fira Sans:300,400,700", "Assistant:300,400,700", "sans-serif"],
//   },
// });

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
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
      },
    },
  });
};

export default SteakhouseTheme;
