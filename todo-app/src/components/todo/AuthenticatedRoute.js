import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

class AuthenticatedRoute extends Component {
  render () {
    if (this.props.username === '') {
      return <Redirect to='/' />
    } else {
      return <Route {...this.props} />
    }
  }
}

export default AuthenticatedRoute
