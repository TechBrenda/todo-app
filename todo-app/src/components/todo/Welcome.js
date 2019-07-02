import React, { Component } from 'react'
import TodoList from './TodoList'

class Welcome extends Component {
  render () {
    return (
      <div>
        <h2>Welcome {this.props.match.params.name}</h2>
        <TodoList />
      </div>
    )
  }
}

export default Welcome
