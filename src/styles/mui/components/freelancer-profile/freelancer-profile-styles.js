// eslint-disable-next-line import/prefer-default-export
export const addTemplateIconStyle = { fontSize: '25px', color: '#422438' };
export const addGigIconStyle = { fontSize: '25px', color: '#422438' };
export const freelancerGigStyles = {
  width: '100%',
  maxWidth: '100%',
  cursor: 'pointer',
  '@media screen and (max-width: 450px)': { maxWidth: '330px' },
};
export const freelancerAddGigStyles = {
  width: '100%',
  minHeight: '365px',
  cursor: 'pointer',
  background: 'white',
  '@media screen and (max-width: 450px)': { maxWidth: '330px' },
};
export const freelancerAddText = { marginTop: '-2px' };

export const gigDescriptionStyles = {
  paddingBottom: '5px',
  '@media screen and (min-width: 1200px)': {
    height: '48px',
  },
  '@media screen and (min-width: 768px) and (max-width: 1200px)': { height: '72px' },
  '@media screen and (max-width: 450px)': {
    paddingBottom: '10px',
  },
};

export const modalBoxContainer = {
  background: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  borderRadius: '10px',
  maxWidth: '100%',
};

export const aboutBoxContainer = {
  background: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  borderRadius: '20px',
  maxWidth: '100%',
};

export const profileImgBoxStyles = {
  height: '150px',
  backgroundSize: 'cover',
  objectFit: 'cover',
  backgroundPosition: 'center 15%',
  borderRadius: '20px',
  position: 'relative',
  '@media screen and (max-width: 991px)': {
    height: '25vh',
  },
};

export const basicInfoModalAvatarStyles = {
  width: 120,
  height: 120,
  cursor: 'pointer',
  fontSize: '25px',
  borderRadius: '10px',
  backgroundSize: 'cover',
};

export const aboutShowTemplateImgItemStyles = {
  backgroundSize: 'cover',
  width: '32%',
  height: '70px',
  flex: '0 0 auto',
  borderRadius: '10px',
  '@media screen and (max-width: 991px)': {
    height: '150px',
    backgroundPosition: 'center 20%',
  },
  '@media screen and (max-width: 540px)': {
    height: '100px',
    backgroundPosition: 'center 20%',
  },
};

export const aboutProfileAvatarStyles = { width: '120px', height: '120px' };

export const aboutProfileImgBoxStyles = {
  width: '190px',
  height: '190px',
  maxWidth: '100%',
  backgroundSize: 'cover',
  borderRadius: '10px',

  '@media screen and (min-width: 1200px) and (max-width: 1400px)': {
    width: '150px',
    height: '150px',
    maxWidth: '100%',
  },

  '@media screen and (max-width: 540px)': {
    width: '140px',
    height: '110px',
    maxWidth: '100%',
  },
};

export const profileOnlineIconStyles = {
  fontSize: 20,
  bottom: -1,
  right: -1,
  borderRadius: '50%',
  border: '3px solid white',
  position: 'absolute',
};

export const imageCropperModalStyles = {
  background: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  height: '400px',
  borderRadius: '20px',
  maxWidth: '100%',
};

export const educationInfoModalStyles = {
  background: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  borderRadius: '20px',
  maxWidth: '100%',
  outline: 'none'
};
