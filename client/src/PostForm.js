import React, { Component } from 'react';
import axios from 'axios';


class Test extends Component {

  state = {
    name: '',
    description: '',
    publisher: '',
    price: '',
    cover: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      cover: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('cover', this.state.cover, this.state.cover.name);
    form_data.append('name', this.state.name);
    form_data.append('description', this.state.description);
    form_data.append('publisher', this.state.publisher);
    form_data.append('price', this.state.price);
    let url = 'http://localhost:8000/comics/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Name' id='name' value={this.state.name} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Description' id='description' value={this.state.description} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="text" placeholder='Publisher' id='publisher' value={this.state.publisher} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Price' id='price' value={this.state.price} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="cover"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Test;