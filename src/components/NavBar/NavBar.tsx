import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { useStyles } from './NavBar.styles';
import NavBarUserActions from './NavBarUserActions';

const NavBar: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {texts.navBarTitle}
        <NavBarUserActions />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
