import React from 'react'
import { Link } from 'react-router-dom'

function Header ({ isUserLoggedIn = false, logoutUser }) {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div>
          <Link to='/' className='navbar-brand'>
            Site
          </Link>
        </div>
        {isUserLoggedIn && (
          <ul className='navbar-nav'>
            <li>
              <Link className='nav-link' to='/welcome/techbrenda'>
                Home
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/todo'>
                Todos
              </Link>
            </li>
          </ul>
        )}
        <ul className='navbar-nav navbar-collapse justify-content-end'>
          {!isUserLoggedIn && (
            <li>
              <Link className='nav-link' to='/'>
                Login
              </Link>
            </li>
          )}
          {isUserLoggedIn && (
            <li>
              <Link
                className='nav-link'
                to='/logout'
                onClick={logoutUser}
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
