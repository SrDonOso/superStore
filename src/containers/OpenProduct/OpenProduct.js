import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar';
import * as actions from '../../store/actions/index';
import axios from '../../services/axios-config';
import { connect } from 'react-redux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import ProductDetail from '../../components/Product/ProductDetail/ProductDetail';

/**
 * Open a product getting the id from the querystring and pass it to the ProductDetail component
 */
class OpenProduct extends Component {
  /**
   * get the product id from the querystring and execute an action to get the product from the server
   */
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.onGetProduct(id);
  }

  /**
   * executes an action to add the product to the shoppingList and redirect to main page 
   */
  addToShoppingListHandler = (quantity) => {
    this.props.onAddProductToShoppingList(this.props.product, quantity);
    this.props.history.push('/');
  }


  render() {
    let product = <Spinner />;

    if (!this.props.loading && this.props.product) {
      product = <ProductDetail product={this.props.product} history={this.props.history} productAdded={this.addToShoppingListHandler} />;
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
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProduct: (productSku) => dispatch(actions.getProduct(productSku)),
    onAddProductToShoppingList: (product, quantity) => dispatch(actions.addToShoppingList(product, quantity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(OpenProduct, axios));
