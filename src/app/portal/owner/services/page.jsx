import { Stack, Typography } from '@mui/material';
import React from 'react';
import AddNewButton from '@/app/common/components/AddNewButton';

function Products() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
      <Typography variant="pageTitle">Services</Typography>
      <AddNewButton label="Create Service" path="/portal/supplier/services/create" />
    </Stack>
  );
}

export default Products;
