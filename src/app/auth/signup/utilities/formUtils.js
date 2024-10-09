import * as yup from 'yup';

export const initialValues = {
  username: '',
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  confirmPassword: '',
  user_type: 'client'
};

export const validationSchema = yup.object({
  username: yup
    .string()
    .trim()
    .test('isValidPass', 'username does not contain spaces', value => {
      const usernameRegex = /^[a-za-zA-Z0-9_.]+$/.test(value);
      if (usernameRegex) {
        return true;
      }
      return false;
    }).required('Required'),
  first_name: yup.string().required('Required'),
  last_name: yup.string().required('Required'),
  email: yup.string().trim().email('Invalid Email').required('Required'),
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
});
