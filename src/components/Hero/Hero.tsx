import React from 'react';
import { Box, Button, Container, Grid, Hidden, Typography } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { useStyles } from './Hero.styles';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import { theme } from '../../utils/theme';
import HeaderImage from './HeaderImage/HeaderImage';
import CategoryPaper from './CategoryPaper';

const Hero: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();

  return (
    <Box className={classes.heroBackground} paddingY={theme.spacing.$6}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row">
          <Box>
            <Box paddingTop={theme.spacing.$8}>
              <Typography variant="h1" className={classes.title}>
                {texts.heroTitleHomePage}
              </Typography>
            </Box>
            <Box marginTop={theme.spacing.$6}>
              <Button variant="contained" color="primary" className={classes.ctaButton} disableElevation>
                {texts.heroButtonHomePage}
              </Button>
            </Box>
            <Box marginTop={theme.spacing.$6}>
              <Typography variant="subtitle2" className={classes.subtitle}>
                {texts.heroSubtitleHomePage}
              </Typography>
            </Box>
            <Box marginTop={theme.spacing.$2}>
              <Grid container spacing={theme.spacing.$3}>
                {arrayIndexingWithLength(4).map((v) => (
                  <CategoryPaper key={v} className={classes.paper} />
                ))}
              </Grid>
            </Box>
          </Box>
          <Hidden mdDown>
            <HeaderImage />
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
