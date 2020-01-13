import React, { Component } from 'react';
import classes from './ProductDetail.module.css';
import GenericProduct from '../../../assets/images/generic-product.jpg'
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

/**
 * Show the Detail of a product
 */
class ProductDetail extends Component {
  state = {
    quantity: 0,
  }

  /**
   * when updating the quantity input, updates the value in the state
   */
  quantityChangeHandler = (event) => {
    this.setState({ quantity: +event.target.value });
  }

  render() {
    return (
      <Auxiliar>
        <div className={classes.ProductDetail}>
          <div className={classes.ImageContainer}>
            <img className={classes.ProductImage} src={GenericProduct} alt={this.props.product.name} />
          </div>
          <div className={classes.DetailContainer}>
            <h3>{this.props.product.name}</h3>
            <p>{this.props.product.description}</p>
            <span>$ {Number.parseFloat(this.props.product.price).toFixed(2)}</span>
            <div>Quantity: <input type='number' placeholder="Quantity" onChange={this.quantityChangeHandler} value={this.state.quantity}/></div>
            <button disabled={this.state.quantity <= 0} onClick={() => this.props.productAdded(this.state.quantity)}>ADD TO SHOPPING LIST</button>
          </div>
        </div>
      </Auxiliar>
    );
  }
}

export default ProductDetail;
