import React from 'react';
import Router from './routes/Router';
import { AuthContextProvider } from './Auth/AuthContext';
import { TextsContextProvider } from './contexts/TextsContext';

const App: React.FC = () => (
  <TextsContextProvider>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </TextsContextProvider>
);

export default App;
