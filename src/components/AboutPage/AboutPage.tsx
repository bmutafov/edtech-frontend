import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { useStyles } from './AboutPage.styles';
import { theme } from '../../utils/theme';
import useTexts from '../../hooks/useTexts';

const AboutPage: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();
  return (
    <Box className={classes.aboutBackground} paddingY={theme.spacing.$8}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row">
          <Box>
            <Box paddingY={theme.spacing.$8}>
              <Typography variant="h1" className={classes.title}>
                {texts.aboutPageTitle}
              </Typography>
            </Box>
          </Box>
          <Box marginLeft={theme.spacing.$10}>
            <Box paddingY={theme.spacing.$8}>
              <Typography variant="subtitle2" className={classes.subtitle}>
                {texts.aboutPageSubtitle}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default AboutPage;
