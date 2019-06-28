import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class CounterButton extends Component {
  constructor(props) {
    super(props);
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

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
}

export default CounterButton;
