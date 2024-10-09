export const templatesImageWrapperStyles = {
  maxWidth: '100%',
  height: '140px',
  maxHeight: '170px',
  flex: '0 0 auto',
  width: '32%',
  position: 'relative',
  '@media screen and (max-width: 768px)': {
    width: '100%',
    height: '200px',
  },
};

export const templatesImagesStyles = {
  height: '100%',
  width: '100%',
  backgroundSize: 'cover',
  borderRadius: '15px',
};

export const addImageButtonStyles = {
  borderRadius: '15px',
  flex: '0 0 auto',
  width: '32%',
  height: '140px',
  maxHeight: '170px',
  border: '1px dashed',
  background: '#fbf9fa',
  '@media screen and (max-width: 768px)': {
    width: '100%',
    height: '200px',
  },
};

export const addTemplateCancelButtonStyles = { borderRadius: '20px', textTransform: 'capitalize' };

export const viewTemplateImgWrapperStyles = {
  width: '32%',
  height: '200px',
  flex: '0 0 auto',
  cursor: 'pointer',
  position: 'relative',
  '@media screen and (max-width: 768px)': {
    width: '49%',
    height: '170px',
  },
  '@media screen and (max-width: 540px)': {
    width: '100%',
    height: '250px',
  },
};

export const viewTemplateImgItemStyles = {
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  borderRadius: '15px',
};

export const templateModalBoxStyles = {
  background: 'white',
  width: '90vw',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '20px',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'transparent',
  outline: 'none',
};

export const templateModalBoxBodyStyles = { height: '70vh', overflowY: 'scroll' };

export const addTemplateDeleteIconButtonStyles = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  background: '#fac751',
  padding: '5px',
  ':hover': {
    background: '#fac751',
  },
};

export const addTemplateDeleteIconStyles = { fontSize: 17, color: '#422f38' };
