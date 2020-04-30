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
        main: "#000",
      },
      text: {
        secondary: "#ba2323",
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
