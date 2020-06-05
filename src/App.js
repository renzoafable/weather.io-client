import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

import Header from './components/Navigation/Header/Header';
import Weather from './containers/Weather/Weather';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header />
        <Container fluid className={classes.MainContent}>
          <Weather />
        </Container>
      </div>
    );
  }
}

export default App;
