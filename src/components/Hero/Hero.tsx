import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { useStyles } from './Hero.styles';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import { theme } from '../../utils/theme';

const Hero: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();

  return (
    <Box>
      <Box marginTop={theme.spacing.$6}>
        <Typography variant="h2" className={classes.title}>
          {texts.heroTitle}
        </Typography>
      </Box>
      <Box marginTop={theme.spacing.$4}>
        <Button variant="contained" color="primary">
          {texts.heroButton}
        </Button>
      </Box>
      <Box marginTop={theme.spacing.$4}>
        <Typography variant="subtitle2">{texts.heroSubtitle}</Typography>
      </Box>
      <Box marginTop={theme.spacing.$2}>
        <Grid container spacing={theme.spacing.$3}>
          {arrayIndexingWithLength(4).map((v) => (
            <Grid item key={v}>
              <Paper className={classes.paper}></Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
