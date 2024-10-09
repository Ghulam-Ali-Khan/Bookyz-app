'use client';

import { useEffect, useRef } from 'react';

function useConnectWebSocket(url, isChatRoom = false, chatRoomId = null) {
  const socketRef = useRef(null);

  useEffect(() => {
    if (isChatRoom) {
      if (chatRoomId) {
        const socket = new WebSocket(url);
        socketRef.current = socket;
      }
    } else {
      const socket = new WebSocket(url);
      socketRef.current = socket;
    }

    return () => socketRef.current?.close();
  }, [chatRoomId]);
  return socketRef.current && socketRef.current;
}

export default useConnectWebSocket;
