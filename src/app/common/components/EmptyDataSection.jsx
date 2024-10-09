import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function EmptyDataSection({ height = '50px' }) {
  return (
    <Box minHeight={height} className="h-full w-full flex justify-center items-center">
      <Typography variant="body1" className=" font-semibold">No Data Found</Typography>
    </Box>
  );
}

EmptyDataSection.propTypes = {
  height: PropTypes.string,
};

export default EmptyDataSection;
