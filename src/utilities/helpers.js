/* eslint-disable no-undef */
export const handleSort = (array, comparator) => {
  const transformedArray = array?.map((obj, idx) => [obj, idx]);

  transformedArray?.sort((a, b) => {
    const order = comparator(a[0], b[0]);

    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });

  return transformedArray?.map(item => item[0]);
};

const descendingComparator = (a, b, orderBy) => {
  if (a[orderBy] < b[orderBy]) {
    return -1;
  }
  if (a[orderBy] > b[orderBy]) {
    return +1;
  }

  return 0;
};
export const getDateSorting = (order, orderBy) => {
  if (order === 'asc') {
    return (a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    };
  }
  return (a, b) => {
    if (a[orderBy] > b[orderBy]) {
      return -1;
    }
    if (a[orderBy] < b[orderBy]) {
      return 1;
    }
    return 0;
  };
};

export const getComparator = (order, orderBy) => {
  if (order === 'asc') {
    return (a, b) => -descendingComparator(a, b, orderBy);
  }

  return (a, b) => descendingComparator(a, b, orderBy);
};

export const getSorting = (order, orderBy) => {
  if (order === 'asc') {
    return (a, b) => {
      if (Number(a[orderBy]) < Number(b[orderBy])) {
        return -1;
      }
      if (Number(a[orderBy]) > Number(b[orderBy])) {
        return 1;
      }
      return 0;
    };
  }
  return (a, b) => {
    if (Number(a[orderBy]) > Number(b[orderBy])) {
      return -1;
    }
    if (Number(a[orderBy]) < Number(b[orderBy])) {
      return 1;
    }
    return 0;
  };
};
export const transformOptions = array => array?.map(item => ({
  ...item.response,
  last_message_time: item.response.last_message_time || item.response.room_created_at,
}));

export const setIconByFileType = type => {
  if (type?.includes('pdf')) return pdfFile;
  if (type?.includes('css')) return cssFile;
  if (
    type?.includes('image') ||
    type?.includes('png') ||
    type?.includes('jpg') ||
    type?.includes('jpeg') ||
    type?.includes('svg')
  ) {
    return imgFile;
  }
  if (type?.includes('ai')) return aiFile;
  if (type?.includes('sql')) return sqlFile;
  if (
    type?.includes('xls') ||
    type?.includes('xlsx') ||
    type?.includes('csv') ||
    type?.includes('ms-excel') ||
    type?.includes('spreadsheet')
  ) {
    return excelFile;
  }
  if (type?.includes('doc')) return docFile;

  return blankFile;
};

export const checkIsMessageSentByMe = (loggedId, ownerId) => loggedId === ownerId;

export const sortDataByDate = (data = []) => {
  const sortedData = [...data]?.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.updated_at);
    return dateB - dateA;
  });
  return sortedData;
};

export const formatChartKey = key => key
  .split('_')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

export function yupLowercaseValidator(value) {
  const containsUppercase = /[A-Z]/.test(value);
  return !containsUppercase;
}

export function formatAmount(amount = 0, options = { maximumFractionDigits: 2, minimumFractionDigits: 2 }) {
  try {
    const formattedAmount = amount.toLocaleString('en-US', options);
    if (formattedAmount) return formattedAmount;
    return amount;
  } catch (error) {
    // console.log(error);
    return '0.00';
  }
}
