import { dark, primary } from '@/styles/common/colors';

export const iconButtonStyles = {
  width: '100px',
  height: '100px',
};

export const fileBoxFieldStyles = {
  '& *': { color: dark },
  ':hover': { '& *': { color: primary } },
};
