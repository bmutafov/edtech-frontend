import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Forcompanypage from '../pages/Forcompanypage';
import AddProductPage from '../pages/AddProductPage';
const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/company" component={Forcompanypage} />
      <Route exact path="/addproduct" component={AddProductPage} />
    </BrowserRouter>
  );
};

export default Router;
