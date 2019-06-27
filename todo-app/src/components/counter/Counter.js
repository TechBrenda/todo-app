import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  
  increment = () => {
    this.setState((prevState) => {return {counter: prevState.counter + 1}});
  }
  
  render = () => {
    return (
      <div className='counter'>
        <button onClick={this.increment}>+1</button>
        <span className='count'>{this.state.counter}</span>
      </div>
    );
  }
}

export default Counter;
