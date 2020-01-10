import React from 'react';
import classes from './Product.module.css';
import GenericProduct from '../../../assets/images/generic-product.jpg';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const product = (props) => {
  const setProductIdHandler = () => {
    props.onSetProductId(props.sku);
    props.history.push('/product');
  }

  return (
    <div className={classes.Product}>
      <img className={classes.ProductImage} src={GenericProduct} alt={props.name} />
      <button className={classes.ButtonAsLink} onClick={setProductIdHandler}><h4>{props.name}</h4></button>
      <p className={classes.Description}>{props.description}</p>
      <span>$ {props.price.toFixed(2)}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productId: state.productId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetProductId: (productSku) => dispatch(actions.setProductId(productSku)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(product);
