'use client';

import { SnackbarProvider } from 'notistack';
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '@/store';
import ThemeWrapper from '@/app/common/components/wrappers/ThemeWrapper';
import Loading from '../../../loading';
import AuthWrapper from './AuthWrapper';
import GlobalContextWrapper from './GlobalContextWrapper';

function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <ThemeWrapper>
          <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={2000}>
            <GlobalContextWrapper>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </GlobalContextWrapper>
          </SnackbarProvider>
        </ThemeWrapper>
      </AuthWrapper>
    </Provider>
  );
}

Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
