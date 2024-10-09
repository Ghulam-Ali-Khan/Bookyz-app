import { disabled, primary, secondary } from '@/styles/common/colors';

export const servicesContainerStyles = { width: '98%', position: 'relative' };

export const servicesDummyCardStyles = {
  width: '100%',
  maxWidth: '100%',
  background: '#fff6ec',
  cursor: 'pointer',
  '@media screen and (max-width: 450px)': { maxWidth: '330px' },
};

export const recomendedProjectCardStyles = {
  width: '100%',
  maxWidth: '100%',
  cursor: 'pointer',
  '@media screen and (max-width: 450px)': { maxWidth: '330px' },
};

export const servicesCardStyles = isPortal => {
  const height = isPortal ? '435px' : '400px';
  return {
    border: `3px solid ${disabled}`,
    borderRadius: '16px',
    height,
    boxShadow: 0,
    transition: '0.3s all',
    ':hover': { boxShadow: '2px 2px 10px #d7d7d7' },
  };
};

export const servicesTitleStyles = {
  paddingBottom: '5px',
  whiteSpace: 'pre-line',
  overflowWrap: 'break-word',
  height: 'auto',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',

  '@media screen and (max-width: 768px)': {
    height: '45px',
  },
};

export const delectIconStyles = {
  background: '#F2F0F2',
  '&:hover': {
    background: '#FFFFFF',
  },
};

export const kebabMenuIconStyles = {
  background: '#F2F0F2',
  '&:hover': {
    background: '#fff1e2',
  },
};

export const deleteButtonStyles = { position: 'absolute', right: '10px', top: '12px', zIndex: 10 };

export const DraftLabelStyles = {
  position: 'absolute',
  left: '10px',
  top: '12px',
  backgroundColor: '#fff',
  padding: '5px',
  zIndex: 10,
};

export const servicesAvatarStyles = {
  width: '40px',
  height: '40px',
};

export const servicesCoverImageStyles = {
  backgroundSize: 'cover',
  width: '100%',
  height: '200px',
  clipPath: 'ellipse(100% 65% at 51% 35%)',
};

export const servicesNotReviewAvailableStyles = {
  visibility: 'hidden',
};

export const cardIconFilterStyle = {
  backgroundColor: '#E7E7E7',
  color: primary,
  borderRadius: '4px',
  padding: '6px',
  width: '28px',
  height: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.4s',
  '&:hover': {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.14)',
  },
};

export const profileCardIconStyle = {
  ...cardIconFilterStyle,
  position: 'absolute',
  right: '10px',
  top: '10px',
  zIndex: 10,
};

export const servicePriceStyle = {
  backgroundColor: secondary,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '10px',
  paddingY: '5px',
  paddingX: '10px',
};
