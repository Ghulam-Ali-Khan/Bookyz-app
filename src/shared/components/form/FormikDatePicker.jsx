'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useField } from 'formik';
import propTypes from 'prop-types';
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// STYLES
import styles from '@/styles/components/inputField.module.scss';

// COMPONENTS
import TextField from '@/app/common/components/styled/TextField';

function FormikDatePicker({
  onChange,
  name,
  disabled,
  placeholder,
  disablePast,
  disableFuture,
  label,
  isRequired,
  excludeDates,
  isStack,
}) {
  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  const [field, meta, helpers] = useField(name || '');
  const { setValue, setTouched } = helpers;
  const { value } = field;
  const { error, touched } = meta;

  const [innerValue, setInnerValue] = useState(null);

  useEffect(() => {
    if (value !== '' && value !== undefined && value !== null) {
      setInnerValue(moment(value, 'YYYY-MM-DD'));
    } else {
      setInnerValue(null);
    }
  }, [value]);

  const handleChange = useCallback(
    newMoment => {
      const formattedValue = newMoment?.format('YYYY-MM-DD') || '';

      if (newMoment !== null || newMoment !== undefined) {
        setValue(formattedValue);
        setInnerValue(newMoment);
      } else {
        setValue('');
        setInnerValue('');
      }

      if (onChange) onChange(formattedValue, name);
    },
    [value]
  );

  return (
    <Grid container rowSpacing={label ? 1 : 0} className={styles.fieldWrapper}>
      {label && (
        <Grid item xs={12} md={isStack ? 12 : 3}>
          <Typography variant="label" className={`${isRequired ? 'required' : ''} ${isStack && 'mb-0'}`}>
            {label}
          </Typography>
        </Grid>
      )}

      {/* eslint-disable-next-line no-nested-ternary */}
      <Grid item xs={12} md={label ? (isStack ? 12 : 9) : 12}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            name={name}
            value={innerValue}
            className="w-full"
            onChange={handleChange}
            disabled={disabled}
            placeholder={placeholder}
            onClose={() => {
              setTimeout(() => {
                // to avoid error before value being set.
                setTouched(true);
              }, 150);
            }}
            disablePast={disablePast}
            disableFuture={disableFuture}
            shouldDisableDate={date => {
              let newDate = '';

              excludeDates?.forEach(item => {
                if (date.format('YYYY-MM-DD') === item) {
                  newDate = item;
                }
              });

              return !!newDate;
            }}
            desktopModeMediaQuery={isLargeScreen ? '@media (pointer: fine)' : '@media (pointer: coarse)'}
            renderInput={params => <TextField {...params} onBlur={() => setTouched(true)} />}
          />
        </LocalizationProvider>

        {error && touched && <Typography variant="error">{error}</Typography>}
      </Grid>
    </Grid>
  );
}

FormikDatePicker.propTypes = {
  onChange: propTypes.func,
  name: propTypes.string.isRequired,
  disabled: propTypes.bool,
  placeholder: propTypes.string,
  disablePast: propTypes.bool,
  disableFuture: propTypes.bool,
  label: propTypes.string,
  isRequired: propTypes.bool,
  excludeDates: propTypes.arrayOf(propTypes.string),
  isStack: propTypes.bool,
};

FormikDatePicker.defaultProps = {
  onChange: () => {},
  disabled: false,
  placeholder: '',
  disablePast: false,
  disableFuture: false,
  label: null,
  isRequired: false,
  excludeDates: [],
  isStack: false,
};

export default FormikDatePicker;
