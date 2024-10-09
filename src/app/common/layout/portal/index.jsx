import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import { getBoxWrapperStyles, getSidebarWrapperStyles } from '@/styles/mui/containers/layout/layout-styles';
import Topbar from './components/Topbar';

function PrivateLayoutWrapper({ children }) {
  // const isSmallDevice = useMediaQuery('@media screen and (max-width: 768px)');

  // const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

  // const toggleSidebarCollapse = () => {
  //   setSidebarCollapsed(!isSidebarCollapsed);
  // };

  // useEffect(() => {
  //   if (!isSmallDevice) {
  //     setSidebarCollapsed(false);
  //   } else {
  //     setSidebarCollapsed(true);
  //   }
  // }, [isSmallDevice]);

  // CONSTANTS
  const drawerWidth = '200px';
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Box className=" relative">
        <Topbar isPortal />

        <Box sx={getSidebarWrapperStyles(true, drawerWidth)}>
          <Sidebar collapse />
        </Box>
      </Box>

      <Box sx={getBoxWrapperStyles(true, drawerWidth)}>{children}</Box>
    </Box>
  );
}

PrivateLayoutWrapper.propTypes = {
  children: PropTypes.node,
};

export default PrivateLayoutWrapper;
