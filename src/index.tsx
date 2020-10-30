import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { TextsContextProvider } from './contexts/TextsContext';

ReactDOM.render(
  <React.StrictMode>
    <TextsContextProvider>
      <App />
    </TextsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
