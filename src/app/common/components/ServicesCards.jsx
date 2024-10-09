'use client';

import { Box, Card, Grid, Pagination, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// API & HOOKS
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { useGetServiceQuery } from '@/services/private/services';

// ASSETS
import dummyImage from '@/assets/images/dummyImage.png';

// COMPONENTS
import ServicesCard from './ServicesCard';
import SectionLoader from '../loaders/SectionLoader';

function ServicesCards({ search, isPortal }) {
  const { isSupplier } = useGetUserRoles();
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useGetServiceQuery(
    { search, offset: (page - 1) * rowsPerPage, page: page + 1, limit: rowsPerPage },
    {
      skip: search && isSupplier,
      refetchOnMountOrArgChange: true,
    }
  );

  const handleChangePagination = newPage => {
    setPage(newPage);
  };

  const loading = isLoading || isFetching;

  return (
    <Box>
      {loading && <SectionLoader />}
      {!loading && data?.results?.length > 0 && (
        <Grid container spacing={3}>
          {data?.results?.map(service => (
            <Grid key={service.id} item xs={12} md={6} lg={4}>
              <ServicesCard
                slug={service?.service_slug}
                status={service?.service_status}
                title={service?.name}
                image={service?.image || dummyImage.src}
                name={service?.supplier_username}
                profileImage={service?.supplier_image}
                price={service?.price}
                rating={service?.rating}
                reviews={service?.service_feedback?.length}
                isPortal={isPortal}
              />
            </Grid>
          ))}
        </Grid>
      )}
      {!loading && data?.results?.length === 0 && (
        <Card p={2} sx={{ height: '30vh' }} className=" w-full flex justify-center items-center">
          <Typography variant="body1">No Record Found!</Typography>
        </Card>
      )}
      <Box className=" flex items-center justify-end" py="29px">
        <Pagination
          color="primary"
          shape="rounded"
          count={data ? Math.ceil(data.count / rowsPerPage) : 1}
          page={page}
          onChange={(e, newPage) => handleChangePagination(newPage)}
        />
      </Box>
    </Box>
  );
}

ServicesCards.propTypes = {
  search: PropTypes.object,
  isPortal: PropTypes.bool,
};

export default ServicesCards;
