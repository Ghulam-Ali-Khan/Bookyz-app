'use client';

/* eslint-disable no-nested-ternary */
import React, { useCallback, useState } from 'react';
import propTypes from 'prop-types';
import { Box, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useField } from 'formik';
import TextField from '@/app/common/components/styled/FormikStyledTextField';

function FormikField({
  name,
  label = '',
  type = 'text',
  placeholder = '',
  className = '',
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
  icon = null,
  isRequired = false,
}) {
  const [isVisible, setVisible] = useState(false);

  const [field, meta] = useField(name);
  const { value, onChange: onValueChange, onBlur: onFieldBlur } = field;
  const { error, touched } = meta;

  const handleChange = useCallback(
    e => {
      onValueChange(e);

      if (onChange) onChange(e);
    },
    [value]
  );

  const handleBlur = useCallback(e => {
    onFieldBlur(e);

    if (onBlur) onBlur(e);
  }, []);

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };
  return (
    <Box>
      <TextField
        required={isRequired}
        name={name}
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        type={type === 'password' ? (isVisible ? 'text' : 'password') : type}
        className={className}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
        InputProps={{
          startAdornment: icon ? <InputAdornment position="start">{icon}</InputAdornment> : undefined,
          endAdornment:
            type === 'password' ? (
              isVisible ? (
                <InputAdornment position="end" className="pointer">
                  <VisibilityOff onClick={toggleVisibility} />
                </InputAdornment>
              ) : (
                <InputAdornment position="end" className="pointer">
                  <Visibility onClick={toggleVisibility} />
                </InputAdornment>
              )
            ) : undefined,
        }}
        helperText={error && touched && <Typography variant="error">{error}</Typography>}
      />
    </Box>
  );
}

FormikField.propTypes = {
  name: propTypes.string.isRequired,
  disabled: propTypes.bool,
  isRequired: propTypes.bool,
  label: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  className: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  icon: propTypes.node,
};

export default FormikField;
