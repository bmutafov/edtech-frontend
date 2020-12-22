import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { Category } from '@material-ui/icons';
import React, { useState } from 'react';

interface Props {
  className: string;
}

const CategoryPaper: React.FC<Props> = ({ className }) => {
  const [elevation, setElevation] = useState(0);

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
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
          <Category />
          <Box textAlign="center"> Category name</Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CategoryPaper;
