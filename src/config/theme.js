import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600,
      lg: 1024,
      xl: 1200,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#21324d",
    },
    secondary: {
      main: '#cdd5d7'
    },
    success: {
      main: "#2e822c",
      dark: "#5CAD2C",
    },
    error: {
      main: "#FE4D5C",
    },
    warning: {
      main: "#FFAB2B"
    },
    text: {
      primary: '#21324d',
      secondary: '#cdd5d7',
    },
  },
  typography: {
    fontFamily: "'Rubik', sans-serif",
    fontFamilySecondary: "'Roboto Slab', serif",
    body1: {
      fontFamily: "'Rubik', sans-serif",
      fontSize: "1rem",
    },
  },
  props: {
    MuiLink: {
      underline: "none",
      color: "textPrimary",
    },
    MuiContainer: {
      maxWidth: "xl",
    }
  },
  spacing: (factor) => `${0.5 * factor}rem`,
});

export default theme;
