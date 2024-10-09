'use client';

import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { useVerifyTokenMutation } from '@/services/public/auth';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import logo from '@/assets/Booklyz.svg';

function AccountVerified({ params: { id } }) {
  const router = useRouter();
  const [verify, { error, isSuccess }] = useVerifyTokenMutation();
  useHandleApiResponse(error, isSuccess, 'Verified Successfully!');

  const handleVerify = async () => {
    const resp = await verify(id);
    if (!resp?.error) {
      router.push('/payments/payment-plans', { scroll: false });
    }
  };
  return (
    <Box className=" h-screen w-full flex justify-center items-center">
      <Stack justifyContent="center" alignItems="center" gap={3}>
        <Image src={logo.src} alt="Logo" width={150} height={150} />
        <Typography variant="h6" className="my-2 text-center">
          You will need to activate your account for complete registration!
        </Typography>
        <SubmitBtn onClick={handleVerify} label="Continue" />
      </Stack>
    </Box>
  );
}

AccountVerified.propTypes = {
  params: PropTypes.object,
};

export default AccountVerified;
