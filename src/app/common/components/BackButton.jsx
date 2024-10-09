'use client';

import { ArrowBack } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import React from 'react';

function BackButton({ icon = false, className = '' }) {
  const router = useRouter();
  return (
    <Tooltip placement="top" title={icon ? 'Back' : ''}>
      <Button
        variant="contained"
        className={className}
        size="small"
        onClick={() => router.back()}
        startIcon={!icon && <ArrowBack />}
      >
        {icon ? <ArrowBack /> : 'Back'}
      </Button>
    </Tooltip>
  );
}
BackButton.propTypes = {
  icon: PropTypes.bool,
  className: PropTypes.string,
};
export default BackButton;
