import React, { useCallback, useEffect, useState } from 'react';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useField } from 'formik';
import propTypes from 'prop-types';
import moment from 'moment';
import { Today } from '@mui/icons-material';

// COMPONENTS
import TextField from 'containers/common/components/styled/TextField';

function FormikDateTimePicker({ name, onChange, disablePast, disableFuture, iconSize, tooltipTitle }) {
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { error, touched } = meta;
  const { setValue } = helpers;

  const [innerValue, setInnerValue] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (value !== '' && value !== undefined && value !== null) {
      setInnerValue(moment(value));
    } else {
      setInnerValue(null);
    }
  }, [value]);

  const handleChange = useCallback(
    newMoment => {
      const formattedValue = newMoment?.format('YYYY-MM-DDTHH:mm:ss') || '';

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

  const togglePicker = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <Box>
      <Tooltip title={tooltipTitle}>
        <IconButton onClick={togglePicker} className="rounded-1">
          <Today fontSize={iconSize} />
        </IconButton>
      </Tooltip>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          name={name}
          open={isOpen}
          value={innerValue}
          onChange={handleChange}
          onClose={togglePicker}
          disablePast={disablePast}
          disableFuture={disableFuture}
          desktopModeMediaQuery="@media (pointer: coarse)"
          renderInput={params => <TextField hidden {...params} />}
        />
      </LocalizationProvider>

      {error && touched && <Typography variant="error">{error}</Typography>}
    </Box>
  );
}

FormikDateTimePicker.propTypes = {
  name: propTypes.string.isRequired,
  tooltipTitle: propTypes.string,
  onChange: propTypes.func,
  disablePast: propTypes.bool,
  disableFuture: propTypes.bool,
  iconSize: propTypes.oneOf(['small', 'medium', 'large']),
};

FormikDateTimePicker.defaultProps = {
  onChange: () => {},
  disablePast: false,
  disableFuture: false,
  iconSize: 'medium',
  tooltipTitle: 'Date and Time',
};

export default FormikDateTimePicker;
