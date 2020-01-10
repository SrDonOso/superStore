import React from 'react';
import classes from './ShoppingCart.module.css';
import ThumbProduct from '../../Product/ThumbProduct/ThumbProduct';

const shoppingCart = (props) => {
  let granTotal = 0;

  if(props.shoppingList) {
    for (let item of props.shoppingList) {
      granTotal += +item.product.price * item.quantity;
    }
  }

  return (
    <div className={classes.ShoppingCart}>
      <header>
        <h2>Shopping Cart</h2>
        <p>You have {props.shoppingList.length} item{props.shoppingList.length > 1 ? 's' : ''}</p>
      </header>
      <section>
        {props.shoppingList.map(item => <ThumbProduct product={item.product} quantity={item.quantity}/>)}
      </section>
      <footer>
        <span><strong>Total: $ {granTotal.toFixed(2)}</strong></span>
      </footer>
    </div>
  );
}

export default shoppingCart;