import React from 'react';
import classes from './Product.module.css';
import GenericProduct from '../../../assets/images/generic-product.jpg';

/**
 * component that will show a product
 */
const product = (props) => {
  return (
    <div className={classes.Product}>
      <img className={classes.ProductImage} src={GenericProduct} alt={props.name} />
      <button className={classes.ButtonAsLink} onClick={() => props.productSelected(props.sku)}><h4>{props.name}</h4></button>
      <p className={classes.Description}>{props.description}</p>
      <span>$ {props.price.toFixed(2)}</span>
    </div>
  );
}

export default product;
