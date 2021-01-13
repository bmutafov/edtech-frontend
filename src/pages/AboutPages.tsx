import React from 'react';
import NavBar from '../components/NavBar';
import AboutPage from '../components/AboutPage/AboutPage';
import AboutPageBody from '../components/AboutPageBody/AboutPageBody';

const AboutPages: React.FC = () => {
  return (
    <>
      <NavBar />
      <AboutPage />
      <AboutPageBody />
    </>
  );
};

export default AboutPages;
