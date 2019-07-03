import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class Header extends Component {
  render () {
    return (
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <Link to='/' className='navbar-brand'>Site</Link>
          </div>
          <ul className='navbar-nav'>
            <li><Link className='nav-link' to='/welcome/techbrenda'>Home</Link></li>
            <li><Link className='nav-link' to='/todo'>Todos</Link></li>
          </ul>
          <ul className='navbar-nav navbar-collapse justify-content-end'>
            <li><Link className='nav-link' to='/login'>Login</Link></li>
            <li><Link className='nav-link' to='/logout' onClick={AuthenticationService.logout}>Logout</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
