import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}
class App2 extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-xs-1 col-xs-offest-11'>
            <h1>hello!!</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default App2;
