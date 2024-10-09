import React from 'react';
import propTypes from 'prop-types';
import { Box, Button, CircularProgress, Divider, Fade, Menu, MenuList, Typography } from '@mui/material';
import moment from 'moment';
import { notificationMenuStyles } from '@/styles/mui/containers/layout/layout-styles';
import { border, primary } from '@/styles/common/colors';
import Notification from './Notification';

function NotificationsMenu({
  anchorEl,
  handleClose,
  handleReadAll,
  handleSetNotifications,
  notifications = [],
  isLoading,
}) {
  return (
    <Menu
      key={anchorEl}
      anchorEl={anchorEl}
      open={!!anchorEl}
      onClose={handleClose}
      sx={notificationMenuStyles}
      TransitionComponent={Fade}
      disableScrollLock
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box className="flex items-end justify-between py-2 px-3 ">
        <Typography className=" font-semibold">Recent Activities</Typography>
        <Button
          size="small"
          className="px-2 py-1 text-sm"
          variant="contained"
          disabled={notifications?.length === 0}
          onClick={handleReadAll}
        >
          Read All
        </Button>
      </Box>
      <Divider sx={{ borderColor: border }} />
      <MenuList
        sx={{ outline: 'none', border: 'none', paddingBottom: '0px', maxHeight: '450px', overflowY: 'auto' }}
        disablePadding
      >
        {!isLoading && notifications?.length > 0 &&
          notifications?.map(notification => {
            const timeFromNow = moment(notification?.notification_created_at).fromNow();
            return (
              <Notification
                key={notification?.id}
                handleSetNotifications={handleSetNotifications}
                handleClose={handleClose}
                notification={notification}
                timeFromNow={timeFromNow}
              />
            );
          })}

        {isLoading && (
          <Box className=" flex justify-center items-center h-[450px]">
            <CircularProgress sx={{ color: primary }} size={30} />
          </Box>
        )}
        {!isLoading && notifications?.length === 0 && (
          <Box className=" flex justify-center items-center h-[450px]">
            <Typography className=" text-center ">No Recent Notifications</Typography>
          </Box>
        )}
      </MenuList>
    </Menu>
  );
}

NotificationsMenu.propTypes = {
  anchorEl: propTypes.object,
  notifications: propTypes.array,
  isLoading: propTypes.bool,
  handleClose: propTypes.func.isRequired,
  handleReadAll: propTypes.func.isRequired,
  handleSetNotifications: propTypes.func.isRequired,
};

export default NotificationsMenu;
