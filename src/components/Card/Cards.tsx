import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { BusinessCenter } from '@material-ui/icons';
import useTexts from '../../hooks/useTexts';
import { useStyles } from './Card.styles';

const Cards: React.FC = () => {
  const texts = useTexts();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <BusinessCenter className={classes.media} fontSize="large" />
      <CardContent>
        <Typography variant="body2">{texts.herofcSubtitle}</Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
