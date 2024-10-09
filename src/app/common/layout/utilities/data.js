/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { People, FormatListBulleted, Handyman, ManageAccounts, Groups, Engineering, Chat, Category, Diversity3 } from '@mui/icons-material';

import { v4 } from 'uuid';
import { CLIENT, SUPPLIER, ADMIN, AUTHENTICATED } from '@/utilities/constants';

export const sidebarCommonItemsData = [
  {
    id: v4(),
    path: '/portal/client/services',
    title: 'Services',
    icon: <Handyman />,
    order: 1,
    permissions: [CLIENT],
  },
  {
    id: v4(),
    path: '/portal/client/users',
    title: 'Users',
    icon: <People />,
    order: 2,
    permissions: [CLIENT],
  },
  // {
  //   id: v4(),
  //   path: '/portal/users',
  //   title: 'Users',
  //   icon: <People />,
  //   order: 2,
  //   permissions: [CLIENT],
  // },
  // {
  //   id: v4(),
  //   path: '/portal/orders',
  //   title: 'Orders',
  //   icon: <FormatListBulleted />,
  //   order: 3,
  //   permissions: [SUPPLIER, CLIENT],
  // },
  // {
  //   id: v4(),
  //   path: '/portal/chat',
  //   title: 'Chats',
  //   icon: <Chat />,
  //   order: 4,
  //   permissions: [SUPPLIER, CLIENT],
  // },
];

export const sidebarAdminItemsData = [
  {
    id: v4(),
    path: '/portal/admin/super-users',
    title: 'Super Users',
    icon: <ManageAccounts />,
    order: 1,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/clients',
    title: 'Clients',
    icon: <Groups />,
    order: 2,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/suppliers',
    title: 'Suppliers',
    icon: <Engineering />,
    order: 3,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/categories',
    title: 'Categories',
    icon: <Category />,
    order: 4,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/orders',
    title: 'Orders',
    icon: <FormatListBulleted />,
    order: 5,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/services',
    title: 'Services',
    icon: <Handyman />,
    order: 6,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/admin/dispute',
    title: 'Dispute',
    icon: <Diversity3 />,
    order: 7,
    permissions: [ADMIN],
  },
  {
    id: v4(),
    path: '/portal/chat',
    title: 'Chats',
    icon: <Chat />,
    order: 8,
    permissions: [ADMIN],
  },
];

export const topbarItems = [
  {
    id: v4(),
    path: '/',
    title: 'Home',
    permissions: [SUPPLIER, CLIENT],
  },
  {
    id: v4(),
    path: '/services/subcatagory',
    title: 'Categories',
    menu: true,
    permissions: [CLIENT, AUTHENTICATED],
  },
  {
    id: v4(),
    path: '/services',
    title: 'Find Services',
    permissions: [CLIENT, AUTHENTICATED],
  },
  {
    id: v4(),
    path: '/about',
    title: 'About',
    permissions: [SUPPLIER, CLIENT, AUTHENTICATED],
  },
  {
    id: v4(),
    path: '/contact-us',
    title: 'Contact',
    permissions: [SUPPLIER, CLIENT],
  },
];

export const companyListItems = [
  {
    id: v4(),
    path: '/portal/pages/hr/company/profiles',
    title: 'Services',
  },
  {
    id: v4(),
    path: '/portal/pages/hr/company/files',
    title: 'Company Files',
  },
];
