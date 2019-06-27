import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';

class App extends Component {
  render() {
    return (
      <div className='App'>
        
      </div>
    );
  }
}

class LearningComponents extends Component {
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
}

export default App;
