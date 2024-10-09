import React, { useCallback } from 'react';
import propTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { KeyboardArrowDown } from '@mui/icons-material';
import styles from '@/styles/containers/layout/navbar.module.scss';

function NavLinkItem({ label, path = '/', navClassName = '', toggle = () => {}, menu }) {
  const currentPath = usePathname();
  const isActive = path === currentPath;

  const getNavLinkClassName = useCallback(() => {
    if (isActive) {
      return `${styles.activeNavLinkLight}`;
    }
    return `${styles.navbarNavItemLight}`;
  }, [currentPath]);

  return (
    <Box
      onClick={menu && toggle}
      className={`${navClassName || getNavLinkClassName()} flex items-center gap-1 mx-2 cursor-pointer`}
    >
      <Typography variant="body1">{!menu ? <Link href={path}>{label}</Link> : label}</Typography>
      {menu && <KeyboardArrowDown />}
    </Box>
  );
}

NavLinkItem.propTypes = {
  path: propTypes.string,
  label: propTypes.string.isRequired,
  navClassName: propTypes.string,
  menu: propTypes.bool,
  toggle: propTypes.func,
};

export default NavLinkItem;
