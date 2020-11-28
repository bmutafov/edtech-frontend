import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TextsContextProvider } from './contexts/TextsContext';
import Router from './routes/Router';
import { AuthContextProvider } from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <TextsContextProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </TextsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
