export const modalCommonStyles = {
  maxWidth: '100%',
  width: '400px',
  background: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
  border: 'none',
  maxHeight: '95vh',
  overflowY: 'auto',
  borderRadius: '18px',
};

export const contentModalStyles = {
  ...modalCommonStyles,
  width: '600px',
  padding: '20px',
  paddingBottom: '40px',
};

export const fileViewModalStyles = {
  ...modalCommonStyles,
  width: '700px',
  padding: '20px',
  paddingBottom: '40px',
};

export const formModalStyles = {
  ...modalCommonStyles,
  width: '500px',
  padding: '20px',
};

export const formBodyModalStyles = { maxHeight: '550px', overflow: 'auto', padding: '5px' };

export const modalBodyOverflowStyles = {
  overflowY: 'auto',
  maxHeight: '600px',
};

export const fileViewerModalBoxStyles = {
  padding: '2rem',
  maxWidth: '100%',
  width: '1000px',
  height: '90vh',
  overflow: 'auto',
  backgroundColor: 'white',
  position: 'absolute',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  border: 'none',
  outline: 'none',
};
