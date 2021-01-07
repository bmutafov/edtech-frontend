import React from 'react';
import { Box, Button, Container, Grid, Hidden, Typography, CardMedia, Card, CardContent } from '@material-ui/core';
import { useStyles } from './AboutPage.styles';
import { theme } from '../../utils/theme';
import useTexts from '../../hooks/useTexts';

const AboutPage: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();
  return (
    <>
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
              <Box paddingY={theme.spacing.$8} marginLeft={theme.spacing.$10}>
                <Typography variant="subtitle2" className={classes.subtitle}>
                  {texts.aboutPageSubtitle}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box marginTop={theme.spacing.$6}>
        <Container>
          <CardMedia component="iframe" className={classes.cardstyle} image="https://....mp4" title="Edtech Video" />
        </Container>
      </Box>
      <Box marginY={theme.spacing.$10}>
        <Container className={classes.subtitlewidth}>
          <Typography variant="subtitle2" className={classes.subtitle}>
            {texts.aboutPageBodyText}
          </Typography>
        </Container>
        <Container>
          <Box display="flex" flexDirection="row" marginTop={theme.spacing.$10}>
            <Box>
              <div className={classes.image}></div>
            </Box>
            <Box marginLeft={theme.spacing.$10}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle2" className={classes.subtitle}>
                    {texts.aboutPageBodyText}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default AboutPage;
