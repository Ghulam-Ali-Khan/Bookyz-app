/* eslint-disable no-unused-vars */

'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
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
import { basicInfoFormInitVals, basicInfoFormValSchema, settingFormInitVals, settingFormValSchema } from '../../utilities/formUtils';
import { bookingInterval, rollsOptions } from '../../utilities/data';
import FormikRadioButtons from '@/shared/components/form/FormikRadioButton';
import FormikSwitch from '@/shared/components/form/FormikSwitch';
import FormikDatePicker from '@/shared/components/form/FormikDatePicker';
import FormikMultiSelect from '@/shared/components/form/FormikMultiSelect';

function SettingForm() {
  const { setActiveStep, setUserData, userData, callingCodeOptions } = useUserContext();
  const [initValues, setInitValues] = useState(settingFormInitVals);

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
        validationSchema={settingFormValSchema}
        onSubmit={async values => {
          setUserData(prevState => ({ ...prevState, ...values }));
          setActiveStep(prevState => prevState + 1);
          window.scrollTo(0, 0);
        }}
      >
        {({ isSubmitting, values, setFieldValue, resetForm }) => (
          <Form>
            <Grid2 spacing={4} container>
              <Grid2 container spacing={4} xs={12} md={6}>
                <Grid2 xs={12}>
                  <FormikSelect label="Role" name="designation" isStack isRequired options={rollsOptions} />
                </Grid2>
                <Grid2 xs={12}>
                  <Stack>
                    <Typography variant="label">Choose about student</Typography>
                    <FormControlLabel
                      label="Student"
                      name="is_student"
                      value={values.is_student}
                      onChange={(_, val) => setFieldValue('is_student', val)}
                      control={<Switch defaultChecked />}
                    />
                  </Stack>
                </Grid2>
                <Grid2 xs={12}>
                  <FormikMultiSelect
                    placeholder="Services"
                    name="services"
                    label="Services"
                    options={[]}
                    isRequired
                    isStack
                    isPortal
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikSelect
                    label="Price group"
                    name="price_group"
                    isStack
                    isRequired
                    options={rollsOptions}
                  />
                </Grid2>

                <Grid2 xs={12}>
                  <FormikDatePicker
                    label="Works from"
                    placeholder="Working From Now on"
                    name="work_from"
                    isStack
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="label">Clinic Envié, Sveagatan 1</Typography>
                    <FormControlLabel
                      value={values.is_onsite}
                      name="is_onsite"
                      onChange={(_, val) => setFieldValue('is_onsite', val)}
                      control={<Switch defaultChecked />}
                    />
                  </Stack>
                </Grid2>
                <Grid2 xs={12}>
                  <FormikSelect label="Business" name="onsite_address" isStack isRequired options={[]} />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikSelect
                    label="Booking interval (minutes)"
                    name="booking_interval_in_minutes"
                    options={bookingInterval}
                    isRequired
                    isStack
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormControlLabel
                    label="Online Booking Available"
                    name="online_booking_available"
                    value={values.online_booking_available}
                    onChange={(_, val) => setFieldValue('online_booking_available', val)}
                    control={<Switch defaultChecked />}
                  />
                </Grid2>
              </Grid2>
            </Grid2>
            <Box className="flex w-100 items-end justify-end gap-3" mt={3}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setActiveStep(0)}
                className=" rounded-3xl text-white"
              >
                Back
              </Button>
              <SubmitBtn label="Next" isLoading={isSubmitting} className="rounded-3xl" />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default SettingForm;
