import React from 'react'

class Todo extends React.Component {
  render () {
    return <div>Todo: {this.props.match.params.id}</div>
  }
}

export default Todo
