import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Chat, Delete, Edit } from '@mui/icons-material';
import { Box, Button, Divider, Modal, Stack, Tooltip, Typography } from '@mui/material';

// API & CUSTOM HOOKS
import { useAddOrderMutation } from '@/services/private/orders';
import { useCreateRoomMutation } from '@/services/private/chat';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { useDeleteServiceMutation, useUpdateServiceStatusMutation } from '@/services/private/services';

// STYLES
import { border, primary } from '@/styles/common/colors';
import { formModalStyles } from '@/styles/mui/common/modal-styles';
import { servicePriceStyle } from '@/styles/mui/components/services-styles';

// COMPONENTS
import ModalHeader from '../ModalHeader';
import ConfirmationDialog from '../ConfirmationDialog';
import BackButton from '@/app/common/components/BackButton';
import SupplierHireForm from '@/app/portal/orders/components/form/SupplierHireForm';

function ServiceDetailHeader({
  name = '',
  price = 0,
  status = 'Pending',
  slug = '',
  isPortal = false,
  serviceId = null,
  supplierId = null,
}) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const [deleteService, { error, isSuccess }] = useDeleteServiceMutation();
  const [addOrder, { error: hireError, isSuccess: hireIsSuccess }] = useAddOrderMutation();
  const [updateServiceStatus, { error: statusError, isSuccess: isStatusSuccess }] =
    useUpdateServiceStatusMutation();

  useHandleApiResponse(statusError, isStatusSuccess, 'Status changed successfully!');
  useHandleApiResponse(error, isSuccess, 'Service Deleted successfully!', true);
  useHandleApiResponse(hireError, hireIsSuccess, 'Hired successfully!');

  const userInfo = useSelector(state => state.auth.user);
  const [createRoom] = useCreateRoomMutation();

  const toggleModal = () => setModalOpen(prev => !prev);

  const toggleConfirmationModal = () => setConfirmationModalOpen(prev => !prev);

  // HANDLERS
  const handleServiceStatusChange = async event => {
    event.preventDefault();
    await updateServiceStatus({ status: status === 'Inactive' ? 'Active' : 'Inactive', slug });
  };

  const handleDeleteService = async () => {
    await deleteService(slug);
    toggleConfirmationModal();
    router.push('/portal/supplier/services');
  };

  const openChat = async () => {
    const { data: room } = await createRoom({ owner: userInfo?.profile?.id, partner: supplierId });
    router.push(`/portal/chat?room=${room.id}`);
  };

  return (
    <Box className=" flex justify-between items-center gap-14">
      <Box className="flex gap-5 items-center">
        <Typography color={primary} variant="h5" className="font-medium">
          {name}
        </Typography>
        <Divider orientation="vertical" variant="middle" color={border} flexItem />
        <Box sx={servicePriceStyle}>
          <Typography color={primary} variant="h6" className="font-bold">
            ${price}
          </Typography>
        </Box>
      </Box>
      <Stack direction="row" alignItems="center" gap={2}>
        {isPortal && status !== 'Pending' && status !== 'Rejected' && (
          <Tooltip placement="top" title="Service Status">
            <Button onClick={event => handleServiceStatusChange(event)} variant="contained" size="small">
              {status === 'Inactive' ? 'Active' : 'InActive'}
            </Button>
          </Tooltip>
        )}
        {isPortal && (
          <Link href={`/portal/supplier/services/edit/${slug}`}>
            <Tooltip placement="top" title="Edit">
              <Button className="block" variant="contained" size="small">
                <Edit />
              </Button>
            </Tooltip>
          </Link>
        )}
        {isPortal && (
          <Tooltip placement="top" title="Delete">
            <Button className="block" onClick={toggleConfirmationModal} variant="contained" size="small">
              <Delete />
            </Button>
          </Tooltip>
        )}
        {!isPortal && (
          <Tooltip placement="top" title="Hire">
            <Button onClick={toggleModal} variant="contained" size="small">
              Hire
            </Button>
          </Tooltip>
        )}
        {!isPortal && (
          <Tooltip placement="top" title="Chat">
            <Button className="block" onClick={openChat} variant="contained" size="small">
              <Chat />
            </Button>
          </Tooltip>
        )}
        <BackButton className="block" icon />
      </Stack>

      <Modal open={modalOpen} onClose={toggleModal}>
        <Box sx={{ ...formModalStyles, padding: '20px' }}>
          <ModalHeader title="Hire" onClose={toggleModal} />
          <SupplierHireForm
            serviceId={serviceId}
            toggleModal={toggleModal}
            price={price}
            handler={addOrder}
          />
        </Box>
      </Modal>
      <ConfirmationDialog
        onConfirm={handleDeleteService}
        open={confirmationModalOpen}
        onClose={toggleConfirmationModal}
        message="Are you sure you want to delete the service?"
      />
    </Box>
  );
}

ServiceDetailHeader.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  status: PropTypes.string,
  slug: PropTypes.string,
  isPortal: PropTypes.bool,
  serviceId: PropTypes.number,
  supplierId: PropTypes.number,
};

export default ServiceDetailHeader;
