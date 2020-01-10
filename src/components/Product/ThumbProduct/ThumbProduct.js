import React from 'react';
import GenericProduct from '../../../assets/images/generic-product.jpg'
import classes from './ThumbProduct.module.css'

const thumbProduct = (props) => {
  return (
    <div className={classes.ThumbProduct}>
      <img className={classes.ProductImage} src={GenericProduct} alt={props.product.name} />
      <div className={classes.Info}>
        <span><strong>{props.product.name}</strong></span>
        <span>Quantity: {props.quantity}</span>
        <span>Unit Price: $ {props.product.price}</span>
        <span>Total: $ {(props.quantity * props.product.price).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default thumbProduct;