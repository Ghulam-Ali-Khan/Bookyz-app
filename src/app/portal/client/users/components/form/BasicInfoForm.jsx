/* eslint-disable no-unused-vars */

'use client';

import React, { useEffect, useState } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { Remove } from '@mui/icons-material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import FormikField from '@/shared/components/form/FormikField';
import FormikSelect from '@/shared/components/form/FormikSelect';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { border } from '@/styles/common/colors';
import FormikTimePicker from '@/shared/components/form/FormikTimePicker';
import FormikDropZone from '@/shared/components/form/FormikDropZone';
import useUserContext from '@/customHooks/useUserContext';
import { basicInfoFormInitVals, basicInfoFormValSchema } from '../../utilities/formUtils';

function BasicInfoForm() {
  const { setActiveStep, setUserData, userData, callingCodeOptions } = useUserContext();
  const [initValues, setInitValues] = useState(basicInfoFormInitVals);
  // API HOOKS

  useEffect(() => {
    if (userData) {
      setInitValues(prevState => ({ ...prevState, ...userData }));
    }
  }, [userData]);

  return (
    <Box sx={{ borderRadius: '10px' }} className="bg-white p-8">
      <Formik
        enableReinitialize
        initialValues={initValues}
        validationSchema={basicInfoFormValSchema}
        onSubmit={async values => {
          setUserData(prevState => ({ ...prevState, ...values }));
          setActiveStep(prevState => prevState + 1);
          window.scrollTo(0, 0);
        }}
      >
        {({ isSubmitting, values, resetForm }) => (
          <Form>
            <Grid2 spacing={4} container>
              <Grid2 container spacing={4} xs={12} md={6}>
                <Grid2 xs={12}>
                  <FormikField
                    name="first_name"
                    label="First Name"
                    isRequired
                    type="text"
                    placeholder="Service Title"
                    isStack
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikField
                    name="sur_name"
                    label="Sur Name"
                    isRequired
                    type="text"
                    placeholder="Service Title"
                    isStack
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikField
                    name="nick_name"
                    label="Nick Name"
                    isRequired
                    type="text"
                    placeholder="Service Title"
                    isStack
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikField
                    name="signature"
                    label="Signature"
                    isRequired
                    type="text"
                    placeholder="Signature"
                    isStack
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikField
                    name="social_security_number"
                    label="Social Security Number"
                    isRequired
                    type="text"
                    placeholder="Social Security Number"
                    isStack
                  />
                </Grid2>
              </Grid2>
              <Grid2 spacing={4} container xs={12}>
                <Grid2 container spacing={0} xs={12} md={6}>
                  <Grid2 xs={4} sm={3}>
                    <FormikSelect
                      label="Code"
                      name="country_code"
                      className=" rounded-e-none"
                      isStack
                      isRequired
                      options={callingCodeOptions}
                    />
                  </Grid2>

                  <Grid2 xs={8} sm={9}>
                    <FormikField label="Phone" name="phone" type="number" className=" rounded-s-none border-s-0" isStack isRequired />
                  </Grid2>
                </Grid2>
                <Grid2 xs={12} md={6}>
                  <FormikField
                    name="email"
                    label="Email address"
                    isRequired
                    type="text"
                    placeholder="Email address"
                    isStack
                  />
                </Grid2>
              </Grid2>
            </Grid2>
            <Box className="flex w-100 items-end justify-end" mt={3}>
              <SubmitBtn label="Next" isLoading={isSubmitting} className="rounded-3xl" />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default BasicInfoForm;
