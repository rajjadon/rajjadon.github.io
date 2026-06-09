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
      {/* Prebuilt Kaily/Copilot widget (chat + voice/video). Public token. */}
      <CopilotProvider token={import.meta.env.VITE_COPILOT_TOKEN || ""}>
        <App />
      </CopilotProvider>
    </ThemeProvider>
  </React.StrictMode>
);
