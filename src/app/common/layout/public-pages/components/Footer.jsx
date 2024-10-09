/* eslint-disable no-unused-vars */

'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';

// Styles
import { Apple, Shop } from '@mui/icons-material';
import styles from '@/styles/containers/layout/footer.module.scss';
import { footerDividerStyles, footerLinksStyles } from '@/styles/mui/containers/layout/footer-styles';
import { footerContainerStyles } from '@/styles/mui/components/footer-top-sections-styles';
import logo from '@/assets/Booklyz.svg';
import GooglePlay from '@/assets/GooglePlay.svg';
import AppStore from '@/assets/AppStore.svg';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { border } from '@/styles/common/colors';
import NewsLetter from './NewsLetter';

function Footer({ footerText = '', footerBgColor = '', textColor = '', btnBg = '', btnText = '' }) {
  const { isSupplier } = useGetUserRoles();
  const dateObject = new Date();
  const currentYear = dateObject.getFullYear();

  return (
    <Box sx={footerContainerStyles} className={styles.footerBox}>
      {/* FOOTER MAIN BODY LINKS */}
      <Box className="flex justify-center">
        <Grid container className={styles.footerMain} justifyContent="center" gap={10} sx={footerLinksStyles}>
          <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
            <Image src={logo?.src} alt="Logo" width={150} height={150} />
            <Typography variant="body1" color="GrayText" className="mt-2 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4} md={4} lg={3} xl={1.5}>
            <Typography variant="h6" color="primary" className="my-2 font-bold">
              Company
            </Typography>
            <Link href="/" className="text-decoration-none">
              <Typography variant="body1" className="mb-2 footer-link-item">
                Home
              </Typography>
            </Link>
            <Link href="/about" className="text-decoration-none">
              <Typography variant="body1" className="mb-2 footer-link-item">
                About
              </Typography>
            </Link>
            <Link
              href={isSupplier ? '/portal/supplier/services' : '/services'}
              className="text-decoration-none"
            >
              <Typography variant="body1" className="mb-2 footer-link-item">
                {isSupplier ? 'Services' : 'Find Services'}
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={6} sm={4} md={4} lg={3} xl={1.5}>
            <Typography variant="h6" color="primary" className="mb-3 font-bold">
              Know More
            </Typography>
            <Link href="/contact-us" className="text-decoration-none">
              <Typography variant="body1" className="mb-2 footer-link-item">
                Contact Us
              </Typography>
            </Link>
            <Link href="/contact-us" className="text-decoration-none">
              <Typography variant="body1" className="mb-2 footer-link-item">
                Privacy Policy
              </Typography>
            </Link>
            <Link href="/contact-us" className="text-decoration-none">
              <Typography variant="body1" className="mb-2 footer-link-item">
                Terms of Services
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
            <Typography variant="h6" color="primary" className="mb-3 font-bold">
              Newsletter
            </Typography>
            <NewsLetter />
            <Box className=" flex items-center gap-4 flex-wrap">
              <Image src={GooglePlay?.src} alt="GooglePlay" width={120} height={50} />
              <Image src={AppStore?.src} alt="AppStore" width={120} height={50} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={footerDividerStyles}>
        <Divider sx={{ borderColor: border, borderWidth: '1px' }} />
      </Box>

      {/* BOTTOM FOOTER */}
      <Box className="d-flex justify-content-center">
        <Grid
          container
          justifyContent="center"
          py="25px"
          className={`${styles.footerResponsiveLayout} container-max-width`}
        >
          <Grid item className="flex gap-2 items-center">
            <Typography color="GrayText" variant="body1">
              © {currentYear} Booklyz All Rights Received
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

Footer.propTypes = {
  footerText: PropTypes.string,
  footerBgColor: PropTypes.string,
  textColor: PropTypes.string,
  btnBg: PropTypes.string,
  btnText: PropTypes.string,
};

export default Footer;
