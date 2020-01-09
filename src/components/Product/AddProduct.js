import React, { Component } from 'react';
import axios from '../../services/axios-config';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class AddProduct extends Component {
  state = {
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
          <input type="text" placeholder="Name" value={this.state.name} onChange={(event) => this.onValueChange(event, 'name')} />
          <textarea placeholder="Description" value={this.state.description} onChange={(event) => this.onValueChange(event, 'description')} />
          <input type="number" placeholder="Price" value={this.state.price} onChange={(event) => this.onValueChange(event, 'price')} />
          <button onClick={this.saveProduct}>SAVE</button>
        </form>
      </div>
    );
  }
}

export default withErrorHandler(AddProduct, axios);
