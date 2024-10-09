import { styled, TextField as MuiTextField } from '@mui/material';
import colors from '@/styles/common/colors';

const TextField = styled(MuiTextField)({
  width: '100%',

  '& .MuiInputBase-root.MuiOutlinedInput-root': {
    '& input': {
      color: '#232329',
      background: 'white',
      width: '100%',
      fontSize: '12px',
      height: '28px',
      transition: 'all 0.3s',
      padding: '5px 10px',
    },

    borderRadius: '0',

    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.primary,
        borderWidth: '1px',
      },
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ced4da',
    },

    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: colors.primary,
        borderWidth: '1px',
      },
    },

    '&.Mui-disabled': {
      '& input': {
        color: '#232329',
        background: colors.disabled,
        // '-webkit-text-fill-color': '#232329',
      },
    },
  },

  '& .MuiInputAdornment-root': {
    '& button': {
      borderRadius: '0',
    },

    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
});

export default TextField;
