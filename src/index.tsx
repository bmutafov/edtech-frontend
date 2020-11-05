import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TextsContextProvider } from './contexts/TextsContext';
import Router from './routes/Router';

ReactDOM.render(
  <React.StrictMode>
    <TextsContextProvider>
      <Router />
    </TextsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
