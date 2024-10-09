import React, { useState } from 'react';
import { Box, ListItemButton, Tooltip, useMediaQuery } from '@mui/material';
import propTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from '@mui/icons-material';

// STYLES
import { getListItemBtnStyles, listItemMenuArrowStyles } from '@/styles/mui/containers/layout/layout-styles';

function SidebarLink({ title, onClick = () => {}, path = undefined, icon = null, isMenu = false }) {
  const isSmallDevice = useMediaQuery('@media screen and (max-width: 768px)');
  const currentPath = usePathname();
  const isActivePath = path === currentPath || currentPath === '';

  const [isHovering, setHovering] = useState(false);

  return (
    <Tooltip title={title} placement="right">
      <Box component={isMenu ? undefined : Link} href={path} className={!isMenu && 'clear-navlink'}>
        <ListItemButton
          onClick={onClick}
          onMouseLeave={isMenu ? () => setHovering(false) : undefined}
          onMouseOver={isMenu ? () => setHovering(true) : undefined}
          sx={getListItemBtnStyles(isActivePath)}
        >
          <Box className=" flex flex-col md:flex-row items-center justify-center gap-1 w-full">
            <Box width="25px" height="25px">
              {icon}
            </Box>

            {/* <Typography variant="body1" pl={1} className="wrapText">
              {title}
            </Typography> */}
          </Box>
          {isMenu && isHovering && !isSmallDevice && (
          <ArrowRight
            sx={listItemMenuArrowStyles}
          />
          )}
        </ListItemButton>
      </Box>
    </Tooltip>
  );
}

SidebarLink.propTypes = {
  title: propTypes.string.isRequired,
  onClick: propTypes.func,
  path: propTypes.string,
  icon: propTypes.element,
  isMenu: propTypes.bool,
};

export default SidebarLink;
