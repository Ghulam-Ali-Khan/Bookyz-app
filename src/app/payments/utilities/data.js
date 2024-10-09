/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Business, Person, Store } from '@mui/icons-material';

export const plansList = [
  {
    // planId: 'P-7BT90076842067520MWOV33Y',
    planId: '1',
    title: '1$ Plan',
    newPrice: '1',
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    duration: '4 Month',
    icon: <Person style={{ fontSize: '50px' }} />,
    planOptions: [
      {
        label: '4 months validity',
        status: true,
      },
      {
        label: '20 users with multiple roles',
        status: true,
      },
      {
        label: 'Manage Sales',
        status: true,
      },
      {
        label: 'Handle Purchases',
        status: true,
      },
      {
        label: 'Manage Finances',
        status: true,
      },
      {
        label: 'Generate Reports',
        status: true,
      },
      {
        label: 'Manage Manual Journals',
        status: true,
      },
      {
        label: 'Branding',
        status: true,
      },

      {
        label: 'Add stamps to invoices and quotes',
        status: true,
      },
      {
        label: 'Apply tax rates',
        status: true,
      },
      {
        label: 'Automatic VAT return generation',
        status: true,
      },
      {
        label: 'Download PDFs',
        status: false,
      },
      {
        label: 'Email Invoices',
        status: false,
      },
    ],
  },
  {
    planId: '2',
    title: 'Monthly Plan',
    newPrice: '19.99',
    oldPrice: '100.00',
    buttonText: 'Get started',
    buttonVariant: 'contained',
    duration: '1 Month',
    icon: <Store style={{ fontSize: '50px' }} />,
    planOptions: [
      {
        label: '1 months validity',
        status: true,
      },
      {
        label: 'Unlimited users with multiple roles',
        status: true,
      },
      {
        label: 'Manage Sales',
        status: true,
      },
      {
        label: 'Handle Purchases',
        status: true,
      },
      {
        label: 'Manage Finances',
        status: true,
      },
      {
        label: 'Generate Reports',
        status: true,
      },
      {
        label: 'Manage Manual Journals',
        status: true,
      },
      {
        label: 'Branding',
        status: true,
      },

      {
        label: 'Add stamps to invoices and quotes',
        status: true,
      },
      {
        label: 'Apply tax rates',
        status: true,
      },
      {
        label: 'Automatic VAT return generation',
        status: true,
      },
      {
        label: 'Download PDFs',
        status: true,
      },
      {
        label: 'Email Invoices',
        status: true,
      },
    ],
  },
  {
    planId: '3',
    title: 'Yearly Plan',
    newPrice: '99.99',
    oldPrice: '1000.00',
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
    duration: '1 Year',
    icon: <Business style={{ fontSize: '50px' }} />,
    planOptions: [
      {
        label: '1 year validity',
        status: true,
      },
      {
        label: 'Unlimited users with multiple roles',
        status: true,
      },
      {
        label: 'Manage Sales',
        status: true,
      },
      {
        label: 'Handle Purchases',
        status: true,
      },
      {
        label: 'Manage Finances',
        status: true,
      },
      {
        label: 'Generate Reports',
        status: true,
      },
      {
        label: 'Manage Manual Journals',
        status: true,
      },
      {
        label: 'Branding',
        status: true,
      },
      {
        label: 'Add stamps to invoices and quotes',
        status: true,
      },
      {
        label: 'Apply tax rates',
        status: true,
      },
      {
        label: 'Automatic VAT return generation',
        status: true,
      },
      {
        label: 'Download PDFs',
        status: true,
      },
      {
        label: 'Email Invoices',
        status: true,
      },
    ],
  },
];

export const test = '';
