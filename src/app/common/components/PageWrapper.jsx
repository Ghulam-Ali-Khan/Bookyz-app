'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import HeroSection from '@/shared/components/HeroSection';
import { primary } from '@/styles/common/colors';
import useGetUserRoles from '@/customHooks/useGetUserRoles';

function PageWrapper({ heading, Description, imageSrc, bgColor, children, showButton }) {
  const { isSupplier } = useGetUserRoles();
  return (
    <>
      <HeroSection
        heading={heading}
        Description={Description}
        buttons={[
          {
            text: 'Become a client',
            link: '/auth/signup',
            show: showButton,
            color: primary,
          },
          {
            text: 'Become a Supplier',
            link: '/auth/signup',
            show: showButton,
            color: 'success',
          },
          {
            text: isSupplier ? 'Services' : 'Find Services',
            link: isSupplier ? 'portal/supplier/services' : '/services',
            show: showButton,
            color: 'success',
            authenticated: true
          },
        ]}
        imageSrc={imageSrc}
        bgColor={bgColor}
      />

      <Container variant="public" sx={{ minHeight: '700px', marginTop: '20px' }}>{children}</Container>

    </>
  );
}
PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
};
export default PageWrapper;
