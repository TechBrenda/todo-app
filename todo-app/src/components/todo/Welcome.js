import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
  getWelcomeMessage = () => {
    console.log('Welcome button clicked')
  }

  render () {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className='container'>
          Welcome {this.props.match.params.name}.&nbsp;
          <Link to='/todo'>Manage your Todos</Link>
        </div>
        <div className='container'>
          Click here to get a customized welcome message.
          <br />
          <button className='btn btn-success' onClick={this.getWelcomeMessage}>
            Get Welcome Message
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
