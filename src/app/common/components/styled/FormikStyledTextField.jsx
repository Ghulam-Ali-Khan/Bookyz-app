import { styled, TextField } from '@mui/material';

const FormikStyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {

    '& .MuiInputBase-input': {
      padding: '12px 14px',
    },
    '&.Mui-focused': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
        borderLeftWidth: '4px',
        borderWidth: '1px',
      },
    },

    '&:hover': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },

    '& fieldset': {
      borderLeftWidth: '4px !important',
      borderLeftColor: theme.palette.primary.main,
    },
  },
}));

export default FormikStyledTextField;
