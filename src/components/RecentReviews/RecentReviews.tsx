import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import Section from '../Section';
import ReviewOverview from '../ReviewOverview';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import { theme } from '../../utils/theme';
import { JackInTheBox } from 'react-awesome-reveal';

const RecentReviews: React.FC = () => {
  const texts = useTexts();

  return (
    <JackInTheBox>
      <Box marginTop={theme.spacing.$5} paddingY={theme.spacing.$7} bgcolor="#f9f2fc">
        <Section title={texts.recentReviewsTitle} animate>
          <Container maxWidth="lg">
            <Grid container>
              {arrayIndexingWithLength(3).map((v) => (
                <Grid item lg={4} md={6} xs={12} key={v}>
                  <Box marginBottom={theme.spacing.$3}>
                    <ReviewOverview
                      accountName={`Account ${v}`}
                      jobTitle="Job Title"
                      rating={3}
                      productName="Product name"
                      text="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.At eripuit signiferumque sea, vel ad mucius molestie"
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>
      </Box>
    </JackInTheBox>
  );
};

export default RecentReviews;
