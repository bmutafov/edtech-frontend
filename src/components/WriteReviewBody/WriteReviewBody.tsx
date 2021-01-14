import React from 'react';
import { Card, CardContent, Button, Typography, Box, Grid, Divider, TextField } from '@material-ui/core';
import { useStyles } from './WriteReviewBody.styles';
import { Rating } from '@material-ui/lab';
import useTexts from '../../hooks/useTexts';
import { theme } from '../../utils/theme';

const WriteReviewBody: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography className={classes.root} variant="h5">
              {texts.writeReviewBodyTitle}
            </Typography>
            <Grid item xs={12} md={6}>
              <TextField placeholder={texts.writeReviewBodySubtitle} fullWidth margin="normal" />
            </Grid>
            <Grid container className={classes.root}>
              <Grid item xs={12} md={6}>
                <div>
                  <Typography variant="h5">{texts.writeReviewBodyUsability}</Typography>
                </div>
                <div>
                  <Typography variant="subtitle2">{texts.writeReviewBodySubtitle}</Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Rating name="usability" value={null} />
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <Typography variant="h5">{texts.writeReviewBodyEngagement}</Typography>
                </div>
                <div>
                  <Typography variant="subtitle2">{texts.writeReviewBodySubtitle}</Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Rating name="engagement" value={null} />
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <Typography variant="h5">{texts.writeReviewBodyEffectiveness}</Typography>
                </div>
                <div>
                  <Typography variant="subtitle2">{texts.writeReviewBodySubtitle}</Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Rating name="effectiveness" value={null} />
              </Grid>
              <Grid item xs={12} md={6}>
                <div>
                  <Typography variant="h5">{texts.writeReviewBodyOverall}</Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Rating name="overall" value={null} />
              </Grid>
            </Grid>
            <Divider variant="middle" />
            <Typography className={classes.root} variant="h5">
              {texts.writeReviewBodyDescription}
            </Typography>
            <Grid container>
              <Grid item xs={12} md={6}>
                <TextField fullWidth id="description" multiline rows={4} defaultValue={texts.writeReviewBodySubtitle} />
                <Typography variant="h5">{texts.writeReviewEducationalInstitution}</Typography>
                <TextField placeholder={texts.writeReviewBodySubtitle} fullWidth margin="normal" />
                <Typography variant="h5">{texts.writeReviewNumberOfPeople}</Typography>
                <TextField placeholder={texts.writeReviewBodySubtitle} fullWidth margin="normal" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">{texts.writeReviewBodyTips}</Typography>
                <Typography variant="h5">
                  {texts.writeReviewBodySubtitle}+{texts.writeReviewBodySubtitle}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Box display="flex" justifyContent="flex-end" paddingY={theme.spacing.$1}>
            <Button type="submit" variant="contained" color="primary" disableElevation>
              {texts.writeReviewBodySubmit}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WriteReviewBody;
