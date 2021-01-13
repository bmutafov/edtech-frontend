import React, { useMemo, useState } from 'react';
import { AppBar, Container, Drawer, IconButton, Toolbar } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { useStyles } from './NavBar.styles';
import NavBarUserActions from './NavBarUserActions';
import NavBarLinks from './NavBarLinks';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const desktopLayout = useMemo(
    () => (
      <Toolbar className={classes.toolbar}>
        {texts.navBarTitle}
        <NavBarLinks />
        <NavBarUserActions />
      </Toolbar>
    ),
    [classes.toolbar, texts.navBarTitle]
  );

  const mobileLayout = useMemo(
    () => (
      <>
        <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} style={{ minWidth: '30%' }}>
          <NavBarLinks isMobile />
        </Drawer>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <NavBarUserActions />
        </Toolbar>
      </>
    ),
    [classes.toolbar, isDrawerOpen]
  );

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="lg" disableGutters>
        {isTabletOrMobile ? mobileLayout : desktopLayout}
      </Container>
    </AppBar>
  );
};

export default NavBar;
