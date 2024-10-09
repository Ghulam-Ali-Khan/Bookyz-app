/* eslint-disable no-nested-ternary */
import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import propTypes from 'prop-types';
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// STYLES
import { renderTimeViewClock } from '@mui/x-date-pickers';
import styles from '@/styles/components/inputField.module.scss';

// COMPONENTS
import TextField from '@/app/common/components/styled/TextField';

function FormikTimePicker({
  name,
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
  isStack = false,
  isRequired = false,
  placeholder = '',
  label = null,
}) {
  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  const { setFieldValue } = useFormikContext();
  const [field, meta, helpers] = useField(name);
  const { setTouched } = helpers;
  const [innerValue, setInnerValue] = useState(null);

  const { onBlur: onFieldBlur, value } = field;
  const { error, touched } = meta;

  useEffect(() => {
    if (value !== undefined || value !== null) {
      setInnerValue(moment(value, 'HH:mm:ss'));
    } else {
      setInnerValue('');
    }
  }, [value]);

  const handleChange = useCallback(
    newMoment => {
      if (newMoment !== null || newMoment !== undefined) {
        const formattedValue = newMoment?.format('HH:mm:ss');
        if (moment(formattedValue, 'HH:mm:ss').isValid()) {
          setFieldValue(name, formattedValue); // formik state
          setInnerValue(newMoment); // local state
        } else {
          setFieldValue(name, 'Invalid Time'); // formik state
          setInnerValue('Invalid Time'); // local state
        }
        if (onChange) onChange(formattedValue, name);
      }
    },
    [value]
  );

  const handleBlur = useCallback(
    e => {
      onFieldBlur(e);

      if (onBlur) onBlur(e, name);
    },
    [value]
  );

  return (
    <Grid container rowSpacing={label ? 1 : 0} className={styles.fieldWrapper}>
      {label && (
        <Grid item xs={12} md={isStack ? 12 : 3}>
          <Typography variant="label" className={`${isRequired ? 'required' : ''} ${isStack ? 'mb-0' : ''}`}>
            {label}
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} md={label ? (isStack ? 12 : 9) : 12}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <TimePicker
            name={name}
            value={innerValue}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
            onClose={() => setTouched(true)}
            placeholder={placeholder}
            desktopModeMediaQuery={isLargeScreen ? '@media (pointer: fine)' : '@media (pointer: coarse)'}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
            slots={{
              textField: TextField,
            }}
            slotProps={{
              textField: { value: innerValue },
            }}
          />
        </LocalizationProvider>

        {error && touched && <Typography variant="error">{error}</Typography>}
      </Grid>
    </Grid>
  );
}

FormikTimePicker.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  disabled: propTypes.bool,
  isStack: propTypes.bool,
  isRequired: propTypes.bool,
  placeholder: propTypes.string,
  label: propTypes.string,
};

export default FormikTimePicker;
