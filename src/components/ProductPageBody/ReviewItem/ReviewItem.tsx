import { Avatar, Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { LocationCity, People } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import React from 'react';
import useTexts from '../../../hooks/useTexts';
import { arrayIndexingWithLength } from '../../../utils/arrayIndexingWithLength';
import { theme } from '../../../utils/theme';
import TreatsChip from '../TreatsChip';
import { useStyles } from './ReviewItem.styles';

const ReviewItem: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();

  return (
    <Card elevation={0}>
      <CardContent>
        <Box display="flex">
          <Avatar className={classes.avatar}>wa</Avatar>
          <Box marginLeft={theme.spacing.$2}>
            <Typography component="h5" variant="h5">
              Reviewers name
            </Typography>
            <Typography variant="subtitle1">Reviewers job title</Typography>

            <Box display="flex" marginTop={theme.spacing.$2} className={classes.upperSection}>
              <Box flex={1}>
                <Typography component="h5" variant="h5">
                  Product review title
                </Typography>
                <Box display="flex" flexDirection="row">
                  <Rating name="read-only" value={1} readOnly />
                  <Box ml={2}>{texts.productPageBodyOverall}</Box>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Rating name="read-only" value={2} readOnly />

                  <Box ml={2}>{texts.productPageBodyUsability}</Box>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Rating name="read-only" value={5} readOnly />
                  <Box ml={2}>{texts.productPageBodyEngagement}</Box>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Rating name="read-only" value={4} readOnly />
                  <Box ml={2}>{texts.productPageBodyEffective}</Box>
                </Box>
              </Box>
              <Box flex={1}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Typography component="h5" variant="h5" className={classes.treats}>
                      {texts.productPageBodyReviewGreatForTitle}
                    </Typography>
                    <Box className={classes.chipContainer}>
                      {arrayIndexingWithLength(2).map((v) => (
                        <TreatsChip label={`Example ${v}`} key={v} treat="positive" />
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography component="h5" variant="h5" className={classes.treats}>
                      {texts.productPageBodyDrawbacks}
                    </Typography>
                    <Box className={classes.chipContainer}>
                      {arrayIndexingWithLength(2).map((v) => (
                        <TreatsChip label={`Example ${v}`} key={v} treat="negative" />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box marginTop={theme.spacing.$2}>
              <Typography component="h5" variant="h5">
                Reviewers name {texts.productPageBodyReviewDescriptionTitle}:
              </Typography>
              <Typography variant="body2">
                At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.At eripuit
                signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.At eripuit signiferumque
                sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.At eripuit signiferumque sea, vel ad
                mucius molestie, cu labitur iuvaret vulputate sed.
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column" marginTop={theme.spacing.$2}>
              <Box display="flex">
                <LocationCity className={classes.listIcon} />
                <Typography>{texts.productPageBodyEducationalInstitution}</Typography>
              </Box>
              <Box display="flex">
                <People className={classes.listIcon} /> <Typography>{texts.productPageBodyNumberOfPeople}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewItem;
