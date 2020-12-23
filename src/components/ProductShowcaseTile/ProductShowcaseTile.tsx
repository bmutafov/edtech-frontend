import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { theme } from '../../utils/theme';
import { useStyles } from './ProductShowcaseTile.styles';

const ProductShowcaseTile: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={theme.spacing.$3}>
        <div className={classes.image}></div>
        <Box display="flex" flexDirection="column" alignItems="flex-start" width="150px" marginTop={theme.spacing.$2}>
          <Typography variant="subtitle2" className={classes.productTitle}>
            Default header
          </Typography>
          <Typography variant="body2" className={classes.productCategory}>
            category
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductShowcaseTile;
