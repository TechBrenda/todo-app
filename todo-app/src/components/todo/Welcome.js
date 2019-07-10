import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      welcomeMessage: ''
    }
  }

  getWelcomeMessage = () => {
    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    ).then(response => this.handleSuccessfulResponse(response))
    .catch(error => this.handleError(error))
  }

  handleSuccessfulResponse = response => {
    console.log(response)
    this.setState({ welcomeMessage: response.data.message })
  }
  
  handleError = error => {
    console.log(error.response)
    this.setState({ welcomeMessage: error.response.data.message })
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
        <div className='container'>{this.state.welcomeMessage}</div>
      </div>
    )
  }
}

export default Welcome
