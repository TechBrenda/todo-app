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
    console.log('increment from parent')
    this.setState(prevState => {
      return {
        counter: prevState.counter + incrementer
      }
    })
  }

  render = () => {
    return (
      <div className='counter'>
        <CounterButton incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <span className='count'>{this.state.counter}</span>
      </div>
    )
  }
}

export default Counter
