import React from 'react';
import { Stack, Typography } from '@mui/material';
import AddEditUsersForm from '../components/form/AddEditUsersForm';
import BackButton from '@/app/common/components/BackButton';

function AddUsersForm() {
  return (
    <>
      <Stack mb={4} direction="row" justifyContent="space-between">
        <Typography variant="pageTitle">Add Users</Typography>
        <BackButton />
      </Stack>

      <AddEditUsersForm />
    </>
  );
}

export default AddUsersForm;
