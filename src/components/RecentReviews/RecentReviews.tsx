import React from 'react';
import { Grid } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import Section from '../Section';
import ReviewOverview from '../ReviewOverview';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';

const RecentReviews: React.FC = () => {
  const texts = useTexts();

  return (
    <Section title={texts.recentReviewsTitle}>
      <Grid container>
        {arrayIndexingWithLength(3).map((v) => (
          <Grid item lg={4} md={6} xs={12} key={v}>
            <ReviewOverview
              accountName={`Account ${v}`}
              jobTitle="Job Title"
              rating={3}
              productName="Product name"
              text="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.At eripuit signiferumque sea, vel ad mucius molestie"
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default RecentReviews;
