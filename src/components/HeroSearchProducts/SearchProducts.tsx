import React from 'react';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import ProductShowcaseGrid from '../ProductShowcaseGrid';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './SearchProducts.styles';
import { Container, CssBaseline, Drawer } from '@material-ui/core';

import SideBar from '../SideBar';
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
const SearchProducts: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <Container>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerContainer}>
              <SideBar />
            </div>
          </Drawer>
        </Container>

        <main className={classes.content}>
          <Grid container spacing={3}>
            <SearchBar />
            {arrayIndexingWithLength(5).map((v) => (
              <Grid item xs={12} key={v}>
                <ProductShowcaseGrid />
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </>
  );
};

export default SearchProducts;
