import propTypes from 'prop-types';
import { Avatar, Box, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';

// API & CUSTOM HOOKS
import { useReadNotificationMutation } from '@/services/private/notifications';

// STYLES & UTILITIES
import { dark, primary } from '@/styles/common/colors';
import { ORDER, REPORT, SENT_MESSAGE, SERVICE, SUPPLIER } from '@/utilities/constants';

function Notification({ timeFromNow, handleSetNotifications, handleClose, notification }) {
  const router = useRouter();

  // API HOOKS
  const [readNotification] = useReadNotificationMutation();

  // CONSTANTS
  const isRead = !notification?.notification_is_read;
  const isDescriptionLarge = notification?.description?.length > 20;
  const description = isDescriptionLarge
    ? `${notification?.description.substring(0, 28)}...`
    : notification?.description;
  const isGigTitleLarge = notification?.gig_title?.length > 16;
  const footerText = isGigTitleLarge
    ? `${notification?.gig_title.substring(0, 16)}...`
    : notification?.gig_title;

  const handleNavigate = async notificationResponseData => {
    const type = notificationResponseData?.notification_type;
    if (type === SENT_MESSAGE) {
      router.push(`/portal/chat?room=${notificationResponseData?.room_id}`);
    } else if (type === ORDER) {
      router.push(`/portal/orders/detail/${notificationResponseData?.order?.order_number}`);
    } else if (type === SERVICE) {
      if (notificationResponseData?.receiver_user_type === SUPPLIER) {
        router.push(`/portal/supplier/services/detail/${notificationResponseData?.service_slug}`);
      } else {
        router.push(`/services/detail/${notificationResponseData?.service_slug}`);
      }
    } else if (type === REPORT) {
      router.push(`/portal/admin/dispute/detail/${notificationResponseData?.report_number}`);
    }
  };

  const handleReadNotifications = async () => {
    const res = await readNotification({ id: notification?.id, isRead: true });
    if (res?.data) {
      handleSetNotifications();
      handleNavigate(res?.data);
      handleClose();
    }
  };

  return (
    <MenuItem divider className={`${isRead && ' bg-gray-200 '} py-3 `} onClick={handleReadNotifications}>
      <Box className="w-full">
        <Typography className=" text-end" color={dark} variant="body3">
          {timeFromNow}
        </Typography>
        <Box className="flex items-center gap-4">
          <Avatar src={notification?.notification_type === REPORT ? '' : notification?.sender_image} />
          <Box>
            <Box className=" flex gap-1 flex-wrap items-center">
              <Typography color={primary} className="font-medium ">
                {notification?.notification_type === REPORT ? 'Guest User' : notification?.sender_name}
              </Typography>

              <Typography>{notification?.heading}</Typography>
            </Box>
            <Box>
              <Typography color={dark} variant="body2">
                {description}
              </Typography>

              <Typography color={dark} variant="body2" className="mt-1 flex items-center ">
                {footerText}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </MenuItem>
  );
}

Notification.propTypes = {
  timeFromNow: propTypes.string,
  notification: propTypes.object,
  handleSetNotifications: propTypes.func.isRequired,
  handleClose: propTypes.func.isRequired,
};

export default Notification;
