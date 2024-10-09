import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, Rating, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { purple } from '@/styles/common/colors';
import { servicesCardStyles, servicesCoverImageStyles } from '@/styles/mui/components/services-styles';
import ServiceCardFooter from '@/app/common/components/services/ServiceCardFooter';

function ServicesCard({
  image = '',
  profileImage = '',
  name = '',
  title = '',
  rating = '',
  reviews = '',
  price = '',
  status = '',
  isPortal = false,
  slug = '',
}) {
  return (
    <Link href={isPortal ? `/portal/supplier/services/detail/${slug}` : `/services/detail/${slug}`}>
      <Card className=" group relative p-0 w-full mx-auto sm:mx-0" sx={() => servicesCardStyles(isPortal)}>
        <Box
          sx={{
            background: `url(${image}) center no-repeat`,
            ...servicesCoverImageStyles,
          }}
        />
        <Box className=" mt-5 p-0 pb-2">
          <Box className="px-3">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box className="flex items-center justify-start mb-3">
                <Avatar src={profileImage || ''} sx={{ width: 40, height: 40 }} />
                <Box className="px-2">
                  <Typography variant="body2" className=" font-semibold">
                    {name}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" className="font-bold">
                ${price}
              </Typography>
            </Stack>

            <Typography className="font-bold w-full" variant="body1" color={purple}>
              {title}
            </Typography>
          </Box>
          <Box className=" px-3 my-2 flex items-center gap-2">
            <Rating value={rating} readOnly />
            <Typography className=" font-medium" variant="body2">
              ({reviews} reviews)
            </Typography>
          </Box>
          {isPortal && <ServiceCardFooter serviceSlug={slug} status={status} isPortal={isPortal} />}
        </Box>
      </Card>
    </Link>
  );
}
ServicesCard.propTypes = {
  image: PropTypes.string,
  profileImage: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  reviews: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.string,
  status: PropTypes.string,
  isPortal: PropTypes.bool,
  slug: PropTypes.string,
};

export default ServicesCard;
