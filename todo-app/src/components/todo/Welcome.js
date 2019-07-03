import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  render () {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className='container'>
          Welcome {this.props.match.params.name}.&nbsp;
          <Link to='/todo'>Manage your Todos</Link>
        </div>
      </div>
    )
  }
}

export default Welcome
