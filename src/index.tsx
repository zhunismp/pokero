import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./config";

import reportWebVitals from './reportWebVitals';
import App from './pages/Home';
import InRoom from './pages/Room';
import './index.css';

const theme = createTheme({
  palette: {
    background: {
      default: '#F9F9F9',
      paper: '#FFFFFF',
    },
    primary: {
      light: '#1B98E0',
      main: '#1B98E0',
      dark: '#1B98E0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#1B98E0',
      main: '#1B98E0',
      dark: '#1B98E0',
      contrastText: '#FFFFFF',
    },
  },
});

const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:roomName" element={<InRoom firebaseApp={app} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
