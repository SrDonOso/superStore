import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  error: '',
  order: '',
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.ORDER_PRODUCT_LIST:
      return {
        ...state,
        products: action.products,
        order: action.order,
      }
    default:
      return state;
  };
}

export default reducer;
