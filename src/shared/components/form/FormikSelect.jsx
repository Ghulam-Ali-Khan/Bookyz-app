/* eslint-disable no-nested-ternary */

'use client';

import React, { useCallback, useMemo } from 'react';
import { Grid, Typography } from '@mui/material';
import Select from 'react-select';
import propTypes from 'prop-types';
import { useField } from 'formik';

// STYLES
import { formikSelectStyles } from '@/styles/formik/formik-styles';

function FormikSelect({
  name,
  options,
  label = null,
  className = '',
  style = {},
  placeholder = 'Select...',
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
  isRequired = false,
  reactSelectComponents = {},
  formatOptionLabel = null,
  isStack = false,
  isPortal = false,
}) {
  const [field, meta, helpers] = useField(name);
  const { value: selectedValue, onBlur: onFieldBlur } = field;
  const { error, touched } = meta;
  const { setValue } = helpers;

  const selectedOption = useMemo(
    () => options?.find(item => item?.value === selectedValue),
    [selectedValue, options]
  );

  const handleChange = useCallback(
    selectedOptionObject => {
      const newValue = selectedOptionObject.value;

      if (newValue) {
        setValue(newValue);

        if (onChange) onChange(newValue, name, selectedOptionObject);
      }
    },
    [selectedValue, onChange]
  );

  const handleBlur = useCallback(
    e => {
      onFieldBlur(e);

      if (onBlur) onBlur(e.value, name);
    },
    [selectedValue]
  );

  return (
    <Grid container display="flex" width={1} alignItems="center" rowSpacing={label ? 1 : 0}>
      {label && (
        <Grid item xs={12} md={isStack ? 12 : 3}>
          <Typography variant="label" className={`${isRequired ? 'required' : ''} ${isStack && 'mb-0'}`}>
            {label}
          </Typography>
        </Grid>
      )}

      {/* eslint-disable-next-line no-nested-ternary */}
      <Grid item xs={12} md={label ? (isStack ? 12 : 9) : 12}>
        <Select
          className={className}
          value={selectedOption || null}
          options={options}
          onChange={handleChange}
          onBlur={handleBlur}
          isDisabled={disabled}
          placeholder={placeholder}
          formatOptionLabel={formatOptionLabel}
          components={{
            IndicatorSeparator: false,
            ...reactSelectComponents,
          }}
          styles={style || formikSelectStyles}
          menuPosition={isPortal ? 'fixed' : undefined}
          menuPortalTarget={isPortal ? (typeof document !== 'undefined' ? document.body : null) : undefined}
        />

        {error && touched && <Typography variant="error">{error}</Typography>}
      </Grid>
    </Grid>
  );
}

FormikSelect.propTypes = {
  name: propTypes.string.isRequired,
  options: propTypes.array.isRequired,
  className: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  isRequired: propTypes.bool,
  reactSelectComponents: propTypes.object,
  style: propTypes.object,
  formatOptionLabel: propTypes.func,
  isStack: propTypes.bool,
  isPortal: propTypes.bool,
};

export default FormikSelect;
