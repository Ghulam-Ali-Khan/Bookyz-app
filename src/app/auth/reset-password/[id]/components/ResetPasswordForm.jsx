'use client';

import { Box, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import FormikField from '@/shared/components/form/login/FormikField';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { useResetPasswordMutation } from '@/services/public/auth';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

function ResetPasswordForm({ token }) {
  const router = useRouter();
  const [reset, { error, isSuccess }] = useResetPasswordMutation();
  useHandleApiResponse(error, isSuccess, 'Logged In Successfully!');
  return (
    <Formik
      initialValues={{ password: '', confirmPassword: '' }}
      validationSchema={yup.object({
        password: yup
          .string()
          .required('Required')
          .min(8, 'Password must contain 8 character')
          .test(
            'isValidPass',
            'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number or special',
            value => {
              const hasUpperCase = /[A-Z]/.test(value);
              const hasLowerCase = /[a-z]/.test(value);
              const hasNumberSymbole = /[0-9]/.test(value) || /[!@#%&]/.test(value);
              if (hasUpperCase && hasLowerCase && hasNumberSymbole) {
                return true;
              }
              return false;
            }
          ),
        confirmPassword: yup
          .string()
          .required('Required')
          .oneOf([yup.ref('password'), null], 'Passwords must match'),
      })}
      onSubmit={async values => {
        const resetResp = await reset({ ...values, token });
        if (!resetResp?.error) {
          router.push('/auth/signin', { scroll: false });
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className=" flex flex-col items-center justify-center w-full gap-2 px-6 sm:px-0">
          <Grid justifyContent="center" alignItems="center" columnSpacing={2} rowGap={2} container>
            <Grid item xs={12}>
              <FormikField type="password" name="password" placeholder="New password" />
            </Grid>
            <Grid item xs={12}>
              <FormikField type="password" name="confirmPassword" placeholder="Confirm password" />
            </Grid>
            <Grid className="mt-3" item xs={12}>
              <Typography className=" font-semibold">Passward should be:</Typography>
              <Typography>- Atleast 8 characters long</Typography>
              <Typography>- Should have atleast one upper case letter</Typography>
              <Typography>- Should have atleast one lowercase letter</Typography>
              <Typography>- Should have atleast a Number or a special Character</Typography>
            </Grid>
            <Grid item>
              <SubmitBtn label="Confirm Password" className="my-3" isLoading={isSubmitting} />
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
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

ResetPasswordForm.propTypes = {
  token: PropTypes.object,
};

export default ResetPasswordForm;
