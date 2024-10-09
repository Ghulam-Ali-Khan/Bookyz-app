import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { primary } from '@/styles/common/colors';

function SectionLoader({ radius = 9, height = '40vh', backgroundColor = 'white' }) {
  return (
    <Box className=" flex justify-center items-center" sx={{ height, backgroundColor }}>
      <ThreeDots height={80} width={80} radius={radius} color={primary} visible />
    </Box>
  );
}

SectionLoader.propTypes = {
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  radius: PropTypes.number,
};

export default SectionLoader;
