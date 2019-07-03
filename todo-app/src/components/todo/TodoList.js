import React, { Component } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Learn to Dance',
          done: false,
          targetDate: new Date()
        },
        {
          id: 2,
          description: 'Become an Expert at React',
          done: false,
          targetDate: new Date()
        },
        {
          id: 3,
          description: 'Visit India',
          done: false,
          targetDate: new Date()
        }
      ]
    }
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
