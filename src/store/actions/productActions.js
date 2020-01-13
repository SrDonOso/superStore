import * as actionTypes from './actionTypes';
import axios from '../../services/axios-config';

/**
 * action that set a list of products for the state
 * @param {List of products} products 
 */
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};

/**
 * when the service fails it sets the error for the state
 * @param {error message} error 
 */
export const fetchFailed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error,
  };
};

/**
 * indicate when the service will begin 
 */
export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START,
  }
}

/**
 * call to the service to get the list of products
 */
export const getProducts = () => {
  return dispatch => {
    dispatch(fetchStart());
    axios.get('/products.json')
      .then(response => {
        const fetchProducts = [];
        for (let key in response.data) {
          fetchProducts.push({
            ...response.data[key],
            price: +response.data[key].price,
          });
        }
        dispatch(setProducts(fetchProducts));
      })
      .catch(error => dispatch(fetchFailed(error)));
  }
}

/**
 * Order the product list by price
 * @param {List of products} products 
 * @param {Order for the list to be shown ('asc' or 'desc')} order 
 */
export const orderProductList = (products, order) => {
  const orderedProducts = products.concat();
  if (order === 'asc') {
    orderedProducts.sort((a,b) => (+a.price) - (+b.price));
  } else if (order === 'desc') {
    orderedProducts.sort((a,b) => (+a.price) - (+b.price)).reverse();
  }
  return {
    type: actionTypes.ORDER_PRODUCT_LIST,
    products: orderedProducts,
    order: order,
  }
}

/**
 * Set a specific product to the state
 * @param {Selected Product} product 
 */
export const setProduct = (product) => {
  return {
    type: actionTypes.SET_PRODUCT,
    product: product,
  };
};

/**
 * Get a selected product and set it to the state
 * @param {id for the product} productSku 
 */
export const getProduct = (productSku) => {
  return dispatch => {
    dispatch(fetchStart());
    axios.get('/products.json', { params: { sku: productSku } })
      .then(response => {
        const fetchProducts = [];
        for (let key in response.data) {
          fetchProducts.push({
            ...response.data[key],
          });
        }
        dispatch(setProduct(fetchProducts.find(x => x.sku === productSku)));
      })
      .catch(error => dispatch(fetchFailed(error)));
  }
}

/**
 * Adds a product to the state to used in the shopping cart
 * @param {selected product} product 
 * @param {quantity of the specified product added to the shopping list} quantity 
 */
export const addToShoppingList = (product, quantity) => {
  const productAdded = {
    product: product,
    quantity: quantity
  }
  return {
    type: actionTypes.ADD_TO_SHOPPING_LIST,
    productAdded: productAdded, 
  }
}