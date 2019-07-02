import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: { id: 1, description: 'Learn React' }
    }
  }

  render () {
    return (
      <div>
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.todo.id}</td>
              <td>{this.state.todo.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TodoList
