import React, { Component } from 'react';
import './App.css';
import Switchboard from './switchboard.js';
import ButtonSpace from './data.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      colors: {},
      phase: 0
    };
  }

  sendButtonCount(val) {
    const count = val;
    ButtonSpace.buttonInitialize();
    this.setState({
      colors: ButtonSpace.passTheColors(),
      phase: 1
    });
  }

  currentPhase() {
    if (this.state.phase) {
      return (
        <div className='App'>
          <label for='count'>How many buttons?</label>
          <input id='count' />
          <button onClick={event => {this.sendButtonCount(event.targe.value)}}>Submit</button>
        </div>
      )
    }
    else{

      return (
        <div className="App">
          <Switchboard count={ButtonSpace.passColorLength()} colors={ButtonSpace.buttonColors} />
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
