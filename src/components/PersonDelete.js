import React from 'react';
import axios from 'axios';
import API from './api';

export default class PersonDelete extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }
  // cách 1 
  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  // cách 2
  handleSubmit1 = event => {
    event.preventDefault();

    API.delete(`users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  // Cách sử dụng async await
  handleSubmit2 = async event => {
    event.preventDefault();

    // Promise is resolved and value is inside of the response const.
    const response = await API.delete(`users/${this.state.id}`);

    console.log(response);
    console.log(response.data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}