import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { CopilotProvider } from "@copilotlive/react-sdk";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Public widget token — restrict to rajjadon.github.io in Copilot.live dashboard */}
      <CopilotProvider token={import.meta.env.VITE_COPILOT_TOKEN || ""}>
        <App />
      </CopilotProvider>
    </ThemeProvider>
  </React.StrictMode>
);
