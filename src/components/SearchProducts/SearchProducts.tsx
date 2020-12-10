import React from 'react';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import ProductShowcaseGrid from '../ProductShowcaseGrid';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './SearchProducts.styles';
import { Box, CssBaseline, Drawer } from '@material-ui/core';

import SideBar from '../SideBar';
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
const SearchProducts: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <CssBaseline />

        <Box display="flex">
          <Box flex={1}>
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
          </Box>
          <Box flex={5}>
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
          </Box>
        </Box>
      </div>
    </>
  );
};

export default SearchProducts;
