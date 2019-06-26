import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        My Hello World
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className='firstComponent'>
        First Component
      </div>
    );
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <div className='secondComponent'>
        Second Component
      </div>
    );
  }
}

export default App;
