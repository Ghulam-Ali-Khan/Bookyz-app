import React from 'react';
import { Box } from '@mui/material';
import propTypes from 'prop-types';

function TabPanel({ index, stateValue, children }) {
  return index === stateValue ? <Box>{children}</Box> : null;
}

TabPanel.propTypes = {
  index: propTypes.number.isRequired,
  stateValue: propTypes.number.isRequired,
  children: propTypes.node.isRequired,
};

export default TabPanel;
