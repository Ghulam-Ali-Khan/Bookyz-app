'use client';

import React from 'react';
import propTypes from 'prop-types';
import { Fade, ListItemText, Menu, MenuItem, MenuList } from '@mui/material';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useAuth from '@/customHooks/useAuth';
import { topbarMenuStyles } from '@/styles/mui/containers/layout/layout-styles';
import useGetUserRoles from '@/customHooks/useGetUserRoles';

function ProfileMenu({ anchorEl, handleClose }) {
  const { isSupplier, isClient } = useGetUserRoles();
  const userInfo = useSelector(state => state.auth.user);
  const { handleLogout } = useAuth();
  const router = useRouter();
  return (
    <Menu
      key={anchorEl}
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={handleClose}
      sx={topbarMenuStyles}
      TransitionComponent={Fade}
      disableScrollLock
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuList sx={{ outline: 'none', border: 'none' }} disablePadding>
        <MenuItem
          onClick={handleClose}
          component={Link}
          className="resetLink"
          href={`/portal/profile/${userInfo?.username}`}
        >
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        {(isSupplier || isClient) && (
          <MenuItem onClick={handleClose} component={Link} className="resetLink" href={isSupplier ? '/portal/supplier/dashboard' : '/portal/client/dashboard'}>
            <ListItemText>Dashboard</ListItemText>
          </MenuItem>
        )}

        <MenuItem
          onClick={async () => {
            handleClose();
            await handleLogout();
            router.push('/auth/signin');
          }}
        >
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

ProfileMenu.propTypes = {
  anchorEl: propTypes.object,
  handleClose: propTypes.func.isRequired,
};

export default ProfileMenu;
