import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import TrendingProducts from '../components/TrendingProducts';
import RecentReviews from '../components/RecentReviews';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" disableGutters>
        <NavBar />
        <Hero />
        <TrendingProducts />
        <RecentReviews />
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
