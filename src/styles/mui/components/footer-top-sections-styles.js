import { primary, skin } from '@/styles/common/colors';

export const footerImageStyles = {
  width: '100%',
  height: '60%',
  backgroundSize: 'contain',
};

export const footerContainerStyles = {
  background: skin,
  color: '#000000',
  '& .footer-link-item': {
    fontWeight: 500,
    '&:hover': {
      color: primary,
    },
  },
};
