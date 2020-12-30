import React from 'react';
import Router from './routes/Router';
import { AuthContextProvider } from './Auth/AuthContext';
import { TextsContextProvider } from './contexts/TextsContext';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import materialUITheme from './config/materialUITheme';

const App: React.FC = () => (
  <ThemeProvider theme={materialUITheme}>
    <TextsContextProvider>
      <AuthContextProvider>
        <CssBaseline />
        <Router />
      </AuthContextProvider>
    </TextsContextProvider>
  </ThemeProvider>
);

export default App;
