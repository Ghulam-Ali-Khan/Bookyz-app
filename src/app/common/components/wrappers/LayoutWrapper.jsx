/* eslint-disable no-nested-ternary */

'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import PropTypes from 'prop-types';
import PublicLayoutWrapper from '../../layout/public-pages';
import PrivateLayoutWrapper from '../../layout/portal';

function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthRoute = pathname.includes('/auth');
  const isPortalRoute = pathname.includes('/portal');
  return isAuthRoute ? (
    children
  ) : !isPortalRoute ? (
    <PublicLayoutWrapper>{children}</PublicLayoutWrapper>
  ) : (
    <PrivateLayoutWrapper>{children}</PrivateLayoutWrapper>
  );
}

LayoutWrapper.propTypes = {
  children: PropTypes.node,
};

export default LayoutWrapper;
