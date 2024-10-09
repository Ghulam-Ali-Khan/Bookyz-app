export const userContainerStyles = { '@media screen and (max-width: 990px)': { display: 'none' } };

export const userArrowStyles = {
  display: 'none',
  '@media screen and (max-width: 990px)': { display: 'block' },
};

export const chatTitleStyles = {
  borderBottom: '1px solid #E5E5EA',
};

export const userListContainerStyles = {
  borderRight: '1px solid #E5E5EA',
  '@media screen and (max-width: 990px)': { borderRight: 'none' },
};

export const messageListMenuStyles = { boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' };

export const messageListMenuItemStyles = {
  '&:hover': { bgcolor: '#ece9eb' },
};

export const MessagesWrapperStyles = { overflowY: 'auto', height: '50vh' };

export const ChatMessageBoxStyles = { borderRadius: '5px 10px 10px 10px' };

export const chatEmojiBoxStyles = { position: 'absolute', top: 0, transform: 'translateY(-100%)' };

export const createOfferModalStyles = {
  width: '600px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  translate: '-50% -50%',
  outline: 'none',
  border: 'none',
  borderRadius: '10px',
  height: '80vh',
  overflow: 'hidden',
  '@media screen and (max-width: 991px)': {
    width: '100vw',
  },
};

export const userProfileImageStyles = { height: '50px', width: '50px' };

export const userInfoContainerStyles = {
  background: '#f5f5f5',
  borderBottom: '1px solid #E5E5EA',
  '&:hover': {
    background: '#FFE3C5',
  },
};

export const activeUserContainerStyles = {
  background: '#FFE3C5',
  borderBottom: '1px solid #E5E5EA',
};

export const chatDisableButtonStyles = {
  background: '#E0E0E0',
  color: '#B5C6D9 ',
};

export const chatOfferContainerStyles = {
  width: '300px',
};

export const chatOfferBorderStyles = { borderLeft: '3px solid #fff', paddingLeft: '5px' };

export const gridStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '5px', gap: '20px' };
