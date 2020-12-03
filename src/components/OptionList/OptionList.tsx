import React from 'react';
import { Grid } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import Section from '../Section';
import Cards from '../Card/Cards';

const OptionList: React.FC = () => {
  const texts = useTexts();

  return (
    <Section title={texts.optionListTitle}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={9} alignItems="center" alignContent="center">
            {arrayIndexingWithLength(3).map((v) => (
              <Grid item xs={12} md={4} key={v}>
                <Cards />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

export default OptionList;
