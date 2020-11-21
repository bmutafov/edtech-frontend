import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { theme } from '../../utils/theme';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Box display="flex" flexDirection="column" paddingTop={theme.spacing.$4}>
      <Typography variant="h6" align="center">
        {title}
      </Typography>
      <Box paddingTop={theme.spacing.$4}>{children}</Box>
    </Box>
  );
};

export default Section;
