import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import SteakhouseTheme from "../themes/SteakhouseTheme";

export const App: React.FC = props => {
  const prefersDarkMode = false;
  const theme = React.useMemo(
    () => SteakhouseTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};
