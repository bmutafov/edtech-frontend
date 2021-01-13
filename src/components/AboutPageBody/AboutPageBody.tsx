import React from 'react';
import { Box, Container, Typography, CardMedia, Card, CardContent, Grid } from '@material-ui/core';
import { useStyles } from './AboutPageBody.styles';
import { theme } from '../../utils/theme';
import useTexts from '../../hooks/useTexts';

const AboutPageBody: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();
  return (
    <div>
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
      </Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <div className={classes.image}></div>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" className={classes.subtitle}>
                  {texts.aboutPageBodyText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default AboutPageBody;
