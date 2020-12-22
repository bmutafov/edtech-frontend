import React from 'react';
import { Box, Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import TrendingProducts from '../components/TrendingProducts';
import RecentReviews from '../components/RecentReviews';
import Footer from '../components/Footer';
import { theme } from '../utils/theme';

const Homepage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Box marginTop={theme.spacing.$5}>
        <Container maxWidth="lg" disableGutters>
          <TrendingProducts />
        </Container>
      </Box>

      <RecentReviews />

      <Footer />
    </>
  );
};

export default Homepage;
