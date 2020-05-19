import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IosMenu from 'react-ionicons/lib/IosMenu';
import classes from './Header.module.css';

import logo from '../../../assets/images/weather.png';

const Header = (props) => {
  return (
    <Navbar bg='white' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Toggle
          className={classes.HeaderToggle}
          aria-controls='navbar-nav'>
          <IosMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id='navbar-nav'>
          <Nav className={classes.HeaderNav}>
            <Nav.Link
              href='https://github.com/renzoafable/weathrr'
              target='_blank'
              className={classes.HeaderNavLink}>
              Source
            </Nav.Link>
            <Nav.Link
              href='https://www.linkedin.com/in/renzoafable/'
              target='_blank'
              className={classes.HeaderNavLink}>
              LinkedIn
            </Nav.Link>
            <Nav.Link
              href='https://github.com/renzoafable'
              target='_blank'
              className={classes.HeaderNavLink}>
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
