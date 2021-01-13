import { CircularProgress, Container } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductInfoCard from '../components/ProductInfoCard';
import ProductPageBody from '../components/ProductPageBody';
import useGetRequest from '../hooks/useGetRequest';
import { IProduct } from '../schemas';

interface RouteParams {
  productId: string;
}

const ProductPage: React.FC = () => {
  const { productId } = useParams<RouteParams>();

  const { data, loading } = useGetRequest<IProduct>(`/products/${productId}`);

  if (loading) return <CircularProgress size={150} />;

  // TODO: Implement 404 page
  if (!data) return <div>404</div>;

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" disableGutters>
        <ProductInfoCard product={data} />
        <ProductPageBody product={data} />
      </Container>
    </>
  );
};
export default ProductPage;
