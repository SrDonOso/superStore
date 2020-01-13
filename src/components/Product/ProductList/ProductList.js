import React from 'react';
import classes from './ProductList.module.css';
import Product from '../Product/Product';
import { connect } from 'react-redux';

const productList = (props) => {
  return (
    <div className={classes.ProductList}>
      {props.products.map(product => (
        <Product 
          key={product.sku} 
          sku={product.sku}
          name={product.name} 
          description={product.description} 
          price={product.price} 
          productSelected={() => props.productSelected(product.sku)}/>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(productList);
