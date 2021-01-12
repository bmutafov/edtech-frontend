import React from 'react';
import { Card, CardMedia, CardContent, Button, Typography, Box, Grid, CardActionArea } from '@material-ui/core';
import { useStyles } from './ProductPageBody.styles';
import { theme } from '../../utils/theme';
import { Rating } from '@material-ui/lab';

const ProductPageBody: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid xs={12} md={10}>
        <Card>
          <div className={classes.details}>
            <CardContent>
              <Typography component="h5" variant="h5">
                Development Stage
              </Typography>
              <div>
                <Typography variant="subtitle1">In Production</Typography>
              </div>
              <Typography component="h5" variant="h5">
                Description
              </Typography>
              <div>
                <Typography variant="subtitle1"></Typography>
              </div>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};
export default ProductPageBody;
