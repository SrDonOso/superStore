import React, { Component } from 'react';
import classes from './ProductDetail.module.css';
import GenericProduct from '../../../assets/images/generic-product.jpg'
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';
import * as actions from '../../../store/actions/index';
import axios from '../../../services/axios-config';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../UI/Spinner/Spinner';

class ProductDetail extends Component {
  state = {
    quantity: 0,
  }

  componentDidMount() {
    this.props.onGetProduct(this.props.productSku);
  }

  quantityChangeHandler = (event) => {
    this.setState({ quantity: +event.target.value });
  }

  addToShoppingListHandler = () => {
    this.props.onAddProductToShoppingList(this.props.product, this.state.quantity);
    this.props.history.push('/');
  }

  render() {
    let product = <Spinner />;

    if (!this.props.loading && this.props.product) {
      product = (
        <div className={classes.ProductDetail}>
          <div className={classes.ImageContainer}>
            <img className={classes.ProductImage} src={GenericProduct} alt={this.props.product.name} />
          </div>
          <div className={classes.DetailContainer}>
            <h3>{this.props.product.name}</h3>
            <p>{this.props.product.description}</p>
            <span>$ {Number.parseFloat(this.props.product.price).toFixed(2)}</span>
            <div>Quantity: <input type='number' placeholder="Quantity" onChange={this.quantityChangeHandler} value={this.state.quantity}/></div>
            <button disabled={this.state.quantity <= 0} onClick={this.addToShoppingListHandler}>ADD TO SHOPPING LIST</button>
          </div>
        </div>);
    }

    return (
      <Auxiliar>
        {product}
      </Auxiliar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    productSku: state.productSku,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProduct: (productSku) => dispatch(actions.getProduct(productSku)),
    onAddProductToShoppingList: (product, quantity) => dispatch(actions.addToShoppingList(product, quantity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ProductDetail, axios));
