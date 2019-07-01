import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'techbrenda',
      password: ''
    }
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  render () {
    return (
      <div>
        <span>User Name:</span>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <span>Password:</span>
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button>Login</button>
      </div>
    )
  }
}

export default Login
