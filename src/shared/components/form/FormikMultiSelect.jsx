/* eslint-disable no-nested-ternary */

'use client';

import React, { useCallback, useMemo } from 'react';
import { Grid, Typography } from '@mui/material';
import Select from 'react-select';
import propTypes from 'prop-types';
import { useField } from 'formik';
import { formikMultiSelectStyles } from '@/styles/formik/formik-styles';

// STYLES & UTILITIES

function FormikMultiSelect({
  options,
  name,
  label = null,
  reactSelectComponents = {},
  formatOptionLabel = null,
  isRequired = false,
  disabled = false,
  isStack = false,
  isPortal = false,
}) {
  const [field, meta, helpers] = useField(name);
  const { onBlur: onFieldBlur, value: selectedValue } = field;
  const { setValue } = helpers;
  const { error, touched } = meta;

  const selectedOption = useMemo(
    () => options?.filter(option => selectedValue?.some(item => item === option?.value)),
    [selectedValue, options]
  );

  const handleChange = useCallback(
    values => {
      setValue(values.map(item => item.value));
    },
    [selectedValue]
  );

  return (
    <Grid container rowSpacing={label ? 1 : 0} display="flex" alignItems="center" width={1}>
      {label && (
        <Grid item xs={12} md={isStack ? 12 : 3}>
          <Typography variant="label" className={isRequired ? 'required' : ''}>
            {label}
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} md={label ? (isStack ? 12 : 9) : 12}>
        <Select
          name={name}
          isMulti
          value={selectedOption}
          onChange={handleChange}
          onBlur={onFieldBlur}
          options={options}
          formatOptionLabel={formatOptionLabel}
          components={{
            ...reactSelectComponents,
          }}
          isDisabled={disabled}
          styles={formikMultiSelectStyles}
          menuPosition={isPortal ? 'fixed' : undefined}
          menuPortalTarget={isPortal ? (typeof document !== 'undefined' ? document.body : null) : undefined}
        />

        {error && touched && <Typography variant="error">{error}</Typography>}
      </Grid>
    </Grid>
  );
}

FormikMultiSelect.propTypes = {
  name: propTypes.string.isRequired,
  options: propTypes.array.isRequired,
  label: propTypes.string,
  reactSelectComponents: propTypes.object,
  formatOptionLabel: propTypes.func,
  disabled: propTypes.bool,
  isRequired: propTypes.bool,
  isStack: propTypes.bool,
  isPortal: propTypes.bool,
};

export default FormikMultiSelect;
