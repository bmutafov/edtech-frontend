import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/LoginForm';
import Homepage from '../pages/Homepage';
import Forcompanypage from '../pages/Forcompanypage';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/company" component={Forcompanypage} />
    </BrowserRouter>
  );
};

export default Router;
