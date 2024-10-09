import React from 'react';
import propTypes from 'prop-types';
import { Fade, Menu, MenuList } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { NestedMenuItem } from 'mui-nested-menu';
import { topbarMenuStyles } from '@/styles/mui/containers/layout/layout-styles';
import { useGetCategoriesQuery } from '@/services/private/categories';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import useGetMenuHandlers from '@/customHooks/useGetMenuHandlers';
import SubCategoryMenuItem from '../../common/SubCategoryMenuItem';

function CategoryMenu({ anchor = null, toggle }) {
  const { isSupplier } = useGetUserRoles();

  const { data: categories } = useGetCategoriesQuery({}, { skip: isSupplier });

  const [subCategoryMenu, handleOpenSubCategoryMenu, handleCloseSubCategoryMenu] = useGetMenuHandlers();

  return (
    <Menu
      key={anchor}
      sx={topbarMenuStyles}
      anchorEl={anchor}
      open={!!anchor}
      onClose={toggle}
      TransitionComponent={Fade}
      disablePortal
      disableScrollLock
    >
      <MenuList sx={{ outline: 'none', border: 'none' }} disablePadding>
        {categories?.results?.map(item => (
          <NestedMenuItem
            key={item.id}
            rightIcon={<KeyboardArrowRight />}
            label={item?.name}
            parentMenuOpen={anchor}
          >
            <SubCategoryMenuItem
              categoryId={item.id}
              anchor={subCategoryMenu}
              enterFunc={handleOpenSubCategoryMenu}
              toggle={handleCloseSubCategoryMenu}
              categoryToggle={toggle}
            />
          </NestedMenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

CategoryMenu.propTypes = {
  anchor: propTypes.object,
  toggle: propTypes.func.isRequired,
};

export default CategoryMenu;
