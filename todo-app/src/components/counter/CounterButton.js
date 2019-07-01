import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class CounterButton extends Component {
  increment = () => {
    this.props.incrementMethod(this.props.by)
  }

  decrement = () => {
    this.props.incrementMethod(-this.props.by)
  }

  render () {
    return (
      <div className='counter'>
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    )
  }
}

CounterButton.defaultProps = {
  by: 1
}

CounterButton.propTypes = {
  by: PropTypes.number
}

export default CounterButton
