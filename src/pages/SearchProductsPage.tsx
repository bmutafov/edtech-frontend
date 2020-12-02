import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import SearchProducts from '../components/HeroSearchProducts';

const SearchProductsPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" disableGutters>
        <NavBar />
        <SearchProducts />
      </Container>
    </>
  );
};

export default SearchProductsPage;
