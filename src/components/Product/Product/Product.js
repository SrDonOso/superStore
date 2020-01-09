import React from 'react';
import classes from './Product.module.css';
import GenericProduct from '../../../assets/images/generic-product.jpg';

const product = (props) => {
  return (
    <div className={classes.Product}>
      <img className={classes.ProductImage} src={GenericProduct} alt={props.name} />
      <a href={'/product/' + props.id}><h4>{props.name}</h4></a>
      <p className={classes.Description}>{props.description}</p>
      <span>$ {props.price.toFixed(2)}</span>
    </div>
  );
}

export default product;
