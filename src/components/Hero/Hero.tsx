import React from 'react';
import { Box, Button, Container, Grid, Hidden, Typography } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { useStyles } from './Hero.styles';
import { theme } from '../../utils/theme';
import HeaderImage from './HeaderImage/HeaderImage';
import CategoryPaper from './CategoryPaper';
import { useHistory } from 'react-router-dom';
import useGetRequest from '../../hooks/useGetRequest';
import { ICategory } from '../../schemas';

const Hero: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();
  const history = useHistory();
  const { data } = useGetRequest<ICategory[]>('/categories', { limit: 4 });

  return (
    <Box className={classes.heroBackground} paddingY={theme.spacing.$6}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box>
            <Box paddingTop={theme.spacing.$8}>
              <Typography variant="h1" className={classes.title}>
                {texts.heroTitleHomePage}
              </Typography>
            </Box>
            <Box marginTop={theme.spacing.$6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.ctaButton}
                disableElevation
                onClick={() => history.push('/products')}
              >
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
                {data &&
                  data.map((category) => (
                    <CategoryPaper key={category.id} className={classes.paper} category={category} />
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
