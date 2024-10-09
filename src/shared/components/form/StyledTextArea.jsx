import { styled } from '@mui/material';
import { border, disabled, primary } from '@/styles/common/colors';

const StyledTextArea = styled('textarea')(() => ({
  border: `1px solid ${border}`,
  color: '#232329',
  background: 'white',
  width: '100%',
  padding: '5px 10px',
  fontSize: '12px',
  transition: 'border 0.3s',
  borderRadius: '4px',
  resize: 'none',
  ':hover': {
    borderColor: primary,
  },

  ':focus': {
    borderColor: primary,
    outline: 'none',
  },

  ':disabled': {
    background: disabled,
  },
}));

export default StyledTextArea;
