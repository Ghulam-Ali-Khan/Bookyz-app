'use client';

import { Box } from '@mui/material';
import React from 'react';

import { LineWave } from 'react-loader-spinner';
import { primary } from '@/styles/common/colors';

function GlobalLoader() {
  return (
    <Box sx={{ height: '100vh' }} className=" flex items-center justify-center">
      <LineWave
        height="150"
        width="150"
        color={primary}
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </Box>
  );
}

export default GlobalLoader;
