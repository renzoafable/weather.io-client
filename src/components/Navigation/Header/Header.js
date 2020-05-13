import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './Header.module.css';

import logo from '../../../assets/images/weather.png';

const Header = (props) => {
  return (
    <Navbar bg='white' expand='lg' fixed='top'>
      <Container>
        <Navbar.Brand href='#'>
          <img className={classes.Logo} src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ml-auto text-center'>
            <Nav.Link href='https://github.com/renzoafable/weathrr'>
              View on Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
