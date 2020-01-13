import React, { Component } from 'react';
import ProductList from '../../components/Product/ProductList/ProductList';
import classes from './Product.module.css';
import * as actions from '../../store/actions/index';
import axios from '../../services/axios-config';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';

/**
 * Container that shows the list of products
 */
class Products extends Component {
  /**
   * dispatch an action to get the list of products for the store
   */
  componentDidMount() {
    this.props.onLoadingProducts();
  }

  /**
   * when the select order changes, executes an action to update the order of the product list
   */
  sortedChangedHandler = (event) => {
    this.props.onSortingChanged(this.props.products, event.target.value);
  }

  productSelectedHandler = (sku) => {
    this.props.history.push('/product/' + sku);
  }

  render() {
    let products = <Spinner />;
    if (!this.props.loading) {
      products = (
        <Auxiliar>
          <select className={classes.OrderDropdown} onChange={this.sortedChangedHandler} value={this.props.order} >
            <option value="">
              Select order
            </option>
            <option value="desc">
              Higher to Lower price
            </option>
            <option value="asc">
              Lower to Higher price
            </option>
          </select>
          <ProductList products={this.props.products} productSelected={this.productSelectedHandler} />
        </Auxiliar>
      );
    }
    return (
      <div className={classes.Product}>
        {products}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    error: state.error,
    loading: state.loading,
    order: state.order,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadingProducts: () => dispatch(actions.getProducts()),
    onSortingChanged: (products, order) => dispatch(actions.orderProductList(products, order))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Products, axios));
