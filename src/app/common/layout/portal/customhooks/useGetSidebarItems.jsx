/* eslint-disable no-unused-vars */
import { Dashboard } from '@mui/icons-material';
import React, { useMemo } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { v4 } from 'uuid';
import { companyListItems, sidebarCommonItemsData, sidebarAdminItemsData } from '../../utilities/data';
import { menuPositionProps } from '../../utilities/helperProps';
import useGetMenuHandlers from '@/customHooks/useGetMenuHandlers';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { ADMIN, CLIENT, SUPPLIER } from '@/utilities/constants';

function useGetSidebarItems() {
  // COMPONENTS STATE WITH HANDLER FUNCTIONS
  const { userType } = useGetUserRoles();
  const [companyMenu, handleOpenCompanyMenu, handleCloseCompanyMenu] = useGetMenuHandlers();

  const sidebarItems = useMemo(
    () => [
      {
        id: v4(),
        path: `/portal/${userType}/dashboard`,
        title: 'Dashboard',
        icon: <Dashboard />,
        order: 0,
        permissions: [SUPPLIER, CLIENT, ADMIN],
      },
      ...sidebarCommonItemsData,
      ...sidebarAdminItemsData,
    ],
    [userType]
  );

  // MENU JSX
  const companyMenuJSX = () => (
    <Menu
      key={v4()}
      anchorEl={companyMenu}
      open={!!companyMenu}
      onClose={handleCloseCompanyMenu}
      {...menuPositionProps}
    >
      {companyListItems?.map(item => (
        <MenuItem key={item?.id} onClick={handleCloseCompanyMenu} path={item?.path}>
          {item?.title}
        </MenuItem>
      ))}
    </Menu>
  );

  return [sidebarItems, [companyMenuJSX()]];
}

export default useGetSidebarItems;
