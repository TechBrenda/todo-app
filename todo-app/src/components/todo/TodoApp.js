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
      username: ''
    }
  }
  
  componentDidMount() {
    if (AuthenticationService.isUserLoggedIn()) {
      this.setState({
        isUserLoggedIn: true,
        username: AuthenticationService.getUser()
      })
    }
  }

  loginUser = (username, password) => {
    this.setState({
      isUserLoggedIn: true,
      username
    })
    AuthenticationService.registerSuccessfulLogin(username, password)
  }

  logoutUser = () => {
    this.setState({
      isUserLoggedIn: false,
      username: ''
    })
    AuthenticationService.logout()
  }
  
  renderLogin = routeProps => <Login {...routeProps} loginUser={this.loginUser} />

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
              render={this.renderLogin}
            />
            <Route
              path='/login'
              exact
              render={this.renderLogin}
            />
            <AuthenticatedRoute
              path='/welcome/:name'
              exact
              component={Welcome}
            />
            <AuthenticatedRoute path='/todo/:id' render={routeProps => (
              <Todo {...routeProps} username={AuthenticationService.getUser()} />
              )}
            />
            <AuthenticatedRoute path='/todo' render={routeProps => (
              <TodoList {...routeProps} username={AuthenticationService.getUser()} />
              )}
            />
            <AuthenticatedRoute path='/logout' component={Logout} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default TodoApp
