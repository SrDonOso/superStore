import React, { Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
import { connect } from 'react-redux';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Auxiliar from '../../../hoc/Auxiliar/Auxiliar';
 
class NavigationItems extends Component {
  state = {
    toggleCart: false,
  }

  toggleCartHandler = () => {
    const toggle = !this.state.toggleCart;
    this.setState({toggleCart: toggle});
  }

  render() {
    const length = this.props.shoppingList.length;
    return (
      <Auxiliar>
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/" exact>Products</NavigationItem>
          <NavigationItem link="/addproduct" exact>Add Product</NavigationItem>
          <button onClick={this.toggleCartHandler} disabled={length === 0} className={classes.ShoppingListButton}>
            Cart {length > 0 ? '(' + length + ')' : ''}
          </button>
        </ul>
        {this.state.toggleCart ? <ShoppingCart shoppingList={this.props.shoppingList} /> : null}
      </Auxiliar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingList: state.shoppingList,
  }
}

export default connect(mapStateToProps)(NavigationItems);
