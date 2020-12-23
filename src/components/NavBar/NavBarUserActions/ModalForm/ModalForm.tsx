import { Box, Dialog, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import { theme } from '../../../../utils/theme';
import Section from '../../../Section';
import { useStyles } from './ModalForm.styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  sectionTitle: string;
  sidebarTitle: string;
  sidebarDescription?: string;
  sidebarIcon: JSX.Element;
  maxWidth?: false | 'sm' | 'xs' | 'md' | 'lg' | 'xl';
}

const ModalForm: React.FC<Props> = ({
  children,
  isOpen,
  onClose,
  sectionTitle,
  sidebarIcon,
  sidebarTitle,
  sidebarDescription,
  maxWidth = 'sm',
}) => {
  const classes = useStyles();

  const icon = React.cloneElement(sidebarIcon, { className: classes.icon });

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={maxWidth} fullWidth>
      <Box display="flex" flexDirection="row">
        <Hidden mdDown>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            flex={1}
            padding={theme.spacing.$5}
            color={theme.colors.primary.contrastText}
            className={classes.sideSection}
          >
            {icon}
            <Box marginY={theme.spacing.$2} className={classes.textGradient}>
              <Typography variant="h4" style={{ fontWeight: 700 }}>
                {sidebarTitle}
              </Typography>
              {sidebarDescription}
            </Box>
          </Box>
        </Hidden>
        <Box display="flex" alignItems="center" marginY={theme.spacing.$4} flex={3} width="100%">
          <Section title={sectionTitle}>{children}</Section>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ModalForm;
