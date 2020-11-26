import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Forcompany from '../pages/Forcompany';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/company" component={Forcompany} />
    </BrowserRouter>
  );
};

export default Router;
