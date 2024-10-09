/* eslint-disable no-unused-vars */

'use client';

import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import propTypes from 'prop-types';

// STYLES & IMAGES
import Link from 'next/link';
import styles from '@/styles/containers/layout/portal/login.module.scss';
import { contrastText, primary } from '@/styles/common/colors';
import logo from '@/assets/Booklyz.svg';
// import backgroundImage from '@/assets/authbg.png';
import backgroundImage from '@/assets/auth-banner2.jpg';

function AuthGridWrapper({ children, heading }) {
  const isSmallScreen = useMediaQuery('(max-width:1024px)');

  return (
    <Grid
      className=" flex justify-center items-center"
      sx={{ minHeight: '100vh', backgroundColor: 'white' }}
      container
    >
      {!isSmallScreen && (
        <Grid
          sx={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#e9e9e7',
            minHeight: '100vh',
            position: 'relative',
          }}
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          className=" flex justify-center items-center w-full"
        >
          {/* <Box className={styles.logoBox}>
            <Link href="/">
              <Image src={logo} alt="Logo" height={150} width={150} />
            </Link>
          </Box> */}
          {/* <Box sx={{ paddingX: '30px', width: '100%' }}>
            <Typography
              variant="h5"
              color={contrastText}
              textAlign="center"
              fontWeight={600}
              className="mb-6 text-center font-bold"
            >
              {heading}
            </Typography>
          </Box> */}
        </Grid>
      )}

      <Grid
        item
        xl={6}
        lg={isSmallScreen ? 12 : 6}
        md={12}
        sm={12}
        className=" flex justify-center items-center flex-col"
      >
        {children}
      </Grid>
    </Grid>
  );
}

AuthGridWrapper.propTypes = {
  children: propTypes.node.isRequired,
  heading: propTypes.string.isRequired,
};

export default AuthGridWrapper;
