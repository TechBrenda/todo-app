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
    this.setState((prevState) => {return {counter: prevState.counter + this.props.by}});
  }
  
  render = () => {
    return (
      <div className='counter'>
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className='count'>{this.state.counter}</span>
      </div>
    );
  }
}

export default Counter;
