import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { lightTheme, darkTheme } from "config/theme";

const App = () => {
  const [themeToggle, ] = useState("light");

  return (
    <ThemeProvider
      theme={
        themeToggle === "dark"
          ? createMuiTheme(darkTheme)
          : createMuiTheme(lightTheme)
      }
    >
      test test test 
    </ThemeProvider>
  );
};

export default App;
