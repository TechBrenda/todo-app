import React, { Component } from 'react'

class Login extends Component {
  render () {
    return (
      <div>
        <span>User Name:</span>
        <input type='text' name='username' />
        <span>Password:</span>
        <input type='password' name='password' />
        <button>Login</button>
      </div>
    )
  }
}

export default Login
