import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Layout.module.css';

import Header from '../../components/Navigation/Header/Header';

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />

        <Container fluid className={classes.MainContent}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default Layout;
