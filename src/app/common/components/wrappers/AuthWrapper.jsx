import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { redirect, usePathname } from 'next/navigation';
import Loading from '@/app/loading';
import { useLazyAuthorizedQuery } from '@/services/private/auth';
import { onAuthorized, onLoggedOut } from '@/store/slices/authSlice';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { deleteTokenCookie } from '@/utilities/cookiesHelpers';

function AuthWrapper({ children }) {
  const dispatch = useDispatch();
  const { isSupplier } = useGetUserRoles();
  const path = usePathname();
  const isPortal = path === '/portal';
  const [getAsyncAuthorizedUser, { data, isSuccess, isLoading: loadingAuth, isError }] = useLazyAuthorizedQuery();

  useEffect(() => {
    const getData = async () => {
      await getAsyncAuthorizedUser();
    };

    getData();
  }, []);

  const isLoading = loadingAuth;

  useEffect(() => {
    if (isSuccess) {
      dispatch(onAuthorized(data));
    } else if (isError) {
      dispatch(onLoggedOut());
      deleteTokenCookie();
    }
  }, [data, loadingAuth, isSuccess]);

  useEffect(() => {
    if (isPortal && data) {
      redirect(data?.user_type === 'super_admin' ? '/portal/admin/dashboard' : `/portal/${data?.user_type}/dashboard`);
    }
  }, [isSupplier, data]);

  if (isLoading) return <Loading />;

  return children;
}

AuthWrapper.propTypes = {
  children: PropTypes.node,
};

export default AuthWrapper;
