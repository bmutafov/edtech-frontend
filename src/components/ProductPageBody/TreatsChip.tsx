import { Chip } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import React from 'react';
import { useStyles } from './ProductPageBody.styles';

interface Props {
  label: string;
  treat: 'positive' | 'negative';
}

const GreatForChip: React.FC<Props> = ({ label, treat }) => {
  const classes = useStyles();

  return (
    <Chip
      icon={treat === 'positive' ? <AddCircle /> : <RemoveCircle />}
      label={label}
      style={{ background: treat === 'positive' ? green[300] : red[300], color: 'white' }}
      classes={{
        icon: classes.icon,
      }}
    />
  );
};

export default GreatForChip;
