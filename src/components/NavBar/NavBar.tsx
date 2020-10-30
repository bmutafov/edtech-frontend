import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <Navbar className="bg-light">
      <Navbar.Brand className="serif" href="#home">
        EdTech
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      <Nav.Link>
        <FontAwesomeIcon icon={faIndustry} />
        For Companies
      </Nav.Link>
      <Button variant="primary" className="button">
        Sign in
      </Button>
    </Navbar>
  );
};
export default NavBar;
