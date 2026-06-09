import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366f1",
    },
    secondary: {
      main: "#22d3ee",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    text: {
      primary: "#f1f5f9",
      secondary: "#94a3b8",
    },
    divider: "#334155",
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-1.5px" },
    h2: { fontWeight: 700, letterSpacing: "-0.5px" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          // Glassy translucent surface so card edges blend with the gradient bg
          backgroundColor: "rgba(30,41,59,0.55)",
          border: "1px solid rgba(148,163,184,0.10)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
