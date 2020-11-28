import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/Login';
import Homepage from '../pages/Homepage';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default Router;
