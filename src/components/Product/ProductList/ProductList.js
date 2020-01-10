import React from 'react';
import classes from './ProductList.module.css';
import Product from '../Product/Product';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';

const productList = (props) => {
  const sortedChangedHandler = (event) => {
    props.onSortingChanged(props.products, event.target.value);
  }

  return (
    <Auxiliar>
      <select className={classes.OrderDropdown} onChange={sortedChangedHandler} value={props.order} >
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
      <div className={classes.ProductList}>
        {props.products.map(product => (
          <Product key={product.sku} sku={product.sku} history={props.history} name={product.name} description={product.description} price={product.price} />
        ))}
      </div>
    </Auxiliar>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    order: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortingChanged: (products, order) => dispatch(actions.orderProductList(products, order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(productList);
