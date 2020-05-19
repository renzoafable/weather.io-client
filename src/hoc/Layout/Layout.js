import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Layout.module.css';

import Header from '../../components/Navigation/Header/Header';
import Footer from '../../components/Navigation/Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />

        <Container fluid className={classes.MainContent}>
          {this.props.children}
        </Container>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default Layout;
