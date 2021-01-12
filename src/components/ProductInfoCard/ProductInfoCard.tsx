import React from 'react';
import { Card, CardMedia, CardContent, Button, Typography, Box, Grid, CardActionArea } from '@material-ui/core';
import { useStyles } from './ProductInfoCard.styles';
import { theme } from '../../utils/theme';
import { Rating } from '@material-ui/lab';

const ProductInfoCard: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(4);
  return (
    <Grid container>
      <Grid xs={12}>
        <Card className={classes.root}>
          <div>
            <CardMedia className={classes.cover} image="emptyimage.jpg" title="Products" />
            <div className={classes.button}>
              <Button variant="contained" size="small" color="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className={classes.details}>
            <CardContent>
              <Typography component="h5" variant="h5">
                Products
              </Typography>
              <div>
                <Rating name="read-only" value={value} readOnly />
                <Box ml={2}>[3.0] Overall Rating</Box>
              </div>
              <Typography> Lorem Ipsum gfuyfgerkhfgiyger</Typography>
              <Typography>Product Category</Typography>
              <Grid container spacing={3}>
                <Grid item>
                  <Typography variant="h6">Price</Typography>
                  <Typography variant="subtitle1">Free</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Grade</Typography>
                  <Typography variant="subtitle1">Group1, Group2</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Platform</Typography>
                  <Typography variant="subtitle1">iOS, Android, Desktop</Typography>
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
