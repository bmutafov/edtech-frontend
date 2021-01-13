import React from 'react';
import { Card, CardMedia, CardContent, Button, Typography, Box, Grid } from '@material-ui/core';
import { useStyles } from './ProductInfoCard.styles';
import useTexts from '../../hooks/useTexts';
import { Rating } from '@material-ui/lab';

const ProductInfoCard: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();
  const [value] = React.useState<number | null>(4);
  return (
    <Grid container>
      <Grid xs={12}>
        <Card className={classes.root}>
          <div>
            <CardMedia className={classes.cover} image="emptyimage.jpg" title="Products" />
            <div className={classes.button}>
              <Button variant="contained" size="small" color="primary">
                {texts.productInfoCardButtonText}
              </Button>
            </div>
          </div>

          <div className={classes.details}>
            <CardContent>
              <Typography component="h5" variant="h5">
                {texts.productInfoCardTitle}
              </Typography>
              <div>
                <Rating name="read-only" value={value} readOnly />
                <Box ml={2}>{texts.productInfoCardRating}</Box>
              </div>
              <Typography>{texts.productInfoCardPriceSubtitle}</Typography>
              <Typography>{texts.productInfoCardSubtitle2}</Typography>
              <Grid container spacing={3}>
                <Grid item>
                  <Typography variant="h6">{texts.productInfoCardPrice}</Typography>
                  <Typography variant="subtitle1">{texts.productInfoCardPriceSubtitle}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{texts.productInfoCardGrade}</Typography>
                  <Typography variant="subtitle1">{texts.productInfoCardGradeSubtitle}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{texts.productInfoCardPlatform}</Typography>
                  <Typography variant="subtitle1">{texts.productInfoCardPlatformSubtitle}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </div>
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default ProductInfoCard;
