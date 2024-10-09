import { primary, grey, border } from '../common/colors';

const selectContainerCommonStyles = {
  border: `1px solid ${grey}`,
  borderRadius: '1px',
  color: '#232329',
  background: 'white',
  width: '100%',
  fontSize: '12px',
  transition: 'border 0.3s',

  ':hover': {
    borderColor: grey,
  },

  ':focus': {
    borderColor: primary,
    outline: 'none',
  },

  ':disabled': {
    background: primary,
  },
};
const searchSelectContainerCommonStyles = {
  border: `1px solid ${border}`,
  borderRadius: '0px',
  color: '#506172',
  background: 'white',
  width: '100%',
  fontSize: '16px',
  transition: 'border 0.3s',

  ':focus': {
    outline: 'none',
  },

  ':disabled': {
    background: primary,
  },
};

const commonControlStyles = {
  height: '38px',
  border: 'none',
  boxShadow: 'none',

  ':disabled': {
    background: primary,
  },
};

const SearchControlStyles = {
  height: '56px',
  border: 'none',
  boxShadow: 'none',

  ':disabled': {
    background: primary,
  },
};

const multiValueCommonStyles = { backgroundColor: 'white', border: `1px solid ${primary}` };

const commonMultiSelectControlStyles = { borderRadius: '0px', border: 'none', boxShadow: 'none' };

export const getFieldOptionStyles = (base, state) => {
  const bg = (() => {
    if (state?.isSelected) {
      return primary;
    }

    if (state?.isFocused) {
      return primary;
    }
    return 'white';
  })();

  const color = (() => {
    if (state?.isSelected) {
      return 'white';
    }

    if (state?.isFocused) {
      return 'white';
    }
    return 'black';
  })();

  return {
    ...base,
    backgroundColor: bg,
    color,
    fontSize: '12px',
    transition: 'all 200ms',
    ':active': {
      backgroundColor: primary,
      color
    },
  };
};

export const getFormikSelectControlStyles = base => ({
  ...base,
  ...commonControlStyles,
});

export const getFormikSearchSelectControlStyles = base => ({
  ...base,
  ...SearchControlStyles,
});

export const getFormikCreatableSelectControlStyles = base => ({
  ...base,
  ...commonControlStyles,

  ':hover': {
    borderColor: primary,
    color: 'white',
  },

  ':focus': {
    border: `1px solid ${primary}`,
    outline: 'none',
  },
});

export const getFormikSelectContainerStyles = base => ({
  ...base,
  ...selectContainerCommonStyles,
});

export const getFormikSearchSelectContainerStyles = base => ({
  ...base,
  ...searchSelectContainerCommonStyles,
});

export const getFormikCreatableSelectContainerStyles = base => ({
  ...base,
  ...selectContainerCommonStyles,
});

export const getFormikMultiSelectContainerStyles = base => ({
  ...base,
  ...selectContainerCommonStyles,
});

export const getFormikCreatableMultiSelectContainerStyles = base => ({
  ...base,
  ...selectContainerCommonStyles,
});

export const getFormikMultiSelectControlStyles = base => ({
  ...base,
  ...commonMultiSelectControlStyles,
});

export const getFormikCreatableMultiSelectControlStyles = base => ({
  ...base,
  ...commonMultiSelectControlStyles,
});

export const getFormikMultiSelectMultiValStyles = base => ({
  ...base,
  ...multiValueCommonStyles,
});

export const getFormikCreatableMultiSelectMultiValStyles = base => ({
  ...base,
  ...multiValueCommonStyles,
});

export const getFormikMultiSelectMultiValRemoveStyles = base => ({
  ...base,
  backgroundColor: primary,
});

export const formikMultiSelectStyles = {
  menuPortal: base => ({ ...base, zIndex: 1700 }),
  container: getFormikMultiSelectContainerStyles,
  control: getFormikMultiSelectControlStyles,
  multiValue: getFormikMultiSelectMultiValStyles,
  multiValueRemove: getFormikMultiSelectMultiValRemoveStyles,
  option: getFieldOptionStyles,
};

export const formikSelectStyles = {
  menuPortal: base => ({ ...base, zIndex: 1700 }),
  option: getFieldOptionStyles,
  container: getFormikSelectContainerStyles,
  control: getFormikSelectControlStyles,
};

export const formikSearchSelectStyles = {
  menuPortal: base => ({ ...base, zIndex: 1700 }),
  option: getFieldOptionStyles,
  container: getFormikSearchSelectContainerStyles,
  control: getFormikSearchSelectControlStyles,
};

export const formikCreatableMultiSelectStyles = {
  menuPortal: base => ({ ...base, zIndex: 1700 }),
  container: getFormikCreatableMultiSelectContainerStyles,
  control: getFormikCreatableMultiSelectControlStyles,
  multiValue: getFormikCreatableMultiSelectMultiValStyles,
  option: getFieldOptionStyles,
  multiValueRemove: base => ({
    ...base,
    backgroundColor: primary,
  }),
};

export const formikCreatableSelectStyles = {
  menuPortal: base => ({ ...base, zIndex: 1700 }),
  option: getFieldOptionStyles,
  container: getFormikCreatableSelectContainerStyles,
  control: getFormikCreatableSelectControlStyles,
};
