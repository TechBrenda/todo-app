import React from 'react'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: -1,
      description: '',
      targetDate: new Date()
    }
  }

  render () {
    return <div>Todo: {this.props.match.params.id}</div>
  }
}

export default Todo
