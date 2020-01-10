import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Products from './containers/Products/Products';
import classes from './App.module.css';
import ProductDetail from './components/Product/ProductDetail/ProductDetail';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/product" exact component={ProductDetail}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
