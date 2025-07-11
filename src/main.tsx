import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { CopilotProvider } from '@copilotlive/react-sdk';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CopilotProvider token='cat-6r8kty8r'>
        <App />
      </CopilotProvider>
    </ThemeProvider>
  </React.StrictMode>
);