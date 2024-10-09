import React from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import propTypes from 'prop-types';
import { useField } from 'formik';

function FormikCheckbox({
  name,
  disabled,
  className,
  muiSize,
  label,
  labelVariant,
  onValueChange,
  disableRipple,
}) {
  const [field, meta] = useField({ name, type: 'checkbox' });
  const { value, onChange } = field;
  const { touched, error } = meta;

  return (
    <Box>
      <FormControlLabel
        name={name}
        label={label}
        control={(
          <Checkbox
            size={muiSize}
            checked={value}
            sx={{ color: error && touched ? 'red' : 'currentcolor' }}
            disableRipple={disableRipple}
          />
        )}
        value={value}
        onChange={(e, checked) => {
          onChange(e);
          onValueChange(checked);
        }}
        className={`${className} user-select-none .Mui-required`}
        componentsProps={{ typography: { variant: labelVariant } }}
        disabled={disabled}
      />

      {error && touched && (
        <Typography variant="error" className="text-danger">
          {error}
        </Typography>
      )}
    </Box>
  );
}

FormikCheckbox.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string,
  labelVariant: propTypes.string,
  disabled: propTypes.bool,
  disableRipple: propTypes.bool,
  className: propTypes.string,
  muiSize: propTypes.string,
  onValueChange: propTypes.func,
};

FormikCheckbox.defaultProps = {
  label: '',
  labelVariant: 'body2',
  disabled: false,
  disableRipple: false,
  className: '',
  muiSize: 'medium',
  onValueChange: () => {},
};

export default FormikCheckbox;
