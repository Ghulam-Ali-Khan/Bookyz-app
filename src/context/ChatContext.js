import { createContext } from 'react';

export const ChatContext = createContext({
  chatRoomId: null,
  pendingMessages: [],
  setPendingMessages: () => {},
  selectedUser: null,
  handleGetLatestRoom: () => {},
});

export const test = '';
