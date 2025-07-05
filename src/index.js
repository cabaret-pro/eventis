import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#112a48',
      light: '#3a7580',
      dark: '#0d1f35',
    },
    secondary: {
      main: '#3a7580',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.125rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
); 