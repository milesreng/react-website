import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser, 
  faComputer, 
  faClipboardCheck, 
  faChalkboard, 
  faAddressBook } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub
  } from '@fortawesome/free-brands-svg-icons';

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" fixed="top" variant="dark" className="nav-container bg-navbar">
          <Navbar.Brand href="/"><span id="nav-name">Miles Eng</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-left me-auto d-inline-block">
              <a href="https://www.linkedin.com/in/milesreng/" target="_blank"><FontAwesomeIcon className="external-fa-links d-inline-block" icon={faLinkedin} /></a>
              <a href="https://github.com/milesreng" target="_blank"><FontAwesomeIcon className="external-fa-links d-inline-block" icon={faGithub} /></a>
            </Nav>
            <Nav className="nav-right">
              <Nav.Link href="#/">
                <span id="nav-home">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faHome} />
                  Home
                </span>
              </Nav.Link>
              <Nav.Link href="#/about">
                <span id="nav-about">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faUser} />
                  About
                </span>
              </Nav.Link>
              <Nav.Link href="#/skills">
                <span id="nav-skills">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faClipboardCheck} />
                  Skills
                </span>
              </Nav.Link>
              <Nav.Link href="#/projects">
                <span id="nav-projects">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faComputer} />
                  Projects
                </span>
              </Nav.Link>
              <Nav.Link href="#/coursework">
                <span id="nav-coursework">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faChalkboard} />
                  Coursework
                </span>
              </Nav.Link>
              <Nav.Link href="#/contact">
                <span id="nav-contact">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faAddressBook} />
                  Contact
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default NavBar;