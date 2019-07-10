import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    let { username } = this.props
    console.log(username)
    TodoDataService.getAllTodos(username).then(response => {
      this.setState({ todos: response.data })
    })
  }

  render () {
    return (
      <div className='container'>
        <h1>List Todos</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Target Date</th>
              <th>Completed?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>{todo.done.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TodoList
