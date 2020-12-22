import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import HeroFc from '../components/HeroForCompany';
import OptionList from '../components/OptionList';

const ForCompanyPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg" disableGutters>
        <NavBar />
        <HeroFc />
        <OptionList />
      </Container>
    </>
  );
};
export default ForCompanyPage;
