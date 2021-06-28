
const theme = {
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
      light: "#df6d71",
      main: "#d71921",
      dark: "#b4030b",
    },
    success: {
      main: "#6DD230",
      dark: "#5CAD2C",
    },
    error: {
      main: "#FE4D5C",
    },
    warning: {
      main: "#FFAB2B"
    }
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
};

const lightTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    type: 'light',
    secondary: {
      main: "#494646",
    },
    text: {
      primary: '#424242',
      secondary: '#424242',
    },
  },
};

const darkTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    type: 'dark',
    secondary: {
      main: "#f9f9f9",
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
  },
};

export { theme, lightTheme, darkTheme };
