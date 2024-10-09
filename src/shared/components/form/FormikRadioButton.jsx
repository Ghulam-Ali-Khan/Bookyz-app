import React from 'react';
import { Box, FormControl, FormControlLabel, Grid, Radio, Typography } from '@mui/material';
import propTypes from 'prop-types';
import { Field } from 'formik';

function FormikRadioButtons({ label, options, name, disabled }) {
  return (
    <Grid container spacing={1}>
      {label && (
        <Grid item xs={12} md={3}>
          <Typography variant="label">{label}</Typography>
        </Grid>
      )}

      <Grid item xs={12} md={label ? 9 : 3}>
        <Box className="d-flex align-items-center gap-5">
          <Field name={name}>
            {({ field }) => options?.map(option => (
              <FormControl key={option.label} disabled={disabled}>
                <FormControlLabel
                  type="radio"
                  {...field}
                  value={option.value}
                  name={name}
                  checked={field.value === option.value}
                  control={<Radio size="small" />}
                  label={option?.label}
                  sx={{ '& .MuiTypography-root': { fontSize: '13px' } }}
                />
              </FormControl>
            ))}
          </Field>
        </Box>
      </Grid>
    </Grid>
  );
}

FormikRadioButtons.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.string,
    })
  ),
  disabled: propTypes.bool,
};

FormikRadioButtons.defaultProps = {
  label: null,
  options: [],
  disabled: false,
};

export default FormikRadioButtons;
