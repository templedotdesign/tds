//Core
import React, { Component } from 'react';

//Components
import TextInput from './textInput/textInput';

class ContactForm extends Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = (event, id) => {
    this.setState({...this.state, [id]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <TextInput label='Name:' value={this.state.name} changed={(event) => {this.handleChange(event, 'name')}}/>
        <TextInput label='Email:' value={this.state.email} changed={(event) => {this.handleChange(event, 'email')}}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default ContactForm;