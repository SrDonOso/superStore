import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  product: null,
  productSku: null,
  shoppingList: [],
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
    case actionTypes.SET_PRODUCT_ID:
      return {
        ...state,
        productSku: action.productSku,
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
