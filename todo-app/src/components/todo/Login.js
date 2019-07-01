import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'techbrenda',
      password: '',
      isLoggedIn: false,
      loginMessage: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLogin = () => {
    if (
      this.state.username === 'techbrenda' &&
      this.state.password === 'apples'
    ) {
      console.log('Successful')
      this.setState({
        isLoggedIn: true,
        loginMessage: 'Login Successful'
      })
    } else {
      console.log('Failed')
      this.setState({
        isLoggedIn: false,
        loginMessage: 'Invalid Credentials'
      })
    }
  }

  render () {
    return (
      <div>
        <div>{this.state.loginMessage}</div>
        <span>User Name:</span>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <span>Password:</span>
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login
