import moment from 'moment';
import * as Yup from 'yup';

function isTestEndDate(value) {
  const { availability_start_time: startTime } = this.parent;
  return moment(startTime, 'HH:mm:ss').isSameOrBefore(moment(value, 'HH:mm:ss'));
}

export const servicesFormInitVals = {
  name: '',
  category: '',
  sub_category: '',
  price: '',
  description: '',
  service_status: 'Pending',
  availability_days: '',
  availability_start_time: '',
  availability_end_time: '',
  image: '',
};

export const servicesFormValSchema = Yup.object({
  name: Yup.string().max(75, 'Maximum 75 characters allowed').required('Required!').required('Required!'),
  price: Yup.string().required('Required!'),
  category: Yup.string().required('Required!'),
  sub_category: Yup.string().required('Required!'),
  service_status: Yup.string().required('Required!'),
  description: Yup.string().max(700, 'Maximum 700 characters allowed').required('Required!'),
  availability_days: Yup.string().required('Required!'),
  availability_start_time: Yup.string().required('Required'),
  availability_end_time: Yup.string()
    .test('availability_end_time', 'End time must be after start time', isTestEndDate)
    .required('Required'),
  image: Yup.mixed()
    .test('fileSize', 'File size must be less than 1 MB', value => {
      if (value?.size > 1000000) return false;

      return true;
    })
    .nullable(),
});

export const basicServicesFormInitVals = {
  name: '',
  category: '',
  sub_category: '',
  price: '',
  description: '',
  service_status: 'Pending',
  availability_days: '',
  availability_start_time: '',
  availability_end_time: '',
  image: '',
};

export const basicServicesFormValSchema = Yup.object({
  name: Yup.string().max(75, 'Maximum 75 characters allowed').required('Required!').required('Required!'),
  price: Yup.string().required('Required!'),
  category: Yup.string().required('Required!'),
  sub_category: Yup.string().required('Required!'),
  service_status: Yup.string().required('Required!'),
  description: Yup.string().max(700, 'Maximum 700 characters allowed').required('Required!'),
  availability_days: Yup.string().required('Required!'),
  availability_start_time: Yup.string().required('Required'),
  availability_end_time: Yup.string()
    .test('availability_end_time', 'End time must be after start time', isTestEndDate)
    .required('Required'),
  image: Yup.mixed()
    .test('fileSize', 'File size must be less than 1 MB', value => {
      if (value?.size > 1000000) return false;

      return true;
    })
    .nullable(),
});
