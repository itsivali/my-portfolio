import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';

function Navigationbar() {
  return (
    <Navbar className='nav'>
      <Container>
        <Navbar.Brand href="/" className="nav-brand">
          <span className="nav-brand-text">Portfolio</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="nav-link">Home</Nav.Link>
          <Nav.Link href="/about-me" className="nav-link">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
