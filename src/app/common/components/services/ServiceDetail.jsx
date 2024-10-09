'use client';

import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Box, Divider, Grid, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import moment from 'moment';

// STYLES & ASSETS
import { border, primary } from '@/styles/common/colors';
import dummyImage from '@/assets/images/dummyImage.png';

// COMPONENTS & UTILITIES
import SectionLoader from '@/app/common/loaders/SectionLoader';
import ServiceDetailHeader from './ServiceDetailHeader';
import { weekSlots } from '@/utilities/common';

function ServiceDetail({ serviceData = {}, isPortal = false }) {
  if (!serviceData?.service_slug) return <SectionLoader backgroundColor="transparent" />;

  const formattedTimeSlots = `${moment(serviceData?.availability_start_time, 'HH:mm:ss').format('hh:mm A')} - ${moment(serviceData?.availability_end_time, 'HH:mm:ss').format('hh:mm A')}`;
  return (
    <Box className=" mt-5">
      <ServiceDetailHeader
        name={serviceData?.name}
        price={serviceData?.price}
        slug={serviceData?.service_slug}
        isPortal={isPortal}
        serviceId={serviceData?.id}
        status={serviceData?.service_status}
        supplierId={serviceData?.supplier}
      />

      <Divider sx={{ borderColor: border, marginTop: '15px', marginBottom: '30px' }} />

      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Typography color={primary} variant="h6" className="font-medium mb-4">
            Description
          </Typography>
          <Typography>{serviceData?.description}</Typography>
          <Box className="mt-7 overflow-hidden">
            <Typography color={primary} variant="h6" className="font-medium mb-4">
              Time Slots
            </Typography>
            {weekSlots[serviceData?.availability_days] &&
              weekSlots[serviceData?.availability_days].map(item => (
                <Grid mb={3} columnSpacing={15} container>
                  <Grid sx={{ borderBottom: '1px solid', borderBottomColor: border }} className="font-medium" xs={6} item>
                    {item}
                  </Grid>
                  <Grid sx={{ borderBottom: '1px solid', borderBottomColor: border }} className="font-medium" item>
                    {formattedTimeSlots}
                  </Grid>
                </Grid>
              ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className=" flex justify-center items-center">
            <Image
              src={serviceData?.image || dummyImage.src}
              alt="Service Image"
              className=" rounded-xl"
              width={500}
              height={500}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color={primary} variant="h6" className="font-medium mb-4">
            Reviews
          </Typography>
          <Box sx={{ borderRadius: '10px' }}>
            {serviceData?.service_feedback?.length > 0 ? (
              <Box>
                {serviceData?.service_feedback?.map(item => (
                  <Box className="my-4">
                    <Box className=" flex justify-between items-center mb-3">
                      <Box className="flex items-center justify-start">
                        <Avatar src={item?.client_image} sx={{ width: 40, height: 40 }} />
                        <Typography variant="body2" className=" px-2 font-semibold capitalize">
                          {item?.client_username}
                        </Typography>
                      </Box>
                      <Box className=" flex items-center gap-2">
                        <Rating name="read-only" size="small" value={item?.rating} readOnly />
                        <Typography className=" font-medium" variant="body2">
                          {item?.rating}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography>{item?.description}</Typography>
                    <Divider sx={{ borderColor: border, marginTop: '16px' }} />
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography className=" text-center font-medium my-4">No Review Found</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

ServiceDetail.propTypes = {
  serviceData: PropTypes.object,
  isPortal: PropTypes.bool,
};

export default ServiceDetail;
