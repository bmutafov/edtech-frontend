import React from 'react';
import { Container } from '@material-ui/core';

import ProductBrowser from '../components/ProductBrowser';
import NavBar from '../components/NavBar';

const SearchProductsPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" disableGutters>
        <ProductBrowser />
      </Container>
    </>
  );
};

export default SearchProductsPage;
