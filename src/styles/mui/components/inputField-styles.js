import { primary } from 'styles/common/colors';

export const getFieldStyles = state => ({
  border: '1px solid #ced4da',
  color: '#232329',
  background: 'white',
  width: '100%',
  padding: '5px 10px',
  fontSize: '12px',
  height: '38px',
  transition: 'border 0.3s',
  borderColor: state?.isFocused ? primary : '#ced4da',

  ':hover': {
    borderColor: primary,
  },
});

export const getFieldOptionStyles = (base, state) => ({
  ...base,
  // eslint-disable-next-line no-nested-ternary
  backgroundColor: state?.isSelected ? primary : state?.isFocused ? '#DEEBFF' : 'white',
  fontSize: '12px',
});
