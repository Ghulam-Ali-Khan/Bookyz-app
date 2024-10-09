'use client';

import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import propTypes from 'prop-types';

function SubmitBtn({
  label,
  isLoading = false,
  isDisabled = false,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  className = undefined,
  onClick = () => { },
}) {
  return (
    <Button
      startIcon={isLoading ? <CircularProgress size={20} /> : undefined}
      disabled={isDisabled || isLoading}
      variant={variant}
      color={color}
      size={size}
      type="submit"
      className={className}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

SubmitBtn.propTypes = {
  label: propTypes.string.isRequired,
  isLoading: propTypes.bool,
  isDisabled: propTypes.bool,
  variant: propTypes.string,
  color: propTypes.string,
  size: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
};

export default SubmitBtn;
