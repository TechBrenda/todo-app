import React from 'react'
import moment from 'moment'
import TodoDataService from '../../api/todo/TodoDataService'

class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    TodoDataService.getAllTodos(this.props.username).then(response => {
      this.setState({ todos: response.data })
    })
  }
  
  updateTodo = id => {
    this.props.history.push(`/todo/${id}`)
  }

  deleteTodo = id => {
    TodoDataService.deleteTodo(this.props.username, id).then(response => {
      let todos = this.state.todos.filter(todo => todo.id !== id)
      this.setState({ todos })
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{moment(todo.targetDate).utc().format('YYYY-MM-DD')}</td>
                <td>{todo.done.toString()}</td>
                <td>
                  <button
                    className='btn btn-success'
                    onClick={() => this.updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-warning'
                    onClick={() => this.deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TodoList
