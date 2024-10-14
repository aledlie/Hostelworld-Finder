import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Hostelworld Finder</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
