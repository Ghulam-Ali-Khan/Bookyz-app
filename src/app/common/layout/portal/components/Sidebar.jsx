import { List } from '@mui/material';
import React, { useMemo } from 'react';
import SidebarLink from './SidebarLink';
import useGetSidebarItems from '../customhooks/useGetSidebarItems';
import useGetUserRoles from '@/customHooks/useGetUserRoles';

function Sidebar() {
  // CUSTOM HOOKS
  const [sidebarItems, menuJSX] = useGetSidebarItems();
  const { userType } = useGetUserRoles();

  const modified = useMemo(() => {
    const filtered = sidebarItems.filter(item => {
      const isAllowed = item?.permissions?.includes(userType);
      return isAllowed;
    });
    return filtered.sort((a, b) => (a?.order || 0) - (b?.order || 0));
  }, [userType, sidebarItems]);

  return (
    <List className="pt-2">
      {menuJSX}
      {/* COMMON SIDEBAR ITEMS */}
      {modified?.map(item => (
        <SidebarLink
          key={item.id}
          icon={item.icon}
          title={item.title}
          path={item.path}
          isMenu={item?.isMenu}
          onClick={item?.onClick}
        />
      ))}
    </List>
  );
}

export default Sidebar;
