import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import HeroFc from '../components/HeroFc';
import OptionList from '../components/OptionList';

const Forcompanypage: React.FC = () => {
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
export default Forcompanypage;
