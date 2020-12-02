import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';

const NavBar: React.FC = () => {
  const texts = useTexts();

  return (
    <AppBar position="fixed">
      <Toolbar>{texts.navBarTitle}</Toolbar>
    </AppBar>
  );
};

export default NavBar;
