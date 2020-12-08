import React from 'react';
import { Container } from '@material-ui/core';

import SearchProducts from '../components/SearchProducts';

const SearchProductsPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" disableGutters>
        <SearchProducts />
      </Container>
    </>
  );
};

export default SearchProductsPage;
