import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Counter extends Component {

  render() {
    return (
      <div className='counter'>
        <CounterButton />
        <CounterButton by={5} />
        <CounterButton by={10} />
      </div>
    );
  }
}

export default Counter;