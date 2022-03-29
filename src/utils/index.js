export const initialState = {
  data: null,
  error: null,
  loading: true,
};
export const TYPES = {
  API_REQUEST: "API_REQUEST",
  API_SUCCESS: "API_SUCCESS",
  API_FAILURE: "API_FAILURE",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.API_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TYPES.API_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case TYPES.API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};
