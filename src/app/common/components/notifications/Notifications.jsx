import { Badge, IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Notifications as NotificationsIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';

// API & CUSTOM HOOKS
import useGetMenuHandlers from '@/customHooks/useGetMenuHandlers';
import useConnectWebSocket from '@/customHooks/useConnectWebSocket';
import {
  useLazyGetNotificationQuery,
  useReadAllNotificationsMutation,
} from '@/services/private/notifications';

// COMPONENTS & UTILS
import NotificationsMenu from './NotificationsMenu';
import { getNotificationUrl } from '@/utilities/sockets-urls';
import { findUnreadNotificationCount } from '../../layout/portal/utilities/helpers';

function Notifications() {
  const [notificationMenu, handleOpenNotificationMenu, handleCloseNotificationMenu] = useGetMenuHandlers();

  // STATE HOOKS
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifications, setUnreadNotifications] = useState(null);

  // API HOOKS
  const [getNotifications] = useLazyGetNotificationQuery();
  const [readAllNotifications, { isLoading }] = useReadAllNotificationsMutation();

  // REFS
  const notificationStateRef = useRef(notifications);
  const notificationCountRef = useRef(null);
  const notificationContainerRef = useRef(null);

  const socket = useConnectWebSocket(getNotificationUrl());
  const userInfo = useSelector(state => state.auth.user.profile);

  const handleSetNotifications = data => {
    notificationStateRef.current = data;
    setNotifications(data);
    setUnreadNotifications(findUnreadNotificationCount(data));
  };

  // WEB-SOCKET
  useEffect(() => {
    if (socket) {
      socket.onmessage = e => {
        const data = JSON.parse(e.data);
        const isMineNotification = data.receiver === userInfo?.id;
        if (isMineNotification) {
          const updatedNotificationsList = [data, ...notificationStateRef.current];
          handleSetNotifications(updatedNotificationsList);
        }
      };
    }
  }, [socket]);

  // GET PREVIOUS NOTIFICATIONS HANDLER
  const getPrevNotifications = async () => {
    getNotifications().then(res => {
      notificationCountRef.current = res?.data?.length;
      const data = [...notificationStateRef.current, ...res.data.results];

      const filteredData = data.filter(
        (item, idx, array) => array.findIndex(value => value.id === item.id) === idx
      );
      handleSetNotifications(filteredData);
    });
  };

  // GET NOTIFICATIONS ON FIRST RENDER
  useEffect(() => {
    const handleGetInitialNotifications = async () => {
      const res = await getNotifications();
      notificationCountRef.current = res?.data?.length;
      handleSetNotifications(res?.data);
    };

    handleGetInitialNotifications();
  }, []);

  // GET PREVIOUS NOTIFICATIONS ON SCROLL TO TOP
  useEffect(() => {
    notificationContainerRef.current?.addEventListener('scroll', () => {
      const container = notificationContainerRef.current;
      const isScrollBarAtEnd = container.scrollTop === container.scrollHeight - container.offsetHeight;
      const isAvailableNotificationLessThanCount =
        notificationStateRef.current.length < notificationCountRef.current;

      if (isScrollBarAtEnd && isAvailableNotificationLessThanCount) {
        getPrevNotifications();
      }
    });

    return () => {
      notificationContainerRef.current?.removeEventListener('scroll', () => {});
    };
  }, [notificationContainerRef?.current]);

  // HANDLERS
  const handleReadAllNotifications = async () => {
    await readAllNotifications();
    const getNotificationsResp = await getNotifications();
    handleSetNotifications(getNotificationsResp?.data);
  };

  // HANDLER FUNCTIONS
  const handleGetNotifications = async () => {
    const res = await getNotifications();
    notificationCountRef.current = res?.data?.length;
    handleSetNotifications(res?.data);
  };

  return (
    <>
      <IconButton onClick={handleOpenNotificationMenu}>
        <Badge color="primary" badgeContent={unreadNotifications}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <NotificationsMenu
        anchorEl={notificationMenu}
        handleClose={handleCloseNotificationMenu}
        notifications={notifications}
        handleReadAll={handleReadAllNotifications}
        handleSetNotifications={handleGetNotifications}
        isLoading={isLoading}
      />
    </>
  );
}

export default Notifications;
