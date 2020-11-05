import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
    </BrowserRouter>
  );
};

export default Router;
