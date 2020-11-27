import React from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { BusinessCenter, Build, SportsSoccer } from '@material-ui/icons';
import useTexts from '../../hooks/useTexts';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import ProductShowcaseTile from '../ProductShowcaseTile';
import Section from '../Section';

const OptionList: React.FC = () => {
  const texts = useTexts();

  return (
    <Section title={texts.optionListTitle}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={9} alignItems="center" alignContent="center">
            {arrayIndexingWithLength(3).map((v) => (
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

export default OptionList;
