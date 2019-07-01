import React, { Component } from 'react'
import Login from './Login'
import './TodoApp.css'

class TodoApp extends Component {
  render () {
    return (
      <div className='TodoApp'>
        <Login />
      </div>
    )
  }
}

export default TodoApp
