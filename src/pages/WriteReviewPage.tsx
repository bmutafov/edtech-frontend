import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductInfoCard from '../components/ProductInfoCard';
import WriteReviewBody from '../components/WriteReviewBody';
import useGetRequest from '../hooks/useGetRequest';
import { IProduct } from '../schemas';

interface RouteParams {
  productId: string;
}

const WriteReviewPage: React.FC = () => {
  const { productId } = useParams<RouteParams>();

  const { data, loading } = useGetRequest<IProduct>(`/products/${productId}`);

  if (loading) return <CircularProgress size={150} />;

  // TODO: Implement 404 page
  if (!data) return <div>404</div>;
  return (
    <>
      <NavBar />
      <ProductInfoCard product={data} />
      <WriteReviewBody />
    </>
  );
};
export default WriteReviewPage;
