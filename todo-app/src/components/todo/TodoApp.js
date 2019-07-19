import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './TodoApp.css'
import Login from './Login'
import Welcome from './Welcome'
import TodoList from './TodoList'
import Todo from './Todo'
import Error from './Error'
import Header from './Header'
import Footer from './Footer'
import Logout from './Logout'
import AuthenticatedRoute from './AuthenticatedRoute'
import AuthenticationService from './AuthenticationService'

class TodoApp extends Component {
  constructor () {
    super()
    this.state = {
      isUserLoggedIn: false,
      username: AuthenticationService.getUser()
    }
  }

  componentDidMount () {
    if (AuthenticationService.isUserLoggedIn()) {
      this.setState({
        isUserLoggedIn: true,
        username: AuthenticationService.getUser()
      })
    }
  }

  loginUser = (username) => {
    this.setState({
      isUserLoggedIn: true,
      username
    })
  }

  logoutUser = () => {
    this.setState({
      isUserLoggedIn: false,
      username: ''
    })
    AuthenticationService.logout()
  }

  render () {
    return (
      <div className='TodoApp'>
        <Router>
          <Header
            isUserLoggedIn={this.state.isUserLoggedIn}
            logoutUser={this.logoutUser}
          />
          <Switch>
            <Route
              path='/'
              exact
              render={routeProps => (
                <Login {...routeProps} loginUser={this.loginUser} />
              )}
            />
            <AuthenticatedRoute
              path='/welcome/:name'
              exact
              component={Welcome}
            />
            <AuthenticatedRoute
              path='/todo/:id'
              render={routeProps => (
                <Todo
                  {...routeProps}
                  username={this.state.username}
                />
              )}
            />
            <AuthenticatedRoute
              path='/todo'
              render={routeProps => (
                <TodoList
                  {...routeProps}
                  username={this.state.username}
                />
              )}
            />
            <Route path='/logout' component={Logout} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default TodoApp
