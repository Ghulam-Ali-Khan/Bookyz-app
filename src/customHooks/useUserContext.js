import { useContext } from 'react';
import UserContext from '@/context/UserContext';

function useUserContext() {
  const userContext = useContext(UserContext);

  return userContext;
}

export default useUserContext;
