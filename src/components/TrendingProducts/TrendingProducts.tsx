import React from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import ProductShowcaseTile from '../ProductShowcaseTile';
import Section from '../Section';

const TrendingProducts: React.FC = () => {
  const texts = useTexts();

  return (
    <Section title={texts.trendingProductsTitle}>
      <Grid container>
        <Hidden mdDown>
          <Grid item lg={4}>
            <Typography variant="h4">{texts.trendingProductsSubTitle}</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={3} alignItems="center" alignContent="center">
            {arrayIndexingWithLength(6).map((v) => (
              <Grid item xs={12} md={4} key={v}>
                <ProductShowcaseTile />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

export default TrendingProducts;
