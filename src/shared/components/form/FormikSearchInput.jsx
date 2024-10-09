import React, { useCallback, useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { useField } from 'formik';
import { Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import styles from '@/styles/containers/layout/navbar.module.scss';

function FormikSearchInput({
  name,
  placeholder = '',
  disabled = false,
  className = '',
  onChange = () => {},
  onBlur = () => {},
  onValueChangeValidator = null,
}) {
  const [innerValue, setInnerValue] = useState('');
  const [field] = useField(name || '');

  const searchInputRef = useRef(null);

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

  return (
    <Box className={styles.searchFieldBox} id="search-input">
      <Box className={`${styles.inputSearchIcon} flex justify-center items-center`} ref={searchInputRef}>
        <Search />
      </Box>
      <input
        name={name}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={innerValue}
        className={`${styles.customFormikSearchField} ${className} `}
      />
    </Box>
  );
}

FormikSearchInput.propTypes = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  className: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  onValueChangeValidator: propTypes.func,
};

export default FormikSearchInput;
