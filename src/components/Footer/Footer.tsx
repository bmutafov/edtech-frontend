import { Box, Container } from '@material-ui/core';
import React from 'react';
import useTexts from '../../hooks/useTexts';
import { theme } from '../../utils/theme';

const Footer: React.FC = () => {
  const texts = useTexts();

  return (
    <Box bgcolor={theme.colors.primary.dark} color={theme.colors.primary.contrastText} paddingY={theme.spacing.$3}>
      <Container maxWidth="lg">{texts.footerText}</Container>
    </Box>
  );
};

export default Footer;
