import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import propTypes from 'prop-types';
import { useField } from 'formik';
import { AttachFile, InsertDriveFile, Remove } from '@mui/icons-material';

// STYLES
import { useSnackbar } from 'notistack';
import styles from '@/styles/components/fileField.module.scss';
import { fileBoxFieldStyles, iconButtonStyles } from '@/styles/mui/components/fileInputField';
import { primary } from '@/styles/common/colors';

function FormikFileField({
  name,
  onChange = () => {},
  minimal = false,
  accept = 'file',
  btnVariant = 'text',
  fileTypeValidator = null,
  btnText = 'Choose File',
  icon = false,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const inputRef = useRef(null);

  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { error } = meta;
  const { setValue, setError } = helpers;

  const [addedFile, setAddedFile] = useState(null);

  const allowedTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/zip',
  ];

  useEffect(() => {
    if (value !== undefined || value !== null || value !== '') {
      setAddedFile(value);
    }
  }, [value]);

  // HANDLERS
  const handleChange = e => {
    const file = e?.target?.files[0];

    if (fileTypeValidator) {
      const result = fileTypeValidator(file?.type);

      if (!result?.isValid) {
        setError(result?.errorMessage || 'Invalid file type!');
      } else {
        setValue(file);
        setAddedFile(file);
      }
      return;
    }

    if (file && allowedTypes.includes(file.type)) {
      setValue(file);
      setAddedFile(file);
    } else {
      setValue('');
      setAddedFile('');
      setError("Video file can't be uploaded!");
      enqueueSnackbar('Unsupported file format', { variant: 'error' });
    }

    if (onChange) onChange(file, e);
  };

  if (minimal) {
    return (
      <Box>
        <input
          value=""
          name={name}
          ref={inputRef}
          type="file"
          accept={accept}
          hidden
          onChange={handleChange}
        />

        <Stack direction="row" alignItems="center" gap={1}>
          {icon ? (
            <IconButton title="Attach File" onClick={addedFile ? null : () => inputRef?.current?.click()}>
              <AttachFile />
            </IconButton>
          ) : (
            <Button variant={btnVariant} onClick={addedFile ? null : () => inputRef?.current?.click()}>
              <Typography
                className={`${addedFile ? '' : 'pointer'}`}
                color="white"
                variant="subtitle2"
                component="label"
              >
                {addedFile ? 'update profile' : btnText}
              </Typography>
            </Button>
          )}

          {addedFile && (
            <IconButton
              onClick={e => {
                e.stopPropagation();
                setAddedFile(null);
                setValue('');
              }}
              title="Remove"
              size="small"
              sx={{
                backgroundColor: primary,
                color: 'white',
                '&:hover': {
                  backgroundColor: primary,
                },
              }}
            >
              <Remove fontSize="inherit" />
            </IconButton>
          )}
        </Stack>

        {error && <Typography variant="error">{error}</Typography>}
      </Box>
    );
  }
  return (
    <Box>
      <Box className={styles.wrapper}>
        <input
          value=""
          name={name}
          ref={inputRef}
          type="file"
          accept={accept}
          hidden
          onChange={handleChange}
        />

        <Box
          sx={fileBoxFieldStyles}
          className={styles.fieldBoxWrapper}
          onClick={() => inputRef.current?.click()}
        >
          <InsertDriveFile sx={iconButtonStyles} />

          <Typography variant="body1" sx={{ fontSize: '18px' }} className="fw-500">
            {addedFile || btnText}
          </Typography>
        </Box>
      </Box>

      {error && <Typography variant="error">{error}</Typography>}
    </Box>
  );
}

FormikFileField.propTypes = {
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  minimal: propTypes.bool,
  icon: propTypes.bool,
  accept: propTypes.string,
  btnText: propTypes.string,
  btnVariant: propTypes.string,
  fileTypeValidator: propTypes.func, // should return { isValid:Boolean, errorMessage(optional):String }
};

export default FormikFileField;
