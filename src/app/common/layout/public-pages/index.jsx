import React from 'react';
import propTypes from 'prop-types';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function PublicLayoutWrapper({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

PublicLayoutWrapper.propTypes = {
  children: propTypes.node,
};

export default PublicLayoutWrapper;
