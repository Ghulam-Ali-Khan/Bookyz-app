/* eslint-disable no-unused-vars */
import { Box, FormControlLabel, Switch } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { basicServicesFormInitVals, basicServicesFormValSchema } from '../utilities/formUtils';
import FormikField from '@/shared/components/form/FormikField';
import FormikSelect from '@/shared/components/form/FormikSelect';
import { momsOptions } from '../utilities/data';

function AddEditBasicServicesForm() {
  const [initValues, setInitValues] = useState(basicServicesFormInitVals);
  return (
    <Box sx={{ borderRadius: '10px' }} className="bg-white p-8">
      <Formik
        enableReinitialize
        initialValues={basicServicesFormInitVals}
        validationSchema={basicServicesFormValSchema}
        onSubmit={async values => {
          console.log(values);
        }}
      >
        {({ isSubmitting, values, setFieldValue, resetForm }) => (
          <Form>
            <Grid2 spacing={4} container>
              <Grid2 container spacing={4} xs={12} md={6}>
                <Grid2 xs={12}>
                  <FormikField
                    name="basic_service"
                    label="Basic Service"
                    isRequired
                    type="text"
                    placeholder="Basic Service"
                    isStack
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormControlLabel
                    label="Billed To Customer"
                    name="online_booking"
                    value={values.user_type}
                    onChange={(_, val) => setFieldValue('online_booking', val)}
                    control={<Switch defaultChecked />}
                  />
                  <FormControlLabel
                    label="Free"
                    name="online_booking"
                    value={values.user_type}
                    onChange={(_, val) => setFieldValue('online_booking', val)}
                    control={<Switch defaultChecked />}
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikSelect
                    name="moms"
                    label="Moms"
                    options={momsOptions}
                    placeholder="Select"
                    isRequired
                    isStack
                    isPortal
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikField
                    name="first_name"
                    label="Commission Basis"
                    isRequired
                    type="text"
                    placeholder="Commission Basis"
                    isStack
                  />
                </Grid2>
                <Grid2 xs={12}>
                  <FormikSelect
                    name="category"
                    label="Category"
                    // options={categoriesOptions}
                    options={[]}
                    placeholder="Select"
                    // onChange={newValue => handleChange(newValue)}
                    isRequired
                    isStack
                    isPortal
                  />
                </Grid2>
              </Grid2>
            </Grid2>
            <Box className="flex w-100 items-end justify-end gap-3" mt={3}>
              <SubmitBtn label="Next" isLoading={isSubmitting} className="rounded-3xl" />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default AddEditBasicServicesForm;
