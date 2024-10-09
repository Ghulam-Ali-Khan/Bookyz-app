import { styled } from '@mui/material';
import { border, disabled, primary } from '@/styles/common/colors';

const StyledInputField = styled('input')(props => ({
  border: `1px solid ${border}`,
  color: '#232329',
  background: 'white',
  width: '100%',
  fontSize: '12px',
  padding: props.isSmall ? '2px 4px' : '5px 10px',
  height: props?.isSmall ? '28px' : '38px',
  transition: 'border 0.3s',
  borderRadius: '4px',

  '&:hover': {
    borderColor: primary,
  },

  '&:focus': {
    borderColor: primary,
    outline: 'none',
  },

  '&:disabled': {
    background: disabled,
  },
}));

export default StyledInputField;
