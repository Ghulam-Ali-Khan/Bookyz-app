import React from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

export const optionLabelFormatter = (option, metaData, handleDeleteOption) => {
  // eslint-disable-next-line no-underscore-dangle
  const isNew = option?.__isNew__;

  if (metaData.context === 'menu') {
    return (
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Typography variant="body2">{option.label}</Typography>

        {handleDeleteOption && !isNew && (
          <IconButton
            title="Delete Permanently"
            onClick={e => {
              e.stopPropagation();
              handleDeleteOption(option);
            }}
            size="small"
            color="error"
          >
            <Delete sx={{ fontSize: '18px' }} />
          </IconButton>
        )}
      </Stack>
    );
  }
  if (metaData.context === 'value') {
    if (!option.value) {
      return <Typography className="fontSm">{option.label}</Typography>;
    }

    return <Typography className="fontSm">{option.label}</Typography>;
  }
  return <Typography className="fontSm">{option.label}</Typography>;
};

export const test = '';
