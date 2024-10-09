/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useField } from 'formik';
import styles from '@/styles/components/inputField.module.scss';
import StyledTextArea from './StyledTextArea';
import StyledInputField from './StyledInputField';
import { contrastText, primary } from '@/styles/common/colors';

function FormikField({
  name,
  type = 'text',
  placeholder = '',
  disabled = false,
  className = '',
  onChange = () => {},
  onBlur = () => {},
  icon = null,
  label = null,
  isRequired = false,
  onValueChangeValidator = null,
  isStack = false,
  autoComplete = true,
  step = false,
  rows = 4,
}) {
  const [innerValue, setInnerValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(name || '');
  const { touched, error } = meta;

  const { onChange: onValueChange, onBlur: onFieldBlur, value } = field;

  useEffect(() => {
    if (value !== undefined && value !== null) {
      setInnerValue(value);
    } else {
      setInnerValue('');
    }
  }, [value]);

  const handleChange = useCallback(
    e => {
      if (onValueChangeValidator) {
        const newValue = e.target.value;
        const isValid = onValueChangeValidator(newValue);
        if (isValid) {
          onValueChange(e);
          setInnerValue(newValue);
          if (onChange) onChange(newValue, name);
        }
      } else {
        const newValue = e.target.value;
        onValueChange(e);
        setInnerValue(newValue);
        if (onChange) onChange(newValue, name);
      }
    },
    [value, onValueChangeValidator]
  );

  const handleBlur = useCallback(
    e => {
      onFieldBlur(e);

      if (onBlur) onBlur(e.target.value, name);
    },
    [value, onBlur]
  );

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container rowSpacing={label ? 1 : 0} display="flex" alignItems="center" width={1}>
      {label && (
        <Grid item xs={12} md={isStack ? 12 : 3}>
          <Typography variant="label" className={`${isRequired ? 'required' : ''} ${isStack ? 'mb-0' : ''}`}>
            {label}
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} md={label ? (isStack ? 12 : 9) : 12}>
        {type === 'textarea' ? (
          <StyledTextArea
            name={name}
            cols="30"
            rows={rows}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={innerValue}
            className={className}
            disabled={disabled}
          />
        ) : (
          <Box className={styles.iconGroup}>
            {icon ? <Box className={styles.inputIcon}>{icon}</Box> : null}
            <StyledInputField
              name={name}
              type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
              disabled={disabled}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={innerValue}
              step={step ? '0.01' : '1'}
              autoComplete={autoComplete ? 'on' : 'new-password'}
              min={type === 'number' ? 0 : undefined}
              className={className}
            />

            {type === 'password' && (
              <Box
                className={styles.inputIcon}
                bgcolor={showPassword ? primary : '#f2f4f7'}
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <VisibilityOff htmlColor={contrastText} />
                ) : (
                  <Visibility htmlColor="#999999" />
                )}
              </Box>
            )}
          </Box>
        )}

        {error && touched && (
          <Typography variant="error" className="text-danger">
            {error}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

FormikField.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  className: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  icon: propTypes.element,
  label: propTypes.string,
  isRequired: propTypes.bool,
  onValueChangeValidator: propTypes.func,
  isStack: propTypes.bool,
  autoComplete: propTypes.bool,
  step: propTypes.bool,
  rows: propTypes.number,
};

export default FormikField;
