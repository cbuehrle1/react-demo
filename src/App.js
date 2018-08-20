import React, { Component } from 'react';
import './App.css';
import Switchboard from './switchboard.js';
import ButtonSpace from './data.js';

class App extends Component {
  constructor(props){
    super(props)
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

  reset() {
    ButtonSpace.resetButtonColors();
    this.setState({
      colors: {},
      phase: 0,
      count: 0
    });
  }

  handleButtonChange(id) {
    ButtonSpace.updateColors(id);
    this.setState({
      colors: ButtonSpace.passTheColors(),
      phase: this.state.phase,
      count: this.state.count
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
          <Switchboard
            count={this.state.count}
            colors={this.state.colors}
            onClick={(id) => {this.handleButtonChange(id)}}
          />
          <div>
            <button onClick={() => {this.reset()}}>
              Go Back to 0
            </button>
          </div>
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
