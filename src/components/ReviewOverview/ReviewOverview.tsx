import React from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './ReviewOverview.styles';
import { theme } from '../../utils/theme';
import ReviewQuote from './ReviewQuote/ReviewQuote';

interface ReviewProps {
  accountName: string;
  jobTitle?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  productName: string;
  text: string;
}

const ReviewOverview: React.FC<ReviewProps> = ({ accountName, jobTitle, rating, productName, text }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box>
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
      </Box>
      <Box flexDirection="column" marginLeft={theme.spacing.$2}>
        <Typography variant="subtitle2">{accountName}</Typography>
        <Typography variant="caption">{jobTitle}</Typography>
        <Box display="flex" marginY={theme.spacing.$1} alignItems="center">
          <Rating value={rating} readOnly />
          <Box marginLeft={theme.spacing.$1}>
            <Typography variant="subtitle2"> on {productName}</Typography>
          </Box>
        </Box>
        <ReviewQuote text={text} />
      </Box>
    </Box>
  );
};

export default ReviewOverview;
