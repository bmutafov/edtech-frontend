import React, { useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { theme } from '../../utils/theme';
import { Fade } from 'react-awesome-reveal';
import { useStyles } from './Section.styles';
interface SectionProps {
  title: string;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, children, animate = false }) => {
  const classes = useStyles();

  const sectionContent = useMemo(
    () => (
      <Box display="flex" flexDirection="column" width="100%">
        <Typography variant="h2" align="center" className={classes.title}>
          {title}
        </Typography>
        <Box paddingTop={theme.spacing.$4}>{children}</Box>
      </Box>
    ),
    [children, title, classes]
  );

  return animate ? <Fade direction="up">{sectionContent}</Fade> : sectionContent;
};

export default Section;
