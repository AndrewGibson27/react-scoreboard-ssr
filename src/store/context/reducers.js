const initialState = {
  error: false,
  errorMessage: '',
  loading: false,
  routeRefresh: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: true,
        errorMessage: action.message,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        error: false,
        errorMessage: '',
        loading: true,
      };
    case 'SET_ROUTE_REFRESH':
      return {
        ...state,
        routeRefresh: true,
      };
    case 'SET_READY':
      return initialState;
    default:
      return state;
  }
};
