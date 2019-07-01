import React, { Component } from 'react'
import CounterButton from './CounterButton'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increment = incrementer => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + incrementer
      }
    })
  }

  reset = () => {
    this.setState({ counter: 0 })
  }

  render = () => {
    return (
      <div className='counter'>
        <CounterButton incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <span className='count'>{this.state.counter}</span>
        <div>
          <button className='reset' onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
