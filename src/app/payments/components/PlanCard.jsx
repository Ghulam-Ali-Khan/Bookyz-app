/* eslint-disable max-len */

import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Check, Close } from '@mui/icons-material';
import Link from 'next/link';
// import Image from 'next/image';

function PlanCard({ plan, xs, sm, md, lg }) {
  return (
    <Grid item key={plan.title} xs={xs} sm={sm} md={md} lg={lg}>
      <Box className="px-4 py-16 w-full lg:py-20">
        <Box className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
          <Box className="mb-6">
            <Box className="flex items-center justify-between pb-6 mb-6 border-b">
              <Box>
                <Typography className="text-sm font-bold tracking-wider uppercase">{plan?.title}</Typography>
                <Typography variant="h2">${plan?.newPrice}</Typography>
              </Box>
              <Box className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50">
                {plan?.icon}
              </Box>
            </Box>
            <Box>
              <Typography className="mb-2 font-bold tracking-wide">Features</Typography>
              <Stack gap={2}>
                {plan.planOptions?.map(option => (
                  <Stack key={`${plan.planId}${option.label}`} direction="row" gap={2} alignItems="center">
                    {option.status ? (
                      <Box className="mr-2 border border-green-500 rounded-full h-6 w-6 flex justify-center items-center">
                        <Check fontSize="small" style={{ color: '#22c55e' }} />
                      </Box>
                    ) : (
                      <Box className="mr-2 border border-red-500 rounded-full h-6 w-6 flex justify-center items-center">
                        <Close fontSize="small" style={{ color: '#ef4444' }} />
                      </Box>
                    )}
                    <Typography className="font-medium text-gray-800">{option.label}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
          <Box>
            <Link
              href={`/payments/checkout?plan_id=${plan.planId}`}
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </Link>
            <Typography variant="body2" className=" text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.object.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};
PlanCard.defaultProps = {
  xs: 12,
  sm: 12,
  md: 8,
  lg: 4,
};

export default PlanCard;
