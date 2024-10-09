import React, { useCallback, useMemo } from 'react';
import { Grid, Typography } from '@mui/material';
import CreatableSelect from 'react-select/creatable';
import propTypes from 'prop-types';
import { useField } from 'formik';

// STYLES & UTILITIES
import styles from '@/styles/components/inputField.module.scss';
import '@/styles/components/inputField.scss';
import { optionLabelFormatter } from './creatableComponents';

function FormikCreatableMultiSelect({
  options,
  name,
  label,
  reactSelectComponents,
  formatOptionLabel,
  isRequired,
  disabled,
  createOptionHandler,
  deleteOptionHandler,
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
    <Grid container rowSpacing={label ? 1 : 0} className={styles.fieldWrapper}>
      {label && (
        <Grid item xs={12} md={3}>
          <Typography variant="label" className={isRequired ? 'required' : ''}>
            {label}
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} md={label ? 9 : 12}>
        <CreatableSelect
          onCreateOption={createOptionHandler}
          className={`${styles.multiField} multiField`}
          name={name}
          isMulti
          value={selectedOption}
          onChange={handleChange}
          onBlur={onFieldBlur}
          options={options}
          classNamePrefix="multiField"
          formatOptionLabel={(option, metaData) => formatOptionLabel(option, metaData, deleteOptionHandler)}
          components={{
            ...reactSelectComponents,
          }}
          isDisabled={disabled}
        />

        {error && touched && <Typography variant="error">{error}</Typography>}
      </Grid>
    </Grid>
  );
}

FormikCreatableMultiSelect.propTypes = {
  name: propTypes.string.isRequired,
  options: propTypes.array.isRequired,
  label: propTypes.string,
  reactSelectComponents: propTypes.object,
  formatOptionLabel: propTypes.func,
  disabled: propTypes.bool,
  isRequired: propTypes.bool,
  createOptionHandler: propTypes.func.isRequired,
  deleteOptionHandler: propTypes.func,
};

FormikCreatableMultiSelect.defaultProps = {
  label: null,
  reactSelectComponents: {},
  formatOptionLabel: optionLabelFormatter,
  disabled: false,
  isRequired: false,
  deleteOptionHandler: null,
};

export default FormikCreatableMultiSelect;
