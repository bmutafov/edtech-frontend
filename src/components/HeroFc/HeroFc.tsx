import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import useTexts from '../../hooks/useTexts';
import { useStyles } from './HeroFc.styles';
//import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import { theme } from '../../utils/theme';

const HeroFc: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();

  return (
    <Box className={classes.align}>
      <Box marginTop={theme.spacing.$6}>
        <Typography variant="h2" className={classes.title}>
          {texts.herofcTitle}
        </Typography>
      </Box>
      <Box marginTop={theme.spacing.$4}>
        <Typography variant="subtitle2">{texts.herofcSubtitle}</Typography>
      </Box>
      <Box marginTop={theme.spacing.$4}>
        <Button variant="contained" color="primary">
          {texts.herofcButton}
        </Button>
      </Box>
    </Box>
  );
};

export default HeroFc;
