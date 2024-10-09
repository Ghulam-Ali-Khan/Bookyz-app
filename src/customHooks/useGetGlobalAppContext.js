import { useContext } from 'react';
import GlobalAppContext from '../context/GlobalAppContext';

function useGetGlobalAppContext() {
  const appContext = useContext(GlobalAppContext);

  return appContext;
}

export default useGetGlobalAppContext;
