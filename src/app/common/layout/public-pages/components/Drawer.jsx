import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import MuiDrawer from '@mui/material/Drawer';
import { Box, Divider, List } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import DrawerListItem from './DrawerListItem';

// STYLES
import {
  closeIconButtonStyles,
  muiDrawerStyles,
  drawerContainerBoxStyles,
} from '@/styles/mui/components/navbar-drawer-styles';
import { border, contrastText } from '@/styles/common/colors';
import SearchInput from '../../common/SearchInput';
import { topbarItems } from '../../utilities/data';
import useGetUserRoles from '@/customHooks/useGetUserRoles';

function Drawer({ showNavbar, handleShowNavbar }) {
  const { isSupplier } = useGetUserRoles();
  const { userType } = useGetUserRoles();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const modified = useMemo(() => {
    const filtered = topbarItems.filter(item => {
      const isAllowed = item?.permissions?.includes(userType);
      return isAllowed;
    });
    return [
      ...filtered,
      {
        id: v4(),
        path: '/how-it-works',
        title: 'How It Works',
        menu: !isAuthenticated,
      },
    ];
  }, [userType, isAuthenticated]);

  return (
    <MuiDrawer anchor="left" open={showNavbar} onClose={handleShowNavbar} sx={muiDrawerStyles}>
      <Box
        sx={{ ...drawerContainerBoxStyles, color: contrastText }}
        className="p-3 relative"
        role="presentation"
      >
        <Box className=" flex items-center justify-between w-full">
          <SearchInput themeLight />
          <Close sx={closeIconButtonStyles} className="ms-2" onClick={handleShowNavbar} />
        </Box>

        <List onClick={handleShowNavbar}>
          {!isAuthenticated && (
            <>
              <DrawerListItem path="/auth/signup" label="Sign up" />

              <DrawerListItem path="/auth/signin" label="Sign in" />
            </>
          )}

          {modified?.map(item => (
            <DrawerListItem key={item.path} label={item.title} path={item.path} />
          ))}
        </List>

        <Divider sx={{ borderColor: border }} />

        {/* PRIVATE ROUTE LISTING */}
        {isAuthenticated && (
          <List onClick={handleShowNavbar}>
            <DrawerListItem path={`/portal/profile/${user?.username}`} label="Profile" />

            <DrawerListItem path={isSupplier ? '/portal/supplier' : '/portal/client'} label="Dashboard" />

          </List>
        )}
      </Box>
    </MuiDrawer>
  );
}

Drawer.propTypes = {
  showNavbar: propTypes.bool.isRequired,
  handleShowNavbar: propTypes.func.isRequired,
};

export default Drawer;
