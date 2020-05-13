import React from 'react';
import classes from './Layout.module.css';

import Header from '../../components/Navigation/Header/Header';
import Footer from '../../components/Navigation/Footer/Footer';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <div className={classes.MainContent}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
