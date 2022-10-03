import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top" class="">
        <Container>
          <Navbar.Brand href="#home">Miles Eng</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/coursework">Coursework</Nav.Link>
              <Nav.Link href="/contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
};

export default NavBar;