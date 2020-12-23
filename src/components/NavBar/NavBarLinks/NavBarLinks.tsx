import { Box, Button, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { theme } from '../../../utils/theme';
import useNavBarLinks, { LinkDetails } from './useNavBarLinks';

interface Props {
  isMobile?: boolean;
}

const NavBarLinksWrapper: React.FC<Props> = ({ children, isMobile = false }) => {
  return isMobile ? (
    <List>{children}</List>
  ) : (
    <Box display="flex" flexDirection="row">
      {children}
    </Box>
  );
};

const NavBarLinks: React.FC<Props> = ({ isMobile = false }) => {
  const history = useHistory();
  const routes = useNavBarLinks();

  const handleRedirect = (route: string) => {
    history.push(route);
  };

  const getItemForMobile = (r: LinkDetails) => (
    <ListItem button divider onClick={() => handleRedirect(r.route)}>
      <ListItemText primary={r.displayText} />
    </ListItem>
  );

  const getItemForDesktop = (r: LinkDetails) => (
    <Box marginX={theme.spacing.$1} key={r.route}>
      <Button color="inherit" onClick={() => handleRedirect(r.route)} style={{ textTransform: 'none' }}>
        {r.displayText}
      </Button>
    </Box>
  );

  const getLinkItem = (r: LinkDetails) => {
    return isMobile ? getItemForMobile(r) : getItemForDesktop(r);
  };

  return <NavBarLinksWrapper isMobile={isMobile}>{routes.map((r) => getLinkItem(r))}</NavBarLinksWrapper>;
};

export default NavBarLinks;
