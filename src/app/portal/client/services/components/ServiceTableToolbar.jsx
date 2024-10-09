/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { IconButton, Stack } from '@mui/material';
import { Clear, Delete, Edit } from '@mui/icons-material';
import ConfirmationDialog from '@/app/common/components/ConfirmationDialog';

function ServiceTableToolbar({ selected, numSelected, setSelected }) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);

  // API HOOKS & CUSTOM HOOKS
  //   const [deletePCompany] = useDeleteCompaniesMutation();

  //   const handleDeleteSelected = async () => {
  //     if (selected?.length > 0) {
  //       selected?.forEach(async item => {
  //         await deletePCompany(item?.id);
  //       });

  //       enqueueSnackbar('Company deleted successfully!', { variant: 'success' });
  //       setModalOpen(false);
  //       setSelected([]);
  //     }
  //   };
  return (
    <Stack direction="row" spacing={2} justifyContent="end">
      <ConfirmationDialog
        open={isModalOpen}
        message="Are you sure you want to delete selected item(s)?"
        // onConfirm={handleDeleteSelected}
        onClose={() => setModalOpen(false)}
      />

      {numSelected === 1 && (
        <IconButton
          title="Edit"
          onClick={() => {
            router.push('/portal/pages/hr/sponsor/edit', { state: { selected: selected[0]?.id } });
          }}
        >
          <Edit />
        </IconButton>
      )}

      <IconButton title="Delete" onClick={() => setModalOpen(true)}>
        <Delete />
      </IconButton>

      <IconButton title="Clear Selection" onClick={() => setSelected([])}>
        <Clear />
      </IconButton>
    </Stack>
  );
}

ServiceTableToolbar.propTypes = {
  setSelected: propTypes.func.isRequired,
  selected: propTypes.array,
  numSelected: propTypes.number,
};

export default ServiceTableToolbar;
