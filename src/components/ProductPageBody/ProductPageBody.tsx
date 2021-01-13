import React from 'react';
import { Card, CardContent, Button, Typography, Box, Grid, Divider } from '@material-ui/core';
import { useStyles } from './ProductPageBody.styles';
import { Rating } from '@material-ui/lab';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import useTexts from '../../hooks/useTexts';
import { IProduct } from '../../schemas';
import { theme } from '../../utils/theme';
import ReviewItem from './ReviewItem/ReviewItem';
import TreatsChip from './TreatsChip';

interface Props {
  product: IProduct;
}

const ProductPageBody: React.FC<Props> = ({ product }) => {
  const texts = useTexts();
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.container}>
        <Card elevation={0}>
          <CardContent className={classes.details}>
            <Typography component="h5" variant="h5">
              {texts.productPageBodyDevelopmentTitle}
            </Typography>
            <Typography variant="subtitle1">in progress</Typography>
            <Box marginTop={theme.spacing.$2}>
              <Typography component="h5" variant="h5">
                {texts.productPageBodyDevelopmentTitle2}
              </Typography>
              <Typography variant="subtitle1">{product.description}</Typography>
            </Box>
          </CardContent>
        </Card>

        <Grid item xs={12}>
          <Card elevation={0} className={[classes.details, classes.container].join(' ')}>
            <Typography variant="h5">{texts.productPageBodyOverviewTitle}</Typography>
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography variant="h6">
                    {texts.productPageBodyReviewsCountTitle} {product.reviews.length}
                  </Typography>
                  <Box display="flex" flexDirection="row">
                    <Box>
                      <Rating name="read-only" value={3} readOnly />
                    </Box>
                    <Box ml={2}>{texts.productPageBodyOverall}</Box>
                  </Box>

                  <Box display="flex" flexDirection="row">
                    <Box>
                      <Rating name="read-only" value={4} readOnly />
                    </Box>
                    <Box ml={2}>{texts.productPageBodyUsability}</Box>
                  </Box>

                  <Box display="flex" flexDirection="row">
                    <Box>
                      <Rating name="read-only" value={1} readOnly />
                    </Box>
                    <Box ml={2}>{texts.productPageBodyEngagement}</Box>
                  </Box>

                  <Box display="flex" flexDirection="row">
                    <Box>
                      <Rating name="read-only" value={1} readOnly />
                    </Box>
                    <Box ml={2}>{texts.productPageBodyEffective}</Box>
                  </Box>
                  <Box marginBottom={theme.spacing.$2} marginTop={theme.spacing.$1}>
                    <Divider />
                  </Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    {texts.productPageBodyReviewCTAText}
                    <Button size="medium" variant="contained" color="secondary" disableElevation>
                      {texts.productPageBodyButtonText}
                    </Button>
                  </Box>
                </CardContent>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {texts.productPageBodyReviewGreatForTitle}
                  </Typography>
                  <Box className={classes.chipContainer}>
                    {arrayIndexingWithLength(4).map((v) => (
                      <TreatsChip label={`Example ${v}`} key={v} treat="positive" />
                    ))}
                  </Box>
                  <Box marginTop={theme.spacing.$2}>
                    <Typography component="h5" variant="h5">
                      {texts.productPageBodyReviewDrawbacksTitle}
                    </Typography>
                    <Box className={classes.chipContainer}>
                      {arrayIndexingWithLength(2).map((v) => (
                        <TreatsChip label={`Example ${v}`} key={v} treat="negative" />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} className={classes.container}>
          <ReviewItem />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProductPageBody;
