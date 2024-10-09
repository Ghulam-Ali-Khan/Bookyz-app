'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';
import theme from '@/styles/mui/generalCustomTheme';

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ThemeWrapper.propTypes = {
  children: PropTypes.node,
};

export default ThemeWrapper;
