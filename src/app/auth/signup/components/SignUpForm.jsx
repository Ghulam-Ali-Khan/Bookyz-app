'use client';

import { Box, Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

// API & CUSTOM HOOKS
import { useSignUpMutation } from '@/services/public/auth';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

// COMPONENTS
import FormikField from '@/shared/components/form/login/FormikField';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { initialValues, validationSchema } from '../utilities/formUtils';

function SignUpForm() {
  const router = useRouter();
  const [signUp, { error, isSuccess }] = useSignUpMutation();
  useHandleApiResponse(error, isSuccess, 'The account activation link has been sent to your email');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setErrors }) => {
        const signupResp = await signUp(values);
        if ('error' in signupResp) {
          const fieldErrors = {};
          Object.keys(signupResp.error.data).forEach(key => {
            const [fieldError] = signupResp.error.data[key] || []; // Handle potential undefined values

            if (fieldError) {
              fieldErrors[key] = fieldError;
            }
          });
          setErrors(fieldErrors);
        } else {
          router.push('/auth/signin', { scroll: false });
          resetForm(values);
        }
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className=" flex flex-col items-center justify-center w-full gap-2 px-6 sm:px-0">
          <Grid justifyContent="center" alignItems="center" columnSpacing={2} rowGap={2} container>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="first_name" placeholder="First Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="last_name" placeholder="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <FormikField type="text" name="username" placeholder="Type your username" />
            </Grid>
            <Grid item xs={12}>
              <FormikField type="text" name="email" placeholder="Type your email" />
            </Grid>
            <Grid item>
              <ToggleButtonGroup
                color="primary"
                value={values.user_type}
                exclusive
                onChange={(_, val) => setFieldValue('user_type', val)}
              >
                <ToggleButton size="small" value="client">Become a Client</ToggleButton>
                <ToggleButton size="small" value="owner">Become a Owner</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <FormikField type="password" name="password" placeholder="Type your password" />
            </Grid>
            <Grid item xs={12}>
              <FormikField type="password" name="confirmPassword" placeholder="Confirm password" />
            </Grid>
            <Grid item xs={12}>
              <Box className=" flex flex-col items-center">
                <Typography
                  sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
                  className="flex mb-1"
                >
                  Already have an Account?{' '}
                  <Link href="/auth/signin" className=" text-blue-600 mx-2 mb-0 underline">
                    Sign in
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <SubmitBtn label="Create Account" isLoading={isSubmitting} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
