import React from 'react';
import { Stack, Typography } from '@mui/material';
import AddEditServicesForm from '../components/AddEditServicesForm';
import BackButton from '@/app/common/components/BackButton';

function AddServicesForm() {
  return (
    <>
      <Stack mb={4} direction="row" justifyContent="space-between">
        <Typography variant="pageTitle">Add Services</Typography>
        <BackButton />
      </Stack>

      <AddEditServicesForm />
    </>
  );
}

export default AddServicesForm;
