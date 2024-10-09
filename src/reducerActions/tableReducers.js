export const paginationReducer = (state, action) => {
  switch (action.type) {
    case 'page':
      return { ...state, page: action.payload };

    case 'rowsPerPage': {
      return { page: 0, rowsPerPage: action.payload };
    }

    default:
      return state;
  }
};

export const sortingReducer = (state, action) => {
  switch (action.type) {
    case 'order':
      return { ...state, order: action.payload };

    case 'orderBy':
      return { ...state, orderBy: action.payload };

    case 'sort':
      return action.payload;

    default:
      return state;
  }
};
