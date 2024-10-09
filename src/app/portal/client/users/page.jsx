/* eslint-disable no-unused-vars */

'use client';

import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import UsersTable from './components/UsersTable';
import { formModalStyles } from '@/styles/mui/common/modal-styles';
import ModalHeader from '@/app/common/components/ModalHeader';
import AddEditUsersModal from './components/form/AddEditUsersModal';
import { useGetUserQuery } from '@/services/private/users';

function Users() {
  // const { data, isLoading, isFetching } = useGetUserQuery();
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setAddModalOpen(!isAddModalOpen);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
        <Typography variant="pageTitle">Users</Typography>
        <Button variant="contained" color="primary" size="small" startIcon={<Add />} onClick={toggleAddModal}>
          Create Users
        </Button>
      </Stack>
      <UsersTable />
      <Modal open={isAddModalOpen} onClose={toggleAddModal}>
        <Box sx={{ ...formModalStyles, width: '900px', height: '100vh' }}>
          <ModalHeader title="Add User" onClose={toggleAddModal} />
          <AddEditUsersModal toggleAddModal={toggleAddModal} />
        </Box>
      </Modal>
    </>
  );
}

export default Users;
