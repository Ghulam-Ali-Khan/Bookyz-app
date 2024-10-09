// import { colors } from '@/styles/common/colors';

export const reviewAvatarCommonStyles = {
  border: '1px solid white',
  position: 'absolute',
};

export const commonReviewMsgBoxStyles = {
  maxWidth: '230px',
  width: '100%',
};

export const leftReviewBoxWrapperStyles = { left: '-70px', bottom: '40%' };

export const leftReviewAvatarStyles = { ...reviewAvatarCommonStyles, left: '-20px', bottom: '-20px' };

export const rightBottomReviewBoxStyles = { bottom: '15%', right: '-24%' };

export const rightBottomReviewMsgBoxStyles = {
  background: '#FFE3C5',
  maxWidth: '200px',
  width: '100%',
};

export const rightBottomReviewAvatarStyles = {
  ...reviewAvatarCommonStyles,
  right: '-20px',
  top: '-20px',
};

export const rightTopReviewBoxStyles = { right: '-80px', top: '10%' };

export const rightTopReviewMsgBoxStyles = {
  ...commonReviewMsgBoxStyles,
  background: '#D5EFD4',
};
export const buildTeamCardImagesStyles = {
  backgroundSize: 'cover',
  height: '200px',
  width: '100%',
  borderRadius: '10px',
};
export const rightTopReviewAvatarStyles = {
  ...reviewAvatarCommonStyles,
  right: '-20px',
  top: '-20px',
  width: '50px',
  height: '50px',
};

// ANIMATION CONFIGS
export const leftBoxAnimationConfig = {
  from: { left: '-70px', bottom: '60%', opacity: 0 },
  to: { left: '-70px', bottom: '40%', opacity: 1 },
  delay: 1700,
};

export const rightTopBoxAnimationConfig = {
  from: { right: '-80px', top: '-10%', opacity: 0 },
  to: { right: '-80px', top: '10%', opacity: 1 },
  delay: 1200,
};

export const rightBottomBoxAnimationConfig = {
  from: { bottom: '-5%', right: '-24%', opacity: 0 },
  to: { bottom: '15%', right: '-24%', opacity: 1 },
  delay: 2200,
};

export const heroImgAnimationConfig = {
  from: { opacity: 0.5, translate: '0px -50px' },
  to: { opacity: 1, translate: '0px 0px' },
  delay: 500,
};
