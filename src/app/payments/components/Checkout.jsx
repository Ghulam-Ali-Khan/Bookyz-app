'use client';

import { useSnackbar } from 'notistack';
import React from 'react';
import PropTypes from 'prop-types';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Avatar, Box, Card, CardContent, Stack, Typography } from '@mui/material';
import SectionLoader from '@/app/common/loaders/SectionLoader';
import { formatAmount } from '@/utilities/helpers';
import { useSendPaymentStatusMutation } from '@/services/private/paypal';

const cardHeadingFont = { fontSize: 16 };
const planSummaryStyleBox = { justifyContent: 'space-between' };
const paymentCardHeadingStyle = { fontSize: 16, fontWeight: 600 };
function Checkout({ plan }) {
  const { enqueueSnackbar } = useSnackbar();

  const [{ isPending }] = usePayPalScriptReducer();

  const [sendPaymentStatus] = useSendPaymentStatusMutation();

  // const handleCreateSubscription = async (_, actions) => {
  //   const subscription = await actions.subscription.create({ plan_id: plan?.planId });
  //   return subscription;
  // };

  const handleOnApprove = async (data, actions) => {
    try {
      await actions.order.capture();
      // CHECKING CHECKOUT TYPES
      const payload = {
        payment_id: data.paymentID,
        payment_type: 'subscription',
        subscription_plan_id: plan.planId,
      };
      const response = await sendPaymentStatus(payload);
      if (response?.error) {
        enqueueSnackbar(response?.error?.data?.error || 'Somthing Went Wrong', { variant: 'error' });
        return;
      }
      enqueueSnackbar(response?.data?.message || 'Payment Made', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error || 'Somthing Went Wrong', { variant: 'error' });
    }
  };
  const handleCreatePaypalOrder = async (data, actions) => {
    const createOrder = await actions.order.create({
      purchase_units: [
        {
          amount: {
            value: plan.newPrice,
            currency_code: 'USD',
          },
        },
      ],

      intent: 'CAPTURE',
    });

    return createOrder;
  };
  return isPending ? (
    <SectionLoader />
  ) : (
    <Card>
      <CardContent>
        <Stack sx={{ width: 400, maxHeight: 500, justifyContent: 'space-between' }}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ fontSize: 18, fontWeight: 700 }}>Order Summary</Typography>

            <Stack direction="row" alignItems="center" spacing={2} sx={{ marginTop: 3 }}>
              <Avatar src="" />
              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>hssdev8907@gmail.com</Typography>
            </Stack>
            <Stack direction="row" sx={{ ...planSummaryStyleBox, marginTop: 2 }}>
              <Typography sx={paymentCardHeadingStyle}>{plan?.title}</Typography>
              <Typography sx={paymentCardHeadingStyle}>$ {formatAmount(Number(plan?.newPrice))}</Typography>
            </Stack>
            <Stack direction="row" sx={{ ...planSummaryStyleBox, marginBottom: 2 }}>
              <Typography sx={cardHeadingFont}>Duration Time</Typography>
              <Typography sx={paymentCardHeadingStyle}>{plan?.duration}</Typography>
            </Stack>
            <Box sx={{ height: '1px', backgroundColor: 'silver' }} />

            <Stack direction="row" sx={{ ...planSummaryStyleBox, marginTop: 3 }}>
              <Typography sx={cardHeadingFont}>SubTotal</Typography>
              <Typography sx={paymentCardHeadingStyle}>$ {formatAmount(Number(plan?.newPrice))}</Typography>
            </Stack>
            <Stack direction="row" sx={{ ...planSummaryStyleBox, marginBottom: 2 }}>
              <Typography sx={cardHeadingFont}>Service Fee</Typography>
              <Typography sx={paymentCardHeadingStyle}>$ {formatAmount(0)}</Typography>
            </Stack>

            <Box sx={{ height: '1px', backgroundColor: 'silver' }} />

            <Stack direction="row" sx={{ ...planSummaryStyleBox, marginTop: 2, marginBottom: 2 }}>
              <Typography sx={paymentCardHeadingStyle}>Total</Typography>
              <Typography sx={paymentCardHeadingStyle}>$ {formatAmount(Number(plan?.newPrice))}</Typography>
            </Stack>
            <Box sx={{ height: '1px', backgroundColor: 'silver' }} />
          </Box>
          <PayPalButtons
            fundingSource="paypal"
            style={{ height: 55 }}
            onCancel={() => {}}
            onError={() => {}}
            // createSubscription={handleCreateSubscription}
            createOrder={handleCreatePaypalOrder}
            onApprove={handleOnApprove}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

Checkout.propTypes = {
  plan: PropTypes.object.isRequired,
};

export default Checkout;
