/* eslint-disable no-unused-vars */

'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { KeyboardArrowDown, Remove, Settings } from '@mui/icons-material';
import FormikField from '@/shared/components/form/FormikField';
import FormikSelect from '@/shared/components/form/FormikSelect';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { servicesFormInitVals, servicesFormValSchema } from '../utilities/formUtils';
import {
  useAddServiceMutation,
  useGetServiceByIdQuery,
  useUpdateServiceMutation,
} from '@/services/private/services';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { border } from '@/styles/common/colors';
import FormikTimePicker from '@/shared/components/form/FormikTimePicker';
import FormikDropZone from '@/shared/components/form/FormikDropZone';

function AddEditServicesForm({ serviceSlug }) {
  const [initValues, setInitValues] = useState(servicesFormInitVals);

  // API HOOKS
  const { data: serviceData } = useGetServiceByIdQuery(serviceSlug, {
    skip: !serviceSlug,
  });
  // const { data: categoriesData } = useGetCategoriesQuery();
  // const [getSubcategoriesData, { data: subcategoriesData = [] }] = useLazyGetSubCategoriesQuery();
  const [addService, { error, isSuccess }] = useAddServiceMutation();
  const [updateService, { error: editError, isSuccess: isEditSuccess }] = useUpdateServiceMutation();
  useHandleApiResponse(error, isSuccess, 'Service added successfully!', true);
  useHandleApiResponse(editError, isEditSuccess, 'Service updated successfully!', true);

  // const handleChange = newValue => {
  //   getSubcategoriesData({ category: newValue });
  // };

  //   TRANSFORMERS
  // const categoriesOptions = useMemo(() => {
  //   if (categoriesData) {
  //     return categoriesData?.results?.map(item => ({
  //       label: item.name,
  //       value: item.id,
  //     }));
  //   }

  //   return [];
  // }, [categoriesData]);

  useEffect(() => {
    if (serviceData) {
      setInitValues({
        name: serviceData?.name || '',
        category: serviceData?.category || '',
        sub_category: serviceData?.sub_category || '',
        price: serviceData?.price || '',
        description: serviceData?.description || '',
        service_status: serviceData?.service_status || '',
        availability_days: serviceData?.availability_days || '',
        availability_start_time: serviceData?.availability_start_time || '',
        availability_end_time: serviceData?.availability_end_time || '',
        image: serviceData?.image || '',
      });
    }
  }, [serviceData]);

  return (
    <Box sx={{ borderRadius: '10px' }} className="bg-white p-8">
      <Formik
        enableReinitialize
        initialValues={initValues}
        validationSchema={servicesFormValSchema}
        onSubmit={async values => {
          const formData = new FormData();
          formData.append('name', values?.name);
          formData.append('category', values?.category);
          formData.append('sub_category', values?.sub_category);
          formData.append('price', values?.price);
          formData.append('description', values?.description);
          formData.append('service_status', values?.service_status);
          formData.append('availability_days', values?.availability_days);
          formData.append('availability_start_time', values?.availability_start_time);
          formData.append('availability_end_time', values?.availability_end_time);
          if (values?.image && typeof values?.image !== 'string') {
            formData.append('image', values?.image, values?.image?.name);
          }
          if (serviceData) {
            await updateService({ formData, slug: serviceData?.service_slug });
          } else {
            await addService(formData);
          }
        }}
      >
        {({ isSubmitting, values, resetForm }) => (
          <Form className=" w-1/3">

            <Accordion className=" p-8 rounded-2xl border border-slate-900">
              <AccordionSummary
                expandIcon={<KeyboardArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Stack direction="row" justifyContent="center" alignItems="center" gap={3}>
                  <Settings />
                  <Box>
                    <Typography variant="h6" fontWeight={500}>
                      Basic Information
                    </Typography>
                    <Typography variant="subHead">Name, Price, time, and Category</Typography>
                  </Box>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column" gap="24px">
                  <FormikField
                    name="name"
                    label="Service Title"
                    isRequired
                    type="text"
                    placeholder="Service Title"
                    isStack
                  />

                  <Divider sx={{ borderColor: border }} className="my-3" />

                  {/* <FormikSelect
                    name="category"
                    label="Category"
                    options={categoriesOptions}
                    placeholder="Select"
                    onChange={newValue => handleChange(newValue)}
                    isRequired
                    isStack
                    isPortal
                  /> */}

                  <FormikField
                    label="Description"
                    placeholder="Enter description..."
                    name="description"
                    type="textarea"
                    rows={16}
                    isRequired
                    isStack
                  />

                  <Divider sx={{ borderColor: border }} className="my-3" />

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

                  <Divider sx={{ borderColor: border }} className="my-3" />

                  <FormikField
                    name="price"
                    label="Price"
                    type="number"
                    placeholder="Price"
                    isRequired
                    isStack
                  />

                  <Divider sx={{ borderColor: border }} className="my-3" />

                  <Stack direction="row" justifyContent="space-between" alignItems="end" gap={1}>
                    <FormikTimePicker
                      label="Availability Start Time"
                      name="availability_start_time"
                      isRequired
                      isStack
                    />
                    <Remove color="disabled" className="mb-2" />
                    <FormikTimePicker
                      label="Availability End Time"
                      name="availability_end_time"
                      isRequired
                      isStack
                    />
                  </Stack>

                  <Divider sx={{ borderColor: border }} className="my-3" />

                  <Box>
                    <Typography variant="label">Add Image</Typography>

                    <FormikDropZone
                      src={typeof values?.image === 'string' ? values?.image : ''}
                      label="Image"
                      name="image"
                    />
                  </Box>
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Stack direction="column" gap="24px" className=" mt-8 p-8 rounded-2xl border border-slate-900">
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" justifyContent="center" alignItems="center" gap={3}>
                  <Settings />
                  <Box>
                    <Typography variant="h6" fontWeight={500}>
                      User
                    </Typography>
                    <Typography variant="subHead">Who performs the service</Typography>
                  </Box>
                </Stack>
                <KeyboardArrowDown />
              </Stack>
            </Stack>

            <Box className="flex w-100 align-items-center justify-center" mt={3}>
              <SubmitBtn label="Activate Service" isLoading={isSubmitting} className="rounded-3xl" />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

AddEditServicesForm.propTypes = {
  serviceSlug: PropTypes.number,
};

export default AddEditServicesForm;
