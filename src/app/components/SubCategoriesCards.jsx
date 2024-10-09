import { Box } from '@mui/material';
import React from 'react';
import SubCategoriesCard from './SubCategoriesCard';

function SubCategoriesCards() {
  return (
    <Box className="-mx-1 flex flex-wrap gap-y-2 sm:-mx-2 lg:-mx-4">
      <SubCategoriesCard />
      <SubCategoriesCard />
      <SubCategoriesCard />
      <SubCategoriesCard />
    </Box>
  );
}

export default SubCategoriesCards;
