import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <header>
        <nav>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <ul>
            <li>welcome</li>
            <li>todos</li>
          </ul>
          <ul>
            <li>profile</li>
            <li>logout</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
