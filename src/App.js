import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Weather from './containers/Weather/Weather';

class App extends Component {
  render() {
    return (
      <Layout>
        <Weather />
      </Layout>
    );
  }
}

export default App;
