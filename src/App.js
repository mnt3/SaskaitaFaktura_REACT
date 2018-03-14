import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saskaitos from './komponentai/Saskaitos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">MNT</h1>
          <h1 className="App-title">Saskaitu fakturu apsas</h1>
        </header>
        <p className="App-intro">
          
        </p>
     < Saskaitos/>
      </div>
    );
  }
}

export default App;
