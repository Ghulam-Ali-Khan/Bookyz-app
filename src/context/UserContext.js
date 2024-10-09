import { createContext } from 'react';

const UserContext = createContext({
  activeStep: 0,
  setActiveStep: () => {},
  userData: {},
  setUserData: () => {},
  callingCodeOptions: [],
  setError: () => {},
  error: false
});

export default UserContext;
