import React from 'react';
import NavBar from '../components/NavBar';
import ProductInfoCard from '../components/ProductInfoCard';
import ProductPageBody from '../components/ProductPageBody';

const ProductPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <ProductInfoCard />
      <ProductPageBody />
    </>
  );
};
export default ProductPage;
