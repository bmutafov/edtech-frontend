import React from 'react';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './ProductShowcaseGrid.styles';
import useTexts from '../../hooks/useTexts';

const ProductShowcaseGrid: React.FC = () => {
  const classes = useStyles();
  const texts = useTexts();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {texts.productShowcaseGridTitle}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {texts.productShowcaseGridSubtitle}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {texts.productShowcaseGridBody}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  {texts.productsShowcaseGridreview}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                <Rating name="pristine" value={null} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductShowcaseGrid;
