import React, { Component } from 'react';
import axios from '../../services/axios-config';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

/**
 * Component that has a form to add new products to the database
 */
class AddProduct extends Component {
  state = {
    sku: '',
    name: '',
    description: '',
    price: 0,
  }

  /**
   * sets the value of the specified control to the state
   */
  onValueChange = (event, id) => {
    const updatedForm = {
      ...this.state
    };
    updatedForm[id] = event.target.value;
    this.setState(updatedForm);
  }

  /**
   * call to the service to add a new product to the database
   */
  saveProductHandler = (event) => {
    event.preventDefault();
    const productData = {
      sku: this.state.sku,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price
    };

    axios.post('/products.json', productData)
      .then(response => {
        this.props.history.replace('/');
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.saveProductHandler}>
          <div>
            <input type="text" placeholder="SKU" value={this.state.sku} onChange={(event) => this.onValueChange(event, 'sku')} />
          </div>
          <div>
            <input type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.onValueChange(event, 'name')} />
          </div>
          <div>
            <textarea placeholder="Description" value={this.state.description} onChange={(event) => this.onValueChange(event, 'description')} />
          </div>
          <div>
            <input type="number" placeholder="Price" value={this.state.price} onChange={(event) => this.onValueChange(event, 'price')} />
          </div>
          <div>
            <button onClick={this.saveProduct}>SAVE</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withErrorHandler(AddProduct, axios);
