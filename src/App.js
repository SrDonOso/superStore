import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Products from './containers/Products/Products';
import classes from './App.module.css';
import AddProduct from './components/Product/AddProduct';
import OpenProduct from './containers/OpenProduct/OpenProduct';

/**
 * Main application component
 */
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/product/:id" component={OpenProduct}/>
            <Route path="/addproduct" exact component={AddProduct} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
