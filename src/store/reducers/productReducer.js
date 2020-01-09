import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  error: '',
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (actionTypes) {
    case actionTypes.SET_PRODUCTS:
      return { 
        ...state,
        products: action.products,
        loading: false,
        error: '',
      }
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      }
    default: 
      return state;
  };
}

export default reducer;
