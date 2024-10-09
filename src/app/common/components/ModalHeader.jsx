import React from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import propTypes from 'prop-types';
import { border } from '@/styles/common/colors';

function ModalHeader({ title, onClose }) {
  return (
    <Box>
      <Box className=" flex items-center justify-between mb-2">
        <Typography variant="h6">{title}</Typography>

        <IconButton onClick={onClose} className="p-1">
          <Close fontSize="small" />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: border }} className="my-3" />
    </Box>
  );
}

ModalHeader.propTypes = {
  title: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};

export default ModalHeader;
