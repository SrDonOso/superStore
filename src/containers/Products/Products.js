import React, { Component } from 'react';
import ProductList from '../../components/Product/ProductList/ProductList';
import classes from './Product.module.css';
import * as actions from '../../store/actions/index';
import axios from '../../services/axios-config';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Products extends Component {
  componentDidMount() {
    this.props.onLoadingProducts();
  }

  render() {
    let products = <Spinner />;
    if (!this.props.loading) {
      products = <ProductList products={this.props.products} />;
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
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadingProducts: () => dispatch(actions.getProducts()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Products, axios));
