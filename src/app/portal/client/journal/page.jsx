import { Add } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import JournalsTable from './components/JournalsTable';

function Journals() {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
        <Typography variant="pageTitle">Journals</Typography>
        <Button variant="contained" color="primary" size="small" startIcon={<Add />}>
          Create Users
        </Button>
      </Stack>
      <JournalsTable />
    </>
  );
}

export default Journals;
