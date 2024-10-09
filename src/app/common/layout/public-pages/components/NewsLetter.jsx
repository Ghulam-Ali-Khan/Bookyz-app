/* eslint-disable no-unused-vars */
import * as Yup from 'yup';
import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { ArrowRightAlt } from '@mui/icons-material';
import FormikField from '@/shared/components/form/FormikField';
import SubmitBtn from '@/app/common/components/SubmitBtn';
// import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
// import { useSendNewsLetterMutation } from '@/services/public/helpAndSupport';

function NewsLetter() {
  // const [sendEmail, { error, isSuccess }] = useSendNewsLetterMutation();
  // useHandleApiResponse(error, isSuccess, 'News Letter Subscribed successfully!');

  return (
    <Box className="mb-6">
      <Formik
        enableReinitialize
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string().trim().email('Invalid Email').required('Required'),
        })}
        onSubmit={async values => {
          // await sendEmail(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className=" flex items-center gap-3">
            <FormikField
              name="email"
              isRequired
              type="text"
              placeholder="Email"
              className=" h-12 rounded-md placeholder:text-base bg-transparent border-[#808080] placeholder:text-[#808080] placeholder:font-normal"
              isStack
            />

            <SubmitBtn label={<ArrowRightAlt />} className="h-12" isLoading={isSubmitting} />
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default NewsLetter;
