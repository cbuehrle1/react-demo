import React, { Component } from 'react';
import Button from './button.js';

class Switchboard extends Component {

  renderButton(i) {
    return <Button value={i}/>
  }

  buttonLoop() {
    let result =[]
    for(var i = 1; i < this.props.count; i++){
      let button = this.renderButton(i);
      result.push(button);
    }
    return result;
  }

  render() {
    return (
      <div>
        {this.buttonLoop()}
      </div>
    )
  }
}

export default Switchboard;
