'use client';

import { Box, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import { primary } from '@/styles/common/colors';

function TableLoaders({ colSpan = 12, radius = 9, height = '40vh' }) {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={colSpan}>
          <Box className=" flex justify-center items-center" sx={{ height }}>
            <ThreeDots height={80} width={80} radius={radius} color={primary} visible />
          </Box>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

TableLoaders.propTypes = {
  height: PropTypes.string,
  radius: PropTypes.number,
  colSpan: PropTypes.number,
};

export default TableLoaders;
