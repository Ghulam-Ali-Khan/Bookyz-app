import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import propTypes from 'prop-types';
import { useField } from 'formik';
import { useSnackbar } from 'notistack';
import Dropzone from 'react-dropzone';

// STYLES
import { Image } from '@mui/icons-material';
import styles from '@/styles/components/dropzoneField.module.scss';

function FormikDropZone({ name, onChange = () => {}, src = '', multiple = false }) {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const [field, meta, helpers] = useField(name);
  const { value } = field;
  const { error, touched } = meta;
  const { setValue } = helpers;

  const [addedFile, setAddedFile] = useState(null);

  // THEME COLORS
  const colors = theme.palette;
  const muted = colors.muted.main;

  useEffect(() => {
    if (value !== undefined && value !== null && value?.length !== 0) {
      setAddedFile(value);
      setValue(value);
    } else {
      setAddedFile(null);
      setValue(null);
    }
  }, [value]);

  // HANDLERS
  const handleDropFiles = files => {
    const transformedFiles = files?.map(item => Object.assign(item, {
      preview: URL.createObjectURL(item),
    }));

    if (multiple) {
      setValue(transformedFiles);
      setAddedFile(transformedFiles);
      if (onChange) onChange(transformedFiles, name);
    } else {
      setValue(transformedFiles[0]);
      setAddedFile(transformedFiles[0]);
      if (onChange) onChange(transformedFiles[0], name);
    }
  };

  const handleDropReject = files => {
    if (files?.length > 0) {
      enqueueSnackbar('Unsupported file format', { variant: 'error' });
    }
  };

  const handleRemove = () => {
    setAddedFile(null);
    setValue(null);
  };

  return (
    <Box>
      <Box className={styles.wrapper} sx={{ height: multiple ? '80px' : '300px' }}>
        <Dropzone
          multiple={multiple}
          maxFiles={3}
          accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'], 'image/jpg': ['.jpg'] }}
          onDrop={handleDropFiles}
          onDropRejected={handleDropReject}
        >
          {({ getInputProps, getRootProps }) => (
            <Box {...getRootProps()} className={addedFile || src ? '' : styles.fieldBoxWrapper}>
              <input {...getInputProps()} />

              {!addedFile && !src && (
                <Typography variant="body3" color={muted}>
                  Drag file here to upload
                </Typography>
              )}
            </Box>
          )}
        </Dropzone>

        {(addedFile || src) && (
          <Box className={styles.fileBox}>
            {!multiple && <img src={src || addedFile?.preview} alt={addedFile?.name} />}

            <Button className={styles.removeBtn} onClick={handleRemove}>
              {multiple ? 'Remove All' : 'Remove'}
            </Button>
          </Box>
        )}
      </Box>

      {multiple && (
        <Stack mt={2} gap={1}>
          {addedFile?.map(file => (
            <Box className=" flex items-center gap-4">
              <Image /> {file?.name}{' '}
            </Box>
          ))}
        </Stack>
      )}

      {error && touched && <Typography variant="error">{error}</Typography>}
    </Box>
  );
}

FormikDropZone.propTypes = {
  onChange: propTypes.func,
  name: propTypes.string.isRequired,
  src: propTypes.string,
  multiple: propTypes.bool,
};

export default FormikDropZone;
