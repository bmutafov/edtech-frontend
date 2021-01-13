import { Box, Grid, Paper } from '@material-ui/core';
import { Category } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ICategory } from '../../../schemas';

interface Props {
  className: string;
  category: ICategory;
}

const CategoryPaper: React.FC<Props> = ({ className, category }) => {
  const [elevation, setElevation] = useState(0);
  const history = useHistory();

  const handleClick = () => {
    history.push('/products');
  };

  const handleToggleElevation = () => {
    const newElevation = elevation === 0 ? 1 : 0;

    setElevation(newElevation);
  };

  return (
    <Grid item>
      <Paper
        className={className}
        onMouseEnter={handleToggleElevation}
        onMouseLeave={handleToggleElevation}
        elevation={elevation}
        onClick={handleClick}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
          <Category />
          <Box textAlign="center">{category.name}</Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CategoryPaper;
