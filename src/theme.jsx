import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1769aa',
    },
    secondary: {
      main: '#43a047',
    },
    background: {
      default: '#f9fafb',
      paper: '#fff',
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem', letterSpacing: '-1.5px' },
    h2: { fontWeight: 700, fontSize: '2rem' },
    h3: { fontWeight: 700, fontSize: '1.5rem' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
});

export default theme;