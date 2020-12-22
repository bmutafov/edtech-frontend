import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import ProductShowcaseTile from '../ProductShowcaseTile';
import Section from '../Section';
import { useStyles } from './TrendingProducts.styles';
import { theme } from '../../utils/theme';

const TrendingProducts: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();

  return (
    <Box marginY={theme.spacing.$8}>
      <Section title={texts.trendingProductsTitle}>
        <Grid container spacing={3} alignItems="center" alignContent="center">
          <Grid item xs={12} sm={6} lg={3}>
            <Box padding={theme.spacing.$3}>
              <Typography variant="h4" className={classes.heading}>
                {texts.trendingProductsSubTitle}
              </Typography>
            </Box>
          </Grid>
          {arrayIndexingWithLength(6).map((v) => (
            <Grid item xs={12} sm={6} lg={3} key={v}>
              <ProductShowcaseTile />
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};

export default TrendingProducts;
