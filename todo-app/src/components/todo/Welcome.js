import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  render () {
    return (
      <div>
        Welcome {this.props.match.params.name}.<br />
        <Link to='/todo'>Manage your Todos</Link>
      </div>
    )
  }
}

export default Welcome
