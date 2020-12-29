import React from 'react';
import { Container } from '@material-ui/core';

import SearchProducts from '../components/SearchProducts';
import NavBar from '../components/NavBar';

const SearchProductsPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" disableGutters>
        <SearchProducts />
      </Container>
    </>
  );
};

export default SearchProductsPage;
