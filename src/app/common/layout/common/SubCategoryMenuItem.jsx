import React from 'react';
import propTypes from 'prop-types';
import { ListItemText, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useGetSubCategoriesByidQuery } from '@/services/private/categories';
import useGetUserRoles from '@/customHooks/useGetUserRoles';

function SubCategoryMenuItem({ toggle, categoryToggle, categoryId }) {
  const { isSupplier } = useGetUserRoles();
  const { data: subCategories } = useGetSubCategoriesByidQuery(categoryId, {
    skip: isSupplier || !categoryId,
  });
  return subCategories?.results?.map(item => (
    <MenuItem
      component={Link}
      className="resetLink"
      href={`/services/subcatagory?sub_category=${item?.id}`}
      key={item.id}
      onClick={() => {
        toggle();
        categoryToggle();
      }}
    >
      <ListItemText>{item.name}</ListItemText>
    </MenuItem>
  ));
}

SubCategoryMenuItem.propTypes = {
  categoryId: propTypes.number.isRequired,
  toggle: propTypes.func.isRequired,
  categoryToggle: propTypes.func.isRequired,
};

export default SubCategoryMenuItem;
