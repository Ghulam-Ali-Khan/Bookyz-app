'use client';

import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { primary } from '@/styles/common/colors';
import { useForgotPasswordMutation } from '@/services/public/auth';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import logo from '@/assets/Booklyz.svg';

function VerifyEmail() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [forgot, { error, isSuccess }] = useForgotPasswordMutation();
  useHandleApiResponse(error, isSuccess, 'Logged In Successfully!');

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = async () => {
    await forgot({ email });
  };

  return (
    <Box className=" h-screen w-full flex justify-center items-center">
      <Stack justifyContent="center" alignItems="center" gap={3}>
        <Image src={logo.src} alt="Logo" width={150} height={150} />
        <Typography variant="h6" className="my-2 text-center">
          Verify Your Email
        </Typography>
        <Typography variant="body1" className="my-2 text-gray-600 text-center">
          We have sent an email to please follow a link to verify your email
        </Typography>
        <Typography variant="body1" className="my-2 text-gray-600 text-center">
          Have not received email yet?
          {!!timer && <span className={`ml-2 font-bold text-[${primary}]`}>{timer}</span>}
        </Typography>
        <SubmitBtn onClick={handleResend} isDisabled={!!timer} label="Resend Email" />
      </Stack>
    </Box>
  );
}

export default VerifyEmail;
