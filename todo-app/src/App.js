import React, { Component } from 'react';
import './App.css';
/* import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent'; */
import CounterButton from './components/counter/CounterButton';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterButton />
        <CounterButton by={5} />
        <CounterButton by={10} />
      </div>
    );
  }
}

/* class LearningComponents extends Component {
  render() {
    return (
      <div className='LearningComponents'>
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
} */

export default App;
