import * as actionTypes from './actionTypes';
import axios from '../../services/axios-config';

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};

export const fetchProductsFailed = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED,
    error: error,
  };
};

export const fetchProductStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  }
}

export const getProducts = () => {
  return dispatch => {
    dispatch(fetchProductStart());
    axios.get('/products.json')
      .then(response => {
        const fetchProducts = [];
        for (let key in response.data) {
          fetchProducts.push({
            ...response.data[key],
            price: +response.data[key].price,
            id: key,
          });
        }
        dispatch(setProducts(fetchProducts));
      })
      .catch(error => dispatch(fetchProductsFailed(error)));
  }
}

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
