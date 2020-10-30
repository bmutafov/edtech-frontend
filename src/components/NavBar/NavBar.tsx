import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, Nav } from 'react-bootstrap';
import useTexts from '../../hooks/useTexts';
import './NavBar.css';

const NavBar: React.FC = () => {
  const texts = useTexts();
  return (
    <Navbar className="bg-light">
      <Navbar.Brand className="serif" href="#home">
        {texts.edtchText}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      <Nav.Link>
        <FontAwesomeIcon icon={faIndustry} />
        For Companies
      </Nav.Link>
      <Button variant="primary" className="button">
        {texts.signinText}
      </Button>
    </Navbar>
  );
};
export default NavBar;
