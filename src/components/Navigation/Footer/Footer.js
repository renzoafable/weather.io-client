import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <Container>
        <div className={classes.FooterContent}>
          <span>Created by Lorenz Matthew Afable</span>
          <div>
            <a
              className='text-muted d-inline-block mr-3'
              href='https://github.com/renzoafable'
              target='_blank'
              rel='noopener noreferrer'>
              Github
            </a>
            <a
              className='text-muted d-inline-block mr-3'
              href='https://www.linkedin.com/in/renzoafable/'
              target='_blank'
              rel='noopener noreferrer'>
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
