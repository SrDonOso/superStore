import React, { Component } from 'react';
import axios from '../../services/axios-config';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class AddProduct extends Component {
  state = {
    sky: '',
    name: '',
    description: '',
    price: 0,
  }

  onValueChange = (event, id) => {
    const updatedForm = {
      ...this.state
    };
    updatedForm[id] = event.target.value;
    this.setState(updatedForm);
  }

  saveProductHandler = (event) => {
    event.preventDefault();
    const productData = {
      sku: this.state.sku,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price
    };

    axios.put('/products.json', productData)
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
