'use client';

import React, { useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import { loadScript } from '@paypal/paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useSearchParams } from 'next/navigation';
import Checkout from '../components/Checkout';
import { plansList } from '../utilities/data';
// utilities and components

const initialValues = {
  'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  currency: 'USD',
  // intent: 'capture',
  // vault: true,
};
loadScript(initialValues)
  .then(() => {
    // console.log("Success")
  })
  .catch(() => {
    // console.log("Error")
  });

function PayPalPaymentPage() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan_id');

  const selectedPlan = useMemo(() => plansList.find(plan => plan.planId === planId), [planId]);
  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
      <PayPalScriptProvider options={initialValues}>
        <Stack direction="row">
          <Checkout plan={selectedPlan} />
        </Stack>
      </PayPalScriptProvider>
    </Box>
  );
}

export default PayPalPaymentPage;
