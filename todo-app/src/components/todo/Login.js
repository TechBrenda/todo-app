import React, { Component } from 'react'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'techbrenda',
      password: '',
      loginFailed: false
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
      this.props.history.push(`/welcome/${this.state.username}`)
    } else {
      console.log('Failed')
      this.setState({
        loginFailed: true
      })
    }
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <div className='container'>
          {this.state.loginFailed && (
            <div className='alert alert-warning'>Invalid Credentials</div>
          )}
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
          <button className='btn btn-success' onClick={this.handleLogin}>
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Login
