import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Homepage from '../pages/Homepage';
import ProductPage from '../pages/ProductPage';
import AddProductPage from '../pages/AddProductPage';
import ForCompanyPage from '../pages/ForCompanyPage';
import SearchProductsPage from '../pages/SearchProductsPage';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import AboutPages from '../pages/AboutPages';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/products/new" component={AddProductPage} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/company" component={ForCompanyPage} />
      <Route exact path="/products" component={SearchProductsPage} />
      <Route path="/product/:productId" component={ProductPage} />
      <Route exact path="/about" component={AboutPages} />
      {/* <Route path="*" component={Homepage} /> */}
    </BrowserRouter>
  );
};

export default Router;
