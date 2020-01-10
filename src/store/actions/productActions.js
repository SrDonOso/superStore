import * as actionTypes from './actionTypes';
import axios from '../../services/axios-config';

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};

export const fetchFailed = (error) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: error,
  };
};

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START,
  }
}

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

export const setProduct = (product) => {
  return {
    type: actionTypes.SET_PRODUCT,
    product: product,
  };
};

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

export const setProductId = (productSku) => {
  return {
    type: actionTypes.SET_PRODUCT_ID,
    productSku: productSku,
  }
}

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