import { Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  text: string;
}

const ReviewQuote: React.FC<Props> = ({ text }) => {
  return <Typography variant="body1" style={{ fontStyle: 'italic' }}>{`„${text}‟`}</Typography>;
};

export default ReviewQuote;
