'use client';

import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalAppContext from '@/context/GlobalAppContext';
import useConnectWebSocket from '@/customHooks/useConnectWebSocket';
import { getUserOnlineURL } from '@/utilities/sockets-urls';

function GlobalContextWrapper({ children }) {
  const [chatUsers, setChatUsers] = useState([]);
  const [webSocket, setWebSocket] = useState({});
  const socket = useConnectWebSocket(getUserOnlineURL);
  useEffect(() => {
    if (socket) {
      setWebSocket(socket);
    }
  }, [socket]);
  if (socket) {
    socket.onmessage = e => {
      const socketData = JSON.parse(e.data);
      if (Array.isArray(socketData)) {
        setChatUsers(socketData);
      } else {
        setChatUsers([socketData]);
      }
    };
  }
  const handleUpdateSocket = createdSocket => {
    setWebSocket(createdSocket);
  };

  const globalSocketProviderValue = useMemo(
    () => ({
      onlineSocket: socket,
      users: chatUsers,
      handleUpdateSocket,
    }),
    [socket, chatUsers, webSocket]
  );
  return <GlobalAppContext.Provider value={globalSocketProviderValue}>{children}</GlobalAppContext.Provider>;
}

GlobalContextWrapper.propTypes = {
  children: PropTypes.node,
};

export default GlobalContextWrapper;
