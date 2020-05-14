import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Layout.module.css';

import Header from '../../components/Navigation/Header/Header';
import Footer from '../../components/Navigation/Footer/Footer';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <div className={classes.MainContent}>
        <Container>{props.children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
