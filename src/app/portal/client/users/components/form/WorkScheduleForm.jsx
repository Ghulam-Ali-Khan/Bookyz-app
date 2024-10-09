/* eslint-disable no-unused-vars */

'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { Remove } from '@mui/icons-material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useSnackbar } from 'notistack';
import FormikField from '@/shared/components/form/FormikField';
import FormikSelect from '@/shared/components/form/FormikSelect';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { border } from '@/styles/common/colors';
import FormikTimePicker from '@/shared/components/form/FormikTimePicker';
import FormikDropZone from '@/shared/components/form/FormikDropZone';
import useUserContext from '@/customHooks/useUserContext';
import {
  basicInfoFormInitVals,
  basicInfoFormValSchema,
  workScheduleFormInitVals,
} from '../../utilities/formUtils';
import { availabilityDaysOptions, bookingInterval, rollsOptions } from '../../utilities/data';
import FormikRadioButtons from '@/shared/components/form/FormikRadioButton';
import FormikSwitch from '@/shared/components/form/FormikSwitch';
import FormikDatePicker from '@/shared/components/form/FormikDatePicker';
import FormikMultiSelect from '@/shared/components/form/FormikMultiSelect';
import { useAddUserMutation } from '@/services/private/users';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

function WorkScheduleForm() {
  const {
    setActiveStep,
    setUserData,
    userData,
    callingCodeOptions,
    setError,
    error: stepError,
    toggleAddModal
  } = useUserContext();
  const { enqueueSnackbar } = useSnackbar();
  const [initValues, setInitValues] = useState(basicInfoFormInitVals);
  const [addUser, { error, isSuccess }] = useAddUserMutation();
  useHandleApiResponse(error, isSuccess, 'User added successfully!');

  useEffect(() => {
    if (userData) {
      setInitValues(prevState => ({ ...prevState, ...userData }));
    }
  }, [userData]);

  return (
    <Box sx={{ borderRadius: '10px' }} className="bg-white p-8">
      <Formik
        enableReinitialize
        initialValues={workScheduleFormInitVals}
        // validationSchema={basicInfoFormValSchema}
        onSubmit={async values => {
          const addUserResp = await addUser({
            ...userData,
            ...values,
          });
          setUserData({ ...userData, ...values });
          window.scrollTo(0, 0);

          if (addUserResp?.data) {
            if (stepError) {
              setError(false);
            }
            // setActiveStep(prevState => prevState + 1);
            toggleAddModal();
          }
        }}
      >
        {({ isSubmitting, values, setFieldValue, resetForm }) => (
          <Form>
            <Grid2 spacing={4} container>
              <Grid2 container spacing={4} xs={12} md={6}>
                <Grid2 xs={12}>
                  <FormikSelect
                    name="availability_days"
                    label="Availability Days"
                    options={availabilityDaysOptions}
                    placeholder="Select"
                    isRequired
                    isStack
                    isPortal
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikTimePicker label="Start Time" name="start_time" isRequired isStack />
                </Grid2>
                <Grid2 xs={12}>
                  <Stack direction="row" justifyContent="space-between" alignItems="end" gap={1}>
                    <FormikTimePicker label="Break Start Time" name="break_start_time" isRequired isStack />
                    <Remove color="disabled" className="mb-2" />
                    <FormikTimePicker label="Break End Time" name="break_end_time" isRequired isStack />
                  </Stack>
                </Grid2>
                <Grid2 xs={12}>
                  <FormikTimePicker label="End Time" name="end_time" isRequired isStack />
                </Grid2>
              </Grid2>
            </Grid2>
            <Box className="flex w-100 items-end justify-end gap-3" mt={3}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setActiveStep(1)}
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

export default WorkScheduleForm;
