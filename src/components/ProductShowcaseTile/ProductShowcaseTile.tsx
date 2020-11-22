import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './ProductShowcaseTile.styles';

const ProductShowcaseTile: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.image}></div>
      <Typography variant="subtitle2">Default header</Typography>
      <Typography variant="body2">category</Typography>
    </Paper>
  );
};

export default ProductShowcaseTile;
