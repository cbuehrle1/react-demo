import React, { Component } from 'react';
import './App.css';
import Switchboard from './switchboard.js';
import ButtonSpace from './data.js';

class App extends Component {
  constructor(){
    super()
    this.setState({
      colors: {},
      phase: 0
    });
  }

  sendButtonCount() {
    let count;
  }

  currentPhase() {
    if (this.state.phase) {
      return (
        <div className='App'>
          <label for='count'>How many buttons?</label>
          <input id='count' />
          <button onClick={}>Submit</button>
        </div>
      )
    }
    else{
      return (
        <div className="App">
          <Switchboard count={ButtonSpace.count} colors={ButtonSpace.buttonColors} />
        </div>
      )
    }
  }

  render() {
    return (
      <div>{this.currentPhase()}</div>
    );
  }
}

export default App;
