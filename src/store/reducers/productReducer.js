import * as actionTypes from '../actions/actionTypes';

/**
 * state shared in the application
 */
const initialState = {
  products: [],
  product: null,
  shoppingList: [],
  error: '',
  order: '',
  loading: false,
}

/**
 * Reducer that handles and update the state
 * @param {state to be updated} state 
 * @param {action to execute} action 
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { 
        ...state,
        products: action.products,
        loading: false,
        error: '',
      }
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.FETCH_START:
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
    case actionTypes.SET_PRODUCT: 
      return {
        ...state,
        product: action.product,
        loading: false,
        error: '',
      }
    case actionTypes.ADD_TO_SHOPPING_LIST:
      const newShoppingList = state.shoppingList.concat();
      newShoppingList.push(action.productAdded);
      return {
        ...state,
        shoppingList: newShoppingList,
      }
    default:
      return state;
  };
}

export default reducer;
