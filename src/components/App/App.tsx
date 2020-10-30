import React from 'react';
import useTexts from '../../hooks/useTexts';
import './App.css';

const App: React.FC = () => {
  const texts = useTexts();

  return (
    <div className="App">
      <header className="App-header">
        <p>{texts.demoText}</p>
        <p>Boilerplate code for EdTech front-end</p>
      </header>
    </div>
  );
};

export default App;
