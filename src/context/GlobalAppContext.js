import { createContext } from 'react';

const GlobalAppContext = createContext({
  onlineSocket: null,
  users: [],
  handleUpdateSocket: () => {},
  cancelPayoutSocket: null,
  updateCancelPayoutSocket: () => {},
});

export default GlobalAppContext;
