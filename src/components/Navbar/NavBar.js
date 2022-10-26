import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <Link className="btn" to="/">
                <span id="nav-home">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faHome} />
                  Home
                </span>
              </Link>
              <Link className="btn" to="/about">
                <span id="nav-about">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faUser} />
                  About
                </span>
              </Link>
              <Link className="btn" to="/skills">
                <span id="nav-skills">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faClipboardCheck} />
                  Skills
                </span>
              </Link>
              <Link className="btn" to="/projects">
                <span id="nav-projects">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faComputer} />
                  Projects
                </span>
              </Link>
              <Link className="btn" to="/coursework">
                <span id="nav-coursework">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faChalkboard} />
                  Coursework
                </span>
              </Link>
              <Link className="btn" to="/contact">
                <span id="nav-contact">
                  <FontAwesomeIcon className="fa-icon d-sm-inline d-md-none" icon={faAddressBook} />
                  Contact
                </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default NavBar;