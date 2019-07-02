import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './TodoApp.css'
import Login from './Login'
import Welcome from './Welcome'
import TodoList from './TodoList'
import Error from './Error'

class TodoApp extends Component {
  render () {
    return (
      <div className='TodoApp'>
        <Router>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/login' exact component={Login} />
            <Route path='/welcome/:name' exact component={Welcome} />
            <Route path='/todo' component={TodoList} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default TodoApp
