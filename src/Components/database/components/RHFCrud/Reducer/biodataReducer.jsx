export const initialState = {
  list: [],
  editData: null,
  page: 1,
  limit: 5,
  totalCount: 0,
  search: ""
};

export const biodataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        list: action.payload.data,
        totalCount: action.payload.total
      };

    case "SET_PAGE":
      return { ...state, page: action.payload };

    case "SET_SEARCH":
      return { ...state, search: action.payload, page: 1 };

    case "SET_EDIT":
      return { ...state, editData: action.payload };

    case "CLEAR_EDIT":
      return { ...state, editData: null };

    default:
      return state;
  }
};

export default biodataReducer;
