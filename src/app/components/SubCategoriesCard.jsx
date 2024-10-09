import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import image from '@/assets/category-img.webp';
import { dark, secondary } from '@/styles/common/colors';

function SubCategoriesCard() {
  return (
    <Box className=" h-full w-full p-1 sm:p-2 lg:p-4 basis-full sm:basis-1/2 md:basis-1/3 cursor-pointer">
      <Box className="group relative">
        <Image src={image} alt="Category Img" width={348} height={192} className=" rounded-md" />
        <Box
          sx={{ backgroundColor: dark }}
          className=" absolute left-0 top-0 z-10 hidden h-full w-full flex-col justify-start gap-2 rounded-md bg-opacity-90 p-4 text-white group-hover:flex"
        >
          <Typography
            variant="body1"
            fontWeight={600}
            className="flex-shrink overflow-hidden overflow-ellipsis text-sm text-white"
          >
            Book a thai massage, foot massage or lymph massage. You can also make an appointment with a
            physical therapist.
          </Typography>
          <Typography
            variant="body1"
            fontWeight={600}
            color={secondary}
            className=" flex-shrink-0 flex-grow-0"
          >
            Book treatment here!
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" fontWeight={500} className=" mt-2">
        Nails
      </Typography>
    </Box>
  );
}

export default SubCategoriesCard;
