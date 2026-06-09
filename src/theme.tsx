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
          // Cards are defined by a soft translucent fill + depth shadow (no hard
          // border line), so edges blend smoothly with the gradient background.
          backgroundColor: "rgba(30,41,59,0.82)",
          border: "1px solid transparent",
          boxShadow:
            "0 14px 40px -18px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.05)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
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
