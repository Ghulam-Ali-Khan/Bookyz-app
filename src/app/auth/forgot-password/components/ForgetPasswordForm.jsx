/* eslint-disable react/no-unescaped-entities */

'use client';

/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import FormikField from '@/shared/components/form/login/FormikField';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { useForgotPasswordMutation } from '@/services/public/auth';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

function ForgetPasswordForm() {
  const router = useRouter();
  const [forgot, { error, isSuccess }] = useForgotPasswordMutation();
  useHandleApiResponse(error, isSuccess, 'Logged In Successfully!');
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={yup.object({
        email: yup.string().trim().email('Invalid Email').required('Required'),
      })}
      onSubmit={async values => {
        const resetResp = await forgot({ email: values?.email?.toLowerCase() });
        if (!resetResp?.error) {
          router.push(`/auth/verify-email?email=${values?.email?.toLowerCase()}`, { scroll: false });
        }
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className=" flex flex-col items-center justify-center w-full gap-2 px-6 sm:px-0">
          <Grid justifyContent="center" alignItems="center" columnSpacing={2} rowGap={2} container>
            <Grid item xs={12}>
              <FormikField type="text" name="email" placeholder="Type your email" />
            </Grid>

            <Grid item xs={12}>
              <Box className=" flex flex-col items-center">
                <Typography
                  className="flex mb-1"
                  sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
                >
                  Don't have an account?{' '}
                  <Link href="/auth/signup" className="text-blue-600 mx-2 mb-0 underline">
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <SubmitBtn label="Recover Password" className="my-3" isLoading={isSubmitting} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default ForgetPasswordForm;
