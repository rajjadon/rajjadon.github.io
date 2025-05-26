import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0a66c2", // LinkedIn blue
    },
    secondary: {
      main: "#e1e9ee", // Light blue for chips, etc.
    },
    background: {
      default: "#18191a", // LinkedIn dark background
      paper: "#242526",   // Card background
    },
    text: {
      primary: "#e4e6eb", // LinkedIn text color in dark
      secondary: "#b0b3b8",
    }
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

export default theme;