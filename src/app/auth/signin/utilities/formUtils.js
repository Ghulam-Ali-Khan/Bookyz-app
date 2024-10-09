import * as yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
};

export const validationSchema = yup.object({
  email: yup.string().trim().email('Invalid Email').required('Required'),
  password: yup
    .string()
    .required('Required')
});
