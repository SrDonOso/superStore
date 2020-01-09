import React, { Component } from 'react';
import classes from './ProductList.module.css';
import Product from '../Product/Product';

class ProductList extends Component {
  render() {
    return (
      <div className={classes.ProductList}>
        {this.props.products.map(product => (
          <Product key={product.id} name={product.name} description={product.description} price={product.price} />
        ))}
      </div>
    );
  }
}

export default ProductList;
