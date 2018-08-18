import React, { Component } from 'react';
import './App.css';
import Switchboard from './switchboard.js';
import ButtonSpace from './data.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      colors: {},
      phase: 0,
      count: 0
    };
  }

  sendButtonCount() {
    const count = this.state.count;
    ButtonSpace.buttonInitialize(count);
    this.setState({
      colors: ButtonSpace.passTheColors(),
      phase: 1,
      count: count
    });
  }

  currentPhase() {
    if (!this.state.phase) {
      return (
        <div className='App'>
          <label htmlFor='count'>How many buttons?</label>
          <input id='count' onChange={event => {this.setState({ count: event.target.value })}}/>
          <button onClick={() => {this.sendButtonCount()}}>Submit</button>
        </div>
      )
    }
    else{

      return (
        <div className="App">
          <Switchboard count={this.state.count} colors={this.state.colors} />
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
