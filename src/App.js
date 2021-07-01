import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "config/theme";
import Plotter from 'pages/plotter'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Plotter/> 
    </ThemeProvider>
  );
};

export default App;
