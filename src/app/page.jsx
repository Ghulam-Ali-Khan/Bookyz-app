import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import PageWrapper from './common/components/PageWrapper';
import { primary } from '@/styles/common/colors';
import image from '@/assets/home-banner.jpg';
import banner from '@/assets/home-section-banner.jpg';
import SubCategoriesCards from './components/SubCategoriesCards';

function Home() {
  return (
    <PageWrapper bgColor={primary} heading="Almost all of Sweden's salons" imageSrc={image.src} showButton>
      <Link href="/">
        <Image src={banner} alt="Logo" width={2934} height={861} />
      </Link>
      <Box className=" mt-12">
        <Typography variant="h4">Book beauty</Typography>
        <Typography variant="h6" fontWeight={500} className="mt-4">
          {'Sweden\'s'} salons and facilities within beauty, exercise & health. Book an appointment easily around
          the clock with more than 20,000 hairdressers, dermatologists, masseurs, nail therapists and much
          more.
        </Typography>
        <SubCategoriesCards />
      </Box>
    </PageWrapper>
  );
}

export default Home;
