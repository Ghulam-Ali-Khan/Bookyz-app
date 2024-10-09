'use client';

import React from 'react';
import propTypes from 'prop-types';
import { Box, Button, Divider } from '@mui/material';
import Link from 'next/link';

// STYLES
import { border } from '@/styles/common/colors';

// API & CUSTOM HOOKS
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { useUpdateServiceStatusMutation } from '@/services/private/services';

function ServiceCardFooter({ serviceSlug = '', status = 'Pending', isPortal = false }) {
  const [updateServiceStatus, { error: statusError, isSuccess: isStatusSuccess }] =
    useUpdateServiceStatusMutation();
  useHandleApiResponse(statusError, isStatusSuccess, 'Status changed successfully!');

  // HANDLERS
  const handleServiceStatusChange = async event => {
    event.preventDefault();
    await updateServiceStatus({ status: status === 'Inactive' ? 'Active' : 'Inactive', slug: serviceSlug });
  };

  return (
    <Box sx={{ position: 'absolute', bottom: '15px', width: '100%' }}>
      <Divider sx={{ borderColor: border, marginBottom: '3px' }} />
      <Box className=" px-3 pt-2 w-full flex justify-between items-center">
        {isPortal && status !== 'Pending' && status !== 'Rejected' && (
          <Button onClick={event => handleServiceStatusChange(event)} variant="contained" size="small">
            {status === 'Inactive' ? 'Active' : 'InActive'}
          </Button>
        )}
        {isPortal && (
          <Link href={`/portal/supplier/services/edit/${serviceSlug}`}>
            <Button variant="contained" size="small">
              Edit
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}

ServiceCardFooter.propTypes = {
  serviceSlug: propTypes.string,
  status: propTypes.string,
  isPortal: propTypes.bool,
};

export default ServiceCardFooter;
