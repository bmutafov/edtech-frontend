import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './ReviewOverview.styles';

interface ReviewProps {
  accountName: string;
  jobTitle?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  productName: string;
  text: string;
}

const ReviewOverview: React.FC<ReviewProps> = ({ accountName, jobTitle, rating, productName, text }) => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box flex={1}>
        <div className={classes.image}></div>
      </Box>
      <Box flex={4} flexDirection="column">
        <Typography variant="subtitle2">{accountName}</Typography>
        <Typography variant="caption">{jobTitle}</Typography>
        <Box display="flex">
          <Rating value={rating} readOnly />
          on {productName}
        </Box>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default ReviewOverview;
