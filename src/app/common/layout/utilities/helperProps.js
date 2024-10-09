import { contrastText, primary } from '@/styles/common/colors';

export const menuPositionProps = {
  anchorOrigin: {
    horizontal: 'right',
    vertical: 'top',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  sx: {
    '& .MuiPaper-root': {
      minWidth: '160px',
      background: '#F8F9FC',
      borderRadius: '0',
      color: primary,
    },
    '& .MuiMenuItem-root': {
      color: primary,
      fontWeight: 600,
      '&:hover': {
        color: contrastText,
      },
    },
  },
};

export const test = '';
