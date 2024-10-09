import { useSelector } from 'react-redux';

const useGetUserRoles = () => {
  const { user } = useSelector(state => state.auth);

  const userType = user?.user_type;
  const isClient = user?.user_type === 'client';
  const isSupplier = user?.user_type === 'owner';
  const isAdmin = user?.user_type === 'admin';

  return {
    userType,
    isClient,
    isSupplier,
    isAdmin
  };
};

export default useGetUserRoles;
