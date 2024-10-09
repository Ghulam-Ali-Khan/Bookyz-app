'use client';

import React from 'react';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import propTypes from 'prop-types';

function AddNewButton({
  label,
  variant = 'contained',
  color = 'primary',
  size = 'small',
  className = undefined,
  path = '/',
}) {
  const router = useRouter();
  return (
    <Button
      startIcon={<Add />}
      variant={variant}
      color={color}
      size={size}
      className={className}
      onClick={() => router.push(path)}
    >
      {label}
    </Button>
  );
}

AddNewButton.propTypes = {
  label: propTypes.string.isRequired,
  variant: propTypes.string,
  color: propTypes.string,
  size: propTypes.string,
  className: propTypes.string,
  path: propTypes.string,
};

export default AddNewButton;
