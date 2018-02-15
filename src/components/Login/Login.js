import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name] : value
    });
  }

  render() {
    return(
      <div>
        <input type='email'
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Login;

