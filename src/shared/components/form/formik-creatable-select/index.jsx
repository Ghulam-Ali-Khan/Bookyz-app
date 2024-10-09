'use client';

/* eslint-disable no-nested-ternary */
import React, { useCallback, useMemo } from 'react';
import { Grid, Typography } from '@mui/material';
import CreatableSelect from 'react-select/creatable';
import propTypes from 'prop-types';
import { useField } from 'formik';

// STYLES
import styles from '@/styles/components/inputField.module.scss';
import '@/styles/components/inputField.scss';
import { getFieldOptionStyles } from '@/styles/mui/components/inputField-styles';
import { optionLabelFormatter } from './creatableComponents';

function FormikSelectCreatable({
  label,
  options,
  name,
  onChange,
  onBlur,
  disabled,
  isRequired,
  placeholder,
  reactSelectComponents,
  formatOptionLabel,
  isStack,
  isPortal,
  createOptionHandler,
  deleteOptionHandler,
}) {
  const [field, meta, helpers] = useField(name);
  const { value: selectedValue, onBlur: onFieldBlur } = field;
  const { error, touched } = meta;
  const { setValue } = helpers;

  const selectedOption = useMemo(
    () => options?.find(item => item.value === selectedValue),
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
    <Grid container className={styles.fieldWrapper} rowSpacing={label ? 1 : 0}>
      {label && (
        <Grid item xs={12} md={isStack ? 12 : 3}>
          <Typography variant="label" className={`${isRequired ? 'required' : ''} ${isStack && 'mb-0'}`}>
            {label}
          </Typography>
        </Grid>
      )}

      {/* eslint-disable-next-line no-nested-ternary */}
      <Grid item xs={12} md={label ? (isStack ? 12 : 9) : 12}>
        <CreatableSelect
          onCreateOption={createOptionHandler}
          value={selectedOption || null}
          options={options}
          className={`${styles.singleSelect} singleSelect`}
          classNamePrefix="singleSelect"
          onChange={handleChange}
          onBlur={handleBlur}
          isDisabled={disabled}
          placeholder={placeholder}
          formatOptionLabel={(option, metaData) => formatOptionLabel(option, metaData, deleteOptionHandler)}
          components={{
            IndicatorSeparator: false,
            ...reactSelectComponents,
          }}
          styles={{
            menuPortal: base => ({ ...base, zIndex: 1700 }),
            option: getFieldOptionStyles,
          }}
          menuPosition={isPortal ? 'fixed' : undefined}
          menuPortalTarget={isPortal ? (typeof document !== 'undefined' ? document.body : null) : undefined}
        />

        {error && touched && <Typography variant="error">{error}</Typography>}
      </Grid>
    </Grid>
  );
}

FormikSelectCreatable.propTypes = {
  name: propTypes.string.isRequired,
  options: propTypes.array.isRequired,
  label: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  isRequired: propTypes.bool,
  reactSelectComponents: propTypes.object,
  formatOptionLabel: propTypes.func,
  isStack: propTypes.bool,
  isPortal: propTypes.bool,
  createOptionHandler: propTypes.func.isRequired,
  deleteOptionHandler: propTypes.func,
};

FormikSelectCreatable.defaultProps = {
  label: null,
  placeholder: 'Select...',
  onChange: () => {},
  onBlur: () => {},
  disabled: false,
  isRequired: false,
  reactSelectComponents: {},
  formatOptionLabel: optionLabelFormatter,
  isStack: false,
  isPortal: false,
  deleteOptionHandler: null,
};

export default FormikSelectCreatable;
