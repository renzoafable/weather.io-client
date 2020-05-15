import React from 'react';
import Container from 'react-bootstrap/Container';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import classes from './Footer.module.css';

const Footer = (props) => {
  const logoColor = '#888';
  return (
    <footer className={classes.Footer}>
      <Container>
        <div className={classes.FooterContent}>
          <span>Lorenz Matthew Afable &copy; 2020</span>
          <div>
            <a
              className='text-muted d-inline-block m-2 mx-md-3'
              href='https://github.com/renzoafable'
              target='_blank'
              rel='noopener noreferrer'>
              <LogoGithub color={logoColor} fontSize='1.5rem' />
            </a>
            <a
              className='text-muted d-inline-block m-2'
              href='https://www.linkedin.com/in/renzoafable/'
              target='_blank'
              rel='noopener noreferrer'>
              <LogoLinkedin color={logoColor} fontSize='1.5rem' />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
