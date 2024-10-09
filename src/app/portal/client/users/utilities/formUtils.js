import * as yup from 'yup';
import { yupLowercaseValidator } from '@/utilities/helpers';

export const basicInfoFormInitVals = {
  first_name: '',
  last_name: '',
  nick_name: '',
  signature: '',
  social_security_number: '',
  calling_code: '',
  email: '',
  phone: '',
};

export const basicInfoFormValSchema = yup.object({
  first_name: yup
    .string()
    .matches(/^[a-zA-Z ]*$/, 'Only Alphabets are allowed!')
    .required('Required'),
  last_name: yup
    .string()
    .matches(/^[a-zA-Z ]*$/, 'Only Alphabets are allowed!')
    .required('Required'),
  nick_name: yup
    .string()
    .matches(/^[a-zA-Z ]*$/, 'Only Alphabets are allowed!')
    .required('Required'),
  email: yup
    .string()
    .email('Invalid Email')
    .test('lowercase', 'Should be lowercase!', yupLowercaseValidator)
    .required('Required'),
  phone: yup.string().required('Required'),
  signature: yup.string().max(10, 'Cannot be more than 10 characters').required('Required'),
  calling_code: yup.string().required('Required'),
  social_security_number: yup.string().required('Required'),
});

export const settingFormInitVals = {
  designation: '',
  is_student: '',
  services: [],
  price_group: '',
  work_from: '',
  is_onsite: '',
  onsite_address: '',
  online_booking_available: '',
  booking_interval_in_minutes: '',
};

export const settingFormValSchema = yup.object({
  designation: yup.string().required('Required'),
});

export const workScheduleFormInitVals = {
  availability_days: '',
  start_time: '',
  break_start_time: [],
  break_end_time: '',
  end_time: '',
};
