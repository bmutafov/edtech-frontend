import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import AddProduct from '../components/HeroAddProduct';

const AddProductPage: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <AddProduct />
      </Container>
    </>
  );
};

export default AddProductPage;
