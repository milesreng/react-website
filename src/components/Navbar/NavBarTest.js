import React from "react";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBarTest = () => {
    return (
        <Navbar className="nav-bar-test" fixed="top">
            <div className="test-nav">
                <Link to="/about">about</Link>
                <Link to="/skills">skills</Link>
                <Link to="/projects">projects</Link>
                <Link to="/coursework">coursework</Link>
                <Link to="/contact">contact</Link>
            </div>
        </Navbar>
    );
}

export default NavBarTest;