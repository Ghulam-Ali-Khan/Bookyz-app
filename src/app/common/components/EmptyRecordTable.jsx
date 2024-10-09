import React from 'react';
import { Box, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import propTypes from 'prop-types';

function EmptyRecordTable({ colSpan = 1 }) {
  return (
    <TableBody sx={{ height: '30vh' }}>
      <TableRow>
        <TableCell colSpan={colSpan}>
          <Box className=" flex items-center justify-center">
            <Typography>No Record Found!</Typography>
          </Box>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

EmptyRecordTable.propTypes = {
  colSpan: propTypes.number,
};

export default EmptyRecordTable;
