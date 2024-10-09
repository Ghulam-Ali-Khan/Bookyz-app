import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { primary } from '@/styles/common/colors';

function ConfirmationDialog({
  onConfirm,
  open,
  onClose,
  message = 'Are you sure you want to perform this action?',
}) {
  const handleClose = () => onClose();
  const handleConfirm = () => onConfirm();
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle className="fs-5 d-flex align-items-center">
        Confirmation <ErrorOutline className="ms-1" htmlColor={primary} />
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1">{message}</Typography>

        <DialogActions>
          <Button size="small" variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button size="small" variant="contained" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string,
};

export default ConfirmationDialog;
