import React from 'react';
import propTypes from 'prop-types';
import { ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import styles from '@/styles/containers/layout/navbar.module.scss';

function DrawerListItem({
  label,
  className = ` ${styles.drawerLink}`,
  path = '/',
  handleClick = () => {},
}) {
  return (
    <ListItem className="px-0" onClick={handleClick}>
      <Typography className="mx-2 flex-grow" variant="body1">
        <Link href={path} className={`${className}`}>
          {label}
        </Link>
      </Typography>
    </ListItem>
  );
}

DrawerListItem.propTypes = {
  label: propTypes.string.isRequired,
  className: propTypes.string,
  path: propTypes.string,
  handleClick: propTypes.func,
};

export default DrawerListItem;
