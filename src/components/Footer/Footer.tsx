import { Box, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../utils/theme';

const Footer: React.FC = () => {
  return (
    <Box bgcolor="#cccccc" paddingY={theme.spacing.$3} marginTop={theme.spacing.$3}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column">
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
          <Link to="/">Link</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
