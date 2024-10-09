import { useDispatch } from 'react-redux';
import { privateAPi } from '@/services/private';
import { publicApi } from '@/services/public';
import { onLoggedOut } from '@/store/slices/authSlice';
import { deleteTokenCookie } from '@/utilities/cookiesHelpers';

const useAuth = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await deleteTokenCookie();
    dispatch(onLoggedOut());
    dispatch(publicApi.util.resetApiState());
    dispatch(privateAPi.util.resetApiState());
  };

  return { handleLogout };
};

export default useAuth;
